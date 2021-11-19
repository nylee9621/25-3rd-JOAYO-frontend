import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootParamList = {
  Root: undefined;
  선호장르: undefined;
};

export type MenuParamList = {
  메인: undefined;
  이벤트: undefined;
  완결: undefined;
  최신작품: undefined;
  'Today Best': undefined;
  보관함: undefined;
};

export type MainScreenNavProp = CompositeNavigationProp<
  BottomTabNavigationProp<MenuParamList, '메인'>,
  StackNavigationProp<RootParamList>
>;

export type FavoritGenresScreenNavProp = StackNavigationProp<RootParamList>;
