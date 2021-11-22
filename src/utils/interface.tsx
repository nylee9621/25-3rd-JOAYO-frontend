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

interface User {
  id: number;
  favoriteGenres: string[];
}

interface SetUser {
  setFavoriteGenres: (props: SetFavoriteGenres) => void;
}

interface SetFavoriteGenres {
  type: string;
  payload: User['favoriteGenres'];
}
