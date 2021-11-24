import { User } from '@/utils/interface';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { SET_FAVORITE_BOOKS, SET_FAVORITE_GENRES } from './actions';

const INITIAL_USER: User = {
  id: 0,
  favoriteGenres: ['전체'],
  favoriteBooks: [],
};

const userReducer = (
  state = INITIAL_USER,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case SET_FAVORITE_GENRES:
      return { ...state, favoriteGenres: action.payload };
    case SET_FAVORITE_BOOKS:
      return { ...state, favoriteBooks: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ userReducer });

export type RootState = ReturnType<typeof rootReducer>;

export const Store = createStore(rootReducer, applyMiddleware(thunk));
