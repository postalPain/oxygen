package com.qstudio.floos;


import static android.content.Context.MODE_PRIVATE;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;
import android.util.Log;

import java.util.Arrays;
import java.util.Locale;

public class LanguageManager {
    private static LanguageManager sharedLanguageManagerInstance;
    static final String sharedPreferencesName = "languageManagerPreferences";
    static final String languageUserDefaultsKey = "appLang";
    static final String defaultLanguage = "en";
    static final String[] supportedLanguages = { defaultLanguage, "ar" };
    static final String[] rtlLanguages = { "ar" };
    private static String language;
    private Context context;

    private LanguageManager(Context context) {
        this.context = context;
        SharedPreferences userDefaults = context.getSharedPreferences(sharedPreferencesName, MODE_PRIVATE);
        String userDefaultsLang = userDefaults.getString(languageUserDefaultsKey, null);
        this.setLanguage(userDefaultsLang);
    }

    public static LanguageManager getInstance(Context context) {
        if (sharedLanguageManagerInstance == null) {
            sharedLanguageManagerInstance = new LanguageManager(context);
        }
        return sharedLanguageManagerInstance;
    }

    public Boolean isAllowRTL() {
        return Arrays.asList(rtlLanguages).contains(language);
    }

    public String getLanguage() {
        return language;
    }

    public String setLanguage(String lang) {
        String systemLang = Locale.getDefault().getLanguage();
        if (Arrays.asList(supportedLanguages).contains(lang)) {
            language = lang;
        } else if (Arrays.asList(supportedLanguages).contains(systemLang)) {
            language = systemLang;
        } else {
            language = defaultLanguage;
        }
        SharedPreferences userDefaults = context.getSharedPreferences(sharedPreferencesName, MODE_PRIVATE);
        Editor userDefaultsEditor = userDefaults.edit();
        userDefaultsEditor.putString(languageUserDefaultsKey, language);
        userDefaultsEditor.apply();

        return language;
    }
}
