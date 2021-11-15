import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/screens/Main/Main';
import LoadFonts from './src/components/LoadFonts/LoadFonts';
import Menu from '@/components/Menu/Menu';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoadFont, setIsLoadFont] = useState<boolean>(false);

  if (!isLoadFont) return <LoadFonts setIsLoadFont={setIsLoadFont} />;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
      <Menu />
    </NavigationContainer>
  );
};

export default App;
