import moment from 'moment';
import { useEffect } from 'react';
// @ts-ignore (wrong module name in package's index.d.ts, PR is still pending)
import * as ScreenshotDetector from 'react-native-screenshot-detect';
import { analyticEvents, analytics } from 'services/analytics';

export const useScreenshotAnalytics = (navigationRef) => {
  useEffect(() => {
    const handler = ScreenshotDetector.subscribe(() => {
      analytics.logEvent(analyticEvents.screenshot_taken, {
        screen_name: navigationRef.current.getCurrentRoute().name,
        timestamp: moment().utc().toISOString(),
      });
    });

    return () => {
      ScreenshotDetector.unsubscribe(handler);
    };
  }, []);
};