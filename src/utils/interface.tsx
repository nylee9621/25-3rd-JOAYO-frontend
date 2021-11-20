interface NativeEvent {
  nativeEvent: { contentOffset: { x: number; y: number } };
}

interface Theme {
  theme: string;
}

interface Size {
  width: number;
  height: number;
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
