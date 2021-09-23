import { ThemeType } from '@stryberventures/stryber-react-native-ui-components';

const theme = {
  colors: {
    // Brand colors
    floos1: '#6F62AB',
    floos2: '#7E5BA6',
    floos3: '#CD5676',
    special1: '#97DAFF',
    floosGragientColor1: '#975FBA',
    floosGragientColor2: '#B26090',
    // Background colors
    screenBackgroundColorLight: '#FFFFFF',
    // Text colors
    textDark: '#0F183F',

    shade1: '#C6C6C6',
    shade2: '#F9F9F9',
    error: '#EA3546',
  },
  notifications: {
    boxShadowColor: 'rgba(0, 0, 0, 0.25)',
    boxShadowOffset: {
      width: 0,
      height: 3,
    },
    errorBackground: '#FFEFEF',
    errorTextColor: '#720000',
  },
  sizes: {
    textLargeTitleSize: 34,
    textTitleBigSize: 28,
    textTitleMediumSize: 22,
    textTitleSmallSize: 20,
    textHeadlineSize: 18,
    textBodySize: 16,
  }
};

export type ProjectThemeType = ThemeType & typeof theme;

export default theme;
