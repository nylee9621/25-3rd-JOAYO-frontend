import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import LoadFonts from './src/components/LoadFonts/LoadFonts';
import Menu from '@/navigations/Menu/Menu';
import { RootParamList } from '@/utils/type';
import FavoriteGenres from '@/screens/FavoriteGenres/FavoriteGenres';
import transAnimation from '@/utils/transAnimation';

const statusBarHeight =
  Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

const RootStack = createStackNavigator<RootParamList>();

const App = () => {
  const [isLoadFont, setIsLoadFont] = useState<boolean>(false);

  if (!isLoadFont) return <LoadFonts setIsLoadFont={setIsLoadFont} />;
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Root"
          component={Menu}
          options={{
            headerStyle: { height: statusBarHeight },
          }}
        />
        <RootStack.Screen
          name="선호장르"
          component={FavoriteGenres}
          options={{ cardStyleInterpolator: transAnimation }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
