package com.qstudio.floos;

import android.content.Context;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.i18nmanager.I18nUtil;

import java.util.HashMap;
import java.util.Map;

public class LanguageManagerModule  extends ReactContextBaseJavaModule {
    LanguageManager languageManager;
    Context context;
    @Override
    public String getName() {
        return "RNLanguageManager";
    }

    LanguageManagerModule(ReactApplicationContext context) {
        super(context);
        this.context = context;
        this.languageManager = LanguageManager.getInstance(context);
    }

    @ReactMethod
    public void isAllowRTL(Promise promise) {
        promise.resolve(this.languageManager.isAllowRTL());
    }

    @ReactMethod
    public void getLang(Promise promise) {
        promise.resolve(this.languageManager.getLanguage());
    }

    @ReactMethod
    public void setLang(String lang, Promise promise) {
        String updatedLanguage = this.languageManager.setLanguage(lang);
        Boolean isAllowRTL = this.languageManager.isAllowRTL();
        I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
        sharedI18nUtilInstance.allowRTL(context, isAllowRTL);
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("INITIAL_LANGUAGE", LanguageManager.language);
        return constants;
    }
}
