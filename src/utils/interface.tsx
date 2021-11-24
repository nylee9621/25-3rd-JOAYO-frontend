export interface ScrollEvent {
  nativeEvent: { contentOffset: { x: number; y: number } };
}

export interface LayoutEvent {
  nativeEvent: {
    layout: { x: number; y: number; width: number; height: number };
  };
}

export interface Theme {
  theme: string;
}

export interface Label {
  size: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Layout {
  marginTop?: number;
  marginBottom?: number;
  paddingTop?: number;
}

export interface Book {
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
  favorites: number;
  today: { views: number; recommends: number; favorites: number };
  episodes: Episode[];
}

export interface Episode {
  id: number;
  subHeading: string;
  contents: string;
  authorReview: string;
  update: string;
  views: number;
  recommends: number;
  comments: Comment[];
}

export interface Comment {
  id: number;
  nickname: string;
  update: string;
  comment: string;
}

export interface User {
  id: number;
  favoriteGenres: string[];
  favoriteBooks: { bookId: number; bookmark: number }[];
}

export interface SetUser {
  setFavoriteGenres: (props: SetFavoriteGenres) => void;
  setFavoriteBooks: (props: SetFavoriteBooks) => void;
}

export interface SetFavoriteGenres {
  type: string;
  payload: User['favoriteGenres'];
}

export interface SetFavoriteBooks {
  type: string;
  payload: User['favoriteBooks'];
}
