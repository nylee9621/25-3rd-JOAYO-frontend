import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainListTab from '@/components/ListTab/MainListTab';
import Books from '@/screens/Books/Books';
import Main from '@/screens/Main/Main';
import { ListTabList } from '@/utils/type';

interface Props {
  tabs: Tab[];
  menu: string;
}

interface Tab {
  id: number;
  name: string;
  label: string;
}

const Tab = createMaterialTopTabNavigator<ListTabList>();

const ListTab: React.FC<Props> = ({ tabs, menu }) => {
  const matchComponentByMenu = (menu: string, tab: string) => {
    switch (menu) {
      case 'Event':
        return <Main />;
      case 'FinishBooks':
        return <Books menu={menu} tab={tab} />;
      case 'Storage':
        return <Main />;
      default:
        return <Books menu={menu} tab={tab} />;
    }
  };

  return (
    <Tab.Navigator tabBar={props => <MainListTab {...props} />}>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.id}
          name={tab.name as keyof ListTabList}
          children={() => matchComponentByMenu(menu, tab.name)}
          options={{ tabBarLabel: `${tab.label}` }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default ListTab;
