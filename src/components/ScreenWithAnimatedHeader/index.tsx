import React, { useEffect, useRef } from 'react';
import {
  Animated,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import useKeyboard from 'utils/useKeyboard';
import env from 'env';
import useStyles, { HEADER_SHIFT } from './styles';


interface IScreenWithAnimatedHeaderProps {
  title: string | React.ReactNode;
}

const ScreenWithAnimatedHeader: React.FC<IScreenWithAnimatedHeaderProps> = ({ children }): React.ReactElement => {
  const styles = useStyles();
  const { keyboardIsVisible, animationDuration } = useKeyboard();
  const keyboardAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (keyboardIsVisible) {
      Animated.timing(keyboardAnimation, {
        duration: animationDuration,
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(keyboardAnimation, {
        duration: animationDuration,
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [keyboardIsVisible]);
  const topPaddingScale = keyboardAnimation.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });
  const headerPosition = keyboardAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, HEADER_SHIFT] });
  const headerOpacity = keyboardAnimation.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });
  const formPosition = keyboardAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, HEADER_SHIFT] });
  const screenBottomPaddingScale = keyboardAnimation.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });
  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={10}
          contentContainerStyle={styles.keyboardAvoidingView}
          behavior={env.ios ? 'padding' : 'padding'}
          style={styles.screen}
        >
          <Animated.View
            style={[
              styles.header,
              {
                transform: [{ translateY: headerPosition }],
                opacity: headerOpacity,
              }
            ]}
          >
            <Animated.View
              style={[
                styles.topPadding,
                { transform: [{ scaleY: topPaddingScale }] },
              ]}
            />
            <Animated.View style={styles.logoContainer}>
              <Image source={require('../../../assets/logo_with_name.png')} />
            </Animated.View>
          </Animated.View>
          <Animated.View
            style={[
              styles.headerPlaceholder,
              { transform: [{ scaleY: topPaddingScale }] },
              { marginTop: keyboardIsVisible ? 0 : 10, },
            ]}
          />
          <Animated.View
            style={[
              styles.container,
              { transform: [{ translateY: formPosition }] }
            ]}
          >
            {children}
          </Animated.View>
          <Animated.View
            style={[
              styles.bottomPadding,
              {
                transform: [{ scaleY: screenBottomPaddingScale }]
              }
            ]}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ScreenWithAnimatedHeader;
