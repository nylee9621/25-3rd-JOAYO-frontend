import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { SET_FAVORITE_GENRES } from './actions';

const INITIAL_USER: User = { id: 0, favoriteGenres: ['전체'] };

const userReducer = (state = INITIAL_USER, action: SetFavoriteGenres) => {
  switch (action.type) {
    case SET_FAVORITE_GENRES:
      return { ...state, favoriteGenres: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ userReducer });

export type RootState = ReturnType<typeof rootReducer>;

export const Store = createStore(rootReducer, applyMiddleware(thunk));
