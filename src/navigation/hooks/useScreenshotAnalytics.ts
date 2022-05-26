import moment from 'moment';
import { useEffect } from 'react';
import { addScreenshotListener } from 'react-native-detector';
import { analyticEvents, analytics } from 'services/analytics';

export const useScreenshotAnalytics = (navigationRef) => {
  useEffect(() => {
    const userDidScreenshot = () => {
      analytics.logEvent(analyticEvents.screenshot_taken, {
        screen_name: navigationRef.current.getCurrentRoute().name,
        timestamp: moment().utc().toISOString(),
      });
    };
    const unsubscribe = addScreenshotListener(userDidScreenshot);
    return () => {
      unsubscribe();
    };
  }, []);
};