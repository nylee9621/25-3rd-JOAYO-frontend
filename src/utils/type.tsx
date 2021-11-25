import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootParamList = {
  Root: undefined;
  FavoriteGenres: undefined;
};

export type MenuParamList = {
  Main: undefined;
  Event: undefined;
  FinishBooks: undefined;
  LatestBooks: NavigatorScreenParams<ListTabList> | undefined;
  TodayBest: undefined;
  Storage: undefined;
};

export type ListTabList = {
  All: undefined;
  Festival: undefined;
  Festa: undefined;
  Born: undefined;
};

export type MenuScreenNavProp = CompositeNavigationProp<
  BottomTabNavigationProp<MenuParamList, keyof MenuParamList>,
  StackNavigationProp<RootParamList>
>;

export type FavoritGenresScreenNavProp = StackNavigationProp<RootParamList>;
