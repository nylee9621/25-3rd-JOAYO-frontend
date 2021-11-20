import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootParamList = {
  Root: undefined;
  FavoriteGenres: undefined;
};

export type MenuParamList = {
  Main: undefined;
  Event: undefined;
  FinishBooks: undefined;
  LatestBooks: undefined;
  TodayBest: undefined;
  Storage: undefined;
};

export type ListTabList = { All: undefined };

export type MainScreenNavProp = CompositeNavigationProp<
  BottomTabNavigationProp<MenuParamList, 'Main'>,
  StackNavigationProp<RootParamList>
>;

export type FavoritGenresScreenNavProp = StackNavigationProp<RootParamList>;
