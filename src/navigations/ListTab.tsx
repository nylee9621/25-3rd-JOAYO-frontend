import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ListTabList } from '@/utils/type';
import Main from '@/screens/Main/Main';
import MainListTab from '@/components/ListTab/MainListTab';

interface Props {
  tabs: Tab[];
}

interface Tab {
  id: number;
  name: string;
  label: string;
  navigate: React.FC<{}>;
}

const Tab = createMaterialTopTabNavigator<ListTabList>();

const ListTab: React.FC<Props> = ({ tabs }) => {
  return (
    <Tab.Navigator tabBar={props => <MainListTab {...props} />}>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.id}
          name={tab.name as keyof ListTabList}
          component={Main}
          options={{ tabBarLabel: `${tab.label}` }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default ListTab;
