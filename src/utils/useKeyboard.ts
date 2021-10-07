import React from 'react';
import { Keyboard } from 'react-native';

export interface IKeyboardHookParams {
  onKeyboardShow?: () => void;
  onKeyboardHide?: () => void;
}

export interface IKeyboardHook {
  keyboardIsVisible: boolean;
  keyboardHeight: number;
  animationDuration: number;
}

export const useKeyboard = (params?: IKeyboardHookParams): IKeyboardHook => {
  const {
    onKeyboardShow,
    onKeyboardHide,
  } = params || {};
  const [
    keyboardDidShowEventListener,
    setKeyboardDidShowEventListener,
  ] = React.useState(null);
  const [
    keyboardDidHideEventListener,
    setKeyboardDidHideEventListener,
  ] = React.useState(null);
  const [
    keyboardIsVisible,
    setKeyboardIsVisible,
  ] = React.useState<boolean>(false);
  const [
    keyboardHeight,
    setKeyboardHeight,
  ] = React.useState<number>(null);
  const [
    animationDuration,
    setAnimationDuration,
  ] = React.useState<number>(null);
  
  
  const keyboardDidShow = (e) => {
    setKeyboardIsVisible(true);
    setKeyboardHeight(e.endCoordinates.height);
    setAnimationDuration(e.duration);
    onKeyboardShow && onKeyboardShow();
  };
  const keyboardDidHide = () => {
    setKeyboardIsVisible(false);
    onKeyboardHide && onKeyboardHide();
  };
  
  React.useEffect(() => {
    setKeyboardDidShowEventListener(
      // @ts-ignore
      Keyboard.addListener('keyboardDidShow', keyboardDidShow),
    );
    setKeyboardDidHideEventListener(
      // @ts-ignore
      Keyboard.addListener('keyboardDidHide', keyboardDidHide),
    );
    return () => {
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      keyboardDidShowEventListener && keyboardDidShowEventListener.remove();
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      keyboardDidShowEventListener && keyboardDidHideEventListener.remove();
    };
  }, []);
  
  return {
    keyboardIsVisible,
    keyboardHeight,
    animationDuration,
  };
};

export default useKeyboard;
