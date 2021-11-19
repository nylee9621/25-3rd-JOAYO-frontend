import React from 'react';
import AppLoading from 'expo-app-loading';
import getFonts from '@/utils/getFonts';

interface Props {
  setIsLoadFont: (tf: boolean) => void;
}

const LoadFonts: React.FC<Props> = ({ setIsLoadFont }) => {
  return (
    <AppLoading
      startAsync={() => getFonts()}
      onFinish={() => setIsLoadFont(true)}
      onError={console.warn}
    />
  );
};

export default LoadFonts;
