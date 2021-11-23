import { Alert } from 'react-native';

const goAlert = (message: string, func: () => void) => {
  Alert.alert('안내', message, [
    { text: '취소' },
    { text: '확인', onPress: func },
  ]);
};

export default goAlert;
