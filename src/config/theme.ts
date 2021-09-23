import { ThemeType } from '@stryberventures/stryber-react-native-ui-components';

const theme = {
  components: {
    link: {
      color: '#9B5555',
    },
  },
  colors: {
    // Brand colors
    floos1: '#0D163C',
    floos2: '#BE5D75',
    floos3: '#7D59B4',
    floos4: '#795CE8',
    floos5: '#97DAFF',
    floosGragientColor1: '#975FBA',
    floosGragientColor2: '#B26090',
    // Background colors
    screenBackgroundColorLight: '#E5E5E5',
    // Text colors
    textDark: '#3C3C3B',
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
