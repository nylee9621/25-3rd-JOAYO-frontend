import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import styled from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Main from '@/screens/Main/Main';
import CommonHeader from '@/components/Header/CommonHeader';
import ListTab from '@/navigations/ListTab';
import MENU_LIST from '@/data/MenuData';
import { MenuParamList, MenuScreenNavProp } from '@/utils/type';
import { statusBarHeight } from '@/constants/sizes';

const Tab = createBottomTabNavigator<MenuParamList>();

const Menu: React.FC = () => {
  const navigation = useNavigation<MenuScreenNavProp>();

  useEffect(() => {
    const goBack = () => {
      navigation.goBack();
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', goBack);
    return BackHandler.removeEventListener('hardwareBackPress', goBack);
  }, []);

  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { height: 60 } }}>
      <Tab.Screen
        key={0}
        name="Main"
        component={Main}
        options={{
          tabBarItemStyle: { display: 'none' },
          headerStyle: { height: statusBarHeight },
        }}
      />
      {MENU_LIST.map(menu => (
        <Tab.Screen
          key={menu.id}
          name={menu.name as keyof MenuParamList}
          children={() => <ListTab tabs={menu.listTabs} menu={menu.name} />}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon source={focused ? menu.activeIcon : menu.inactiveIcon} />
            ),
            tabBarLabel: ({ focused }) => (
              <Name focused={focused}>{menu.label}</Name>
            ),
            header: () => <CommonHeader title={menu.label} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;

const Name = styled.Text<{ focused: boolean }>`
  color: ${({ focused }) => (focused ? '#20459e' : '#7f7f7f')};
  top: -10px;
  font-size: 10px;
`;

export default Menu;
