package com.qstudio.floos;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.modules.i18nmanager.I18nUtil;

import java.util.Arrays;
import java.util.Locale;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Floos";
  }

  protected void onCreate (android.os.Bundle savedInstanceState) {
    SplashScreen.show(this, R.style.Launcher);
    super.onCreate(savedInstanceState);

    LanguageManager languageManager = LanguageManager.getInstance(getApplicationContext());
    boolean isAllowRTL = languageManager.isAllowRTL();
    I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
    sharedI18nUtilInstance.allowRTL(getApplicationContext(), isAllowRTL);
    sharedI18nUtilInstance.forceRTL(getApplicationContext(), isAllowRTL);
  }
}
