import React, { useEffect, useState } from 'react';
import { AppState, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const AppStatusBlur = () => {
  const [appState, setAppState] = useState(AppState.currentState);
  const handleAppState = () => {
    setAppState(AppState.currentState);
  };
  useEffect(()=> {
    const subscription = AppState.addEventListener('change', handleAppState);
    return ()=> {
      subscription.remove();
    };
  }, []);

  return (
    <>
      {appState !== 'active' && <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />}
    </>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});

export default AppStatusBlur;
