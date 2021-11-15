import * as Font from 'expo-font';

const getFonts = async () => {
  await Font.loadAsync({
    'Kanit-Bold': require('@/assets/fonts/Kanit-Bold.ttf'),
    NotoSansKR400: require('@/assets/fonts/NotoSansKR-Regular.otf'),
    NotoSansKR500: require('@/assets/fonts/NotoSansKR-Medium.otf'),
  });
};

export default getFonts;
