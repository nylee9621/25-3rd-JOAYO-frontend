import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootParamList } from '@/utils/type';
import transAnimation from '@/utils/transAnimation';
import Menu from '@/navigations/Menu';
import FavoriteGenres from '@/screens/FavoriteGenres/FavoriteGenres';
import SimpleHeader from '@/components/Header/SimpleHeader';

const RootStack = createStackNavigator<RootParamList>();

const Root: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Root"
        component={Menu}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="FavoriteGenres"
        component={FavoriteGenres}
        options={{
          cardStyleInterpolator: transAnimation,
          header: () => <SimpleHeader title="선호장르" />,
        }}
      />
    </RootStack.Navigator>
  );
};

export default Root;
