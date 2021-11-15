import React from 'react';
import AppLoading from 'expo-app-loading';
import getFonts from '@/utils/getFonts';

interface loadFontsProps {
  setIsLoadFont: Function;
}

const LoadFonts = ({ setIsLoadFont }: loadFontsProps) => {
  return (
    <AppLoading
      startAsync={() => getFonts()}
      onFinish={() => setIsLoadFont(true)}
      onError={console.warn}
    />
  );
};

export default LoadFonts;
