export const SET_FAVORITE_GENRES = 'SET_FAVORITE_GENRES';

export const setFavoriteGenres =
  (genres: User['favoriteGenres']) =>
  (dispatch: SetUser['setFavoriteGenres']) => {
    dispatch({ type: SET_FAVORITE_GENRES, payload: genres });
  };
