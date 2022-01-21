import { ThemeType } from '@stryberventures/stryber-react-native-ui-components';
import { windowDimensions } from 'utils/window';

const theme = {
  colors: {
    // Brand colors
    primary: '#6F62AB',
    floos1: '#6F62AB',
    floos2: '#7E5BA6',
    floos3: '#CD5676',
    floos4: '#795CE8', // Deprecated. Use floos1 instead
    special1: '#97DAFF',
    floosGragientColor1: '#975FBA',
    floosGragientColor2: '#B26090',
    floosGradientColor3: '#E6C1FF',
    // Background colors
    screenBackgroundColorLight: '#FFFFFF',
    // Text colors
    textDark: '#0F183F',
    textLight: '#7B7B7B',

    shade1: '#C6C6C6',
    shade2: '#F7F7F7',
    error: '#EA3546',

    checkboxBorderColor: '#CFD8DC',

    headerTextColor: '#7D59B4', // Deprecated. Use floos1 instead

    passwordRequirementLabelBackgroundDefault: '#E1E1E1',
    passwordRequirementLabelTextDefault: '#767676',
    passwordRequirementLabelBackgroundMatched: '#6CA78B',
    passwordRequirementLabelTextMatched: '#F9F9F9',

    personalInfoBackground: '#F9F9F9',

    textTransactionPending: '#BBBBBB',
    textTransactionError: '#720000',
  },
  notifications: {
    boxShadowColor: 'rgba(0, 0, 0, 0.25)',
    boxShadowOffset: {
      width: 2,
      height: 3,
    },
    errorBackground: '#FFEFEF',
    errorTextColor: '#720000',
    successTextColor: '#0F183F',
  },
  sizes: {
    textLargeTitleSize: 34,
    textTitleBigSize: 28,
    textTitleMediumSize: 22,
    textTitleSmallSize: 20,
    textHeadlineSize: 18,
    textBodySize: 16,
    fontSizeHeaderSmall: 0.05 * windowDimensions.width,
    fontSizeHeaderLarge: 0.07 * windowDimensions.width,
  },
  font: {
    fontFamily: 'Open Sans'
  }
};

export type ProjectThemeType = ThemeType & typeof theme;

export default theme;
