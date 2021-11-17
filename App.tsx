import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import LoadFonts from './src/components/LoadFonts/LoadFonts';
import Menu from '@/navigations/Menu/Menu';

const statusBarHeight =
  Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

const Stack = createStackNavigator();

const App = () => {
  const [isLoadFont, setIsLoadFont] = useState<boolean>(false);

  if (!isLoadFont) return <LoadFonts setIsLoadFont={setIsLoadFont} />;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Menu}
          options={{
            headerStyle: { height: statusBarHeight },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
