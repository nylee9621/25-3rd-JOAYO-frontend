interface ScrollEvent {
  nativeEvent: { contentOffset: { x: number; y: number } };
}

interface LayoutEvent {
  nativeEvent: {
    layout: { x: number; y: number; width: number; height: number };
  };
}

interface Theme {
  theme: string;
}

interface Label {
  size: number;
}

interface Size {
  width?: number;
  height?: number;
}

interface Layout {
  marginTop?: number;
  marginBottom?: number;
  paddingTop?: number;
}

interface Book {
  id: number;
  genre: string;
  title: string;
  author: string;
  summary: string;
  keyword: string[];
  cover: any;
  store: string;
  competition: string;
  isEnded: boolean;
  views: number;
  recommends: number;
  favorites: number;
  todayViews: number;
  todayRecommends: number;
  todayFavorites: number;
  episode: Episode[];
}

interface Episode {
  id: number;
  subHeading: string;
  contents: string;
  authorReview: string;
  update: string;
}

interface User {
  id: number;
  favoriteGenres: string[];
  favoriteBooks: { bookId: number; bookmark: number }[];
}

interface SetUser {
  setFavoriteGenres: (props: SetFavoriteGenres) => void;
  setFavoriteBooks: (props: SetFavoriteBooks) => void;
}

interface SetFavoriteGenres {
  type: string;
  payload: User['favoriteGenres'];
}

interface SetFavoriteBooks {
  type: string;
  payload: User['favoriteBooks'];
}
