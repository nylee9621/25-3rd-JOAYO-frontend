import React from 'react';
import styled from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '@/screens/Main/Main';
import MENU_LIST from '@/data/MenuData';
import { MenuParamList } from '@/utils/type';

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
          headerShown: false,
        }}
      />
      {MENU_LIST.map(menu => (
        <Tab.Screen
          key={menu.id}
          name={menu.name as keyof MenuParamList}
          component={Main}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon source={focused ? menu.activeIcon : menu.inactiveIcon} />
            ),
            tabBarLabel: ({ focused }) => (
              <Name focused={focused}>{menu.name}</Name>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  height: 60px;
`;

const MenuItem = styled.TouchableOpacity<Size>`
  align-items: center;
  width: ${({ width }) => width}%;
`;

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
