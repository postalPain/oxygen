package com.qstudio.floos;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

import com.facebook.react.modules.i18nmanager.I18nUtil;


public class MainActivity extends ReactActivity {
  private ViewGroup blurView;
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

  @Override
  public void setContentView(View view) {
    View container = LayoutInflater.from(getApplicationContext()).inflate(R.layout.main_screen, null);
    blurView = container.findViewById(R.id.blur_root_view);
    blurView.setTranslationX(5000);
    ViewGroup mainView = container.findViewById(R.id.root_view);
    mainView.addView(view);

    super.setContentView(container);
  }

  public void onPause () {
    blurView.setTranslationX(0);
    super.onPause();
  }

  public void onResume () {
    super.onResume();
    blurView.setTranslationX(5000);
  }
}
