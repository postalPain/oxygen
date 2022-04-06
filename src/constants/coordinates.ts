import { circleLargeSize } from '../components/CircleLarge';
import { circleMediumSize } from '../components/CircleMedium';
import { circleSmallSize } from '../components/CircleSmall';
import { windowDimensions } from '../utils/window';
import { isRTL } from '../config/rtl';

export const getCircleCoordinates = (checkRTL = true) => {
  const rtlDirection = isRTL && checkRTL ? -1 : 1;
  const screenWidth = windowDimensions.width;

  return [{
    large: { x: (screenWidth - 0.65 * circleLargeSize) * rtlDirection, y: -0.3 * circleLargeSize },
    medium: { x: -0.14 * circleMediumSize, y: -0.14 * circleMediumSize },
    small1: { x: -0.3 * circleSmallSize, y: 3 * circleSmallSize },
    small2: { x: (screenWidth - 0.66 * circleSmallSize) * rtlDirection, y: 3.2 * circleSmallSize }
  },
  {
    large: { x: - 0.07 * circleLargeSize, y: -0.5 * circleLargeSize },
    medium: { x: (screenWidth - 0.71 * circleMediumSize) * rtlDirection, y: 0.71 * circleMediumSize },
    small1: { x: 0.5 * circleSmallSize, y: 2.5 * circleSmallSize },
    small2: { x: (screenWidth - 0.5 * circleSmallSize) * rtlDirection, y: 0 }
  },
  {
    large: { x: (screenWidth - 0.61 * circleLargeSize) * rtlDirection, y: 0.07 * circleLargeSize },
    medium: { x: 0.14 * circleMediumSize, y: -0.14 * circleMediumSize },
    small1: { x: -0.41 * circleSmallSize, y: 3 * circleSmallSize },
    small2: { x: (screenWidth - 3.3 * circleSmallSize) * rtlDirection, y: -0.16 * circleSmallSize }
  }];
};
