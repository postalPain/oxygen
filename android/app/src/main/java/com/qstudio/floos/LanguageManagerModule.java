package com.qstudio.floos;

import android.content.Context;
import com.google.gson.Gson;
import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.i18nmanager.I18nUtil;

import java.util.HashMap;
import java.util.Map;

public class LanguageManagerModule  extends ReactContextBaseJavaModule {
    final private LanguageManager languageManager;
    final private Context context;
    @Override
    public String getName() {
        return "RNLanguageManager";
    }

    LanguageManagerModule(ReactApplicationContext context) {
        super(context);
        this.context = context;
        languageManager = LanguageManager.getInstance(context);
    }

    @ReactMethod
    public void getLang(Promise promise) {
        promise.resolve(languageManager.getLanguage());
    }

    @ReactMethod
    public void setLang(String lang, Promise promise) {
        String updatedLanguage = languageManager.setLanguage(lang);
        Boolean isAllowRTL = languageManager.isAllowRTL();
        I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
        sharedI18nUtilInstance.allowRTL(context, isAllowRTL);
        sharedI18nUtilInstance.forceRTL(context, isAllowRTL);
        promise.resolve(updatedLanguage);
    }

    @Override
    public Map<String, Object> getConstants() {
        Gson gson = new Gson();
        final Map<String, Object> constants = new HashMap<>();

        constants.put("INITIAL_LANGUAGE", languageManager.getLanguage());
        constants.put("SUPPORTED_LANGUAGES", gson.toJson(LanguageManager.supportedLanguages));
        return constants;
    }
}
