import React from 'react';
import AppLoading from 'expo-app-loading';
import getFonts from '@/utils/getFonts';

const LoadFonts = (props: { setIsLoadFont: Function }) => {
  const { setIsLoadFont } = props;

  return (
    <AppLoading
      startAsync={() => getFonts()}
      onFinish={() => setIsLoadFont(true)}
      onError={console.warn}
    />
  );
};

export default LoadFonts;
