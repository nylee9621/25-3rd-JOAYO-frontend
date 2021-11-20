import React, { ComponentType } from 'react';
import styled from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '@/screens/Main/Main';
import MENU_LIST from '@/data/MenuData';
import { MenuParamList } from '@/utils/type';
import CommonHeader from '@/components/Header/CommonHeader';
import { statusBarHeight } from '@/constants/sizes';

const Tab = createBottomTabNavigator<MenuParamList>();

const Menu: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { height: 60 } }}>
      <Tab.Screen
        key={0}
        name="메인"
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
          component={menu.navigate}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon source={focused ? menu.activeIcon : menu.inactiveIcon} />
            ),
            tabBarLabel: ({ focused }) => (
              <Name focused={focused}>{menu.name}</Name>
            ),
            header: () => <CommonHeader title={menu.name} />,
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
