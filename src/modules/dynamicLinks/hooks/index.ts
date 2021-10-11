import { useEffect, useState } from "react";
import dynamicLinks from '@react-native-firebase/dynamic-links';

export const useDynamicLinks = () => {
  const [link, setLink] = useState(null);

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(setLink);
    dynamicLinks().getInitialLink().then(setLink);
    return () => unsubscribe();
  }, []);

  return [link];
};