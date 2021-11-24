import { SetUser, User } from '@/utils/interface';

export const SET_FAVORITE_GENRES = 'SET_FAVORITE_GENRES';
export const SET_FAVORITE_BOOKS = 'SET_FAVORITE_BOOKS';

export const setFavoriteGenres =
  (genres: User['favoriteGenres']) =>
  (dispatch: SetUser['setFavoriteGenres']) => {
    dispatch({ type: SET_FAVORITE_GENRES, payload: genres });
  };

export const setFavoriteBooks =
  (books: User['favoriteBooks']) => (dispatch: SetUser['setFavoriteBooks']) => {
    dispatch({ type: SET_FAVORITE_BOOKS, payload: books });
  };
