import React from 'react';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import GENRE_LIST from '@/data/GenresData';
import { displayWidth } from '@/constants/sizes';
import { setFavoriteGenres } from '@/store/actions';
import { RootState } from '@/store/reducers';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface GenreItemProps extends IsFavorite {
  id: number;
  height: number;
  defaultBackColor: string;
}

interface IsFavorite {
  isFavorite: boolean;
}

const GenreItemHeight = displayWidth / 4;

const FavoriteGenres: React.FC = () => {
  const { favoriteGenres } = useSelector(
    (state: RootState) => state.userReducer
  );
  const dispatch = useDispatch();

  const pressGenreItem = (genre: string) => {
    if (genre === '전체') {
      dispatch(setFavoriteGenres(['전체']));
    } else {
      if (favoriteGenres.includes(genre)) {
        const tempGenres = favoriteGenres.filter((el: string) => el !== genre);
        dispatch(
          setFavoriteGenres(tempGenres.length === 0 ? ['전체'] : tempGenres)
        );
      } else {
        const tempGenres = favoriteGenres.filter((el: string) => el !== '전체');
        dispatch(setFavoriteGenres([...tempGenres, genre]));
      }
    }
  };

  const decideTheme = (id: number) => {
    const GRAY_ORDER = [1, 0, 1, 0, 0, 1, 0, 1];
    return GRAY_ORDER[(id - 1) % 8] ? '#f7f7f7' : 'white';
  };

  return (
    <Container>
      {GENRE_LIST.map(genre => (
        <GenreItem
          key={genre.id}
          id={genre.id}
          height={GenreItemHeight}
          defaultBackColor={decideTheme(genre.id)}
          isFavorite={favoriteGenres.includes(genre.name)}
          activeOpacity={1}
          onPress={() => pressGenreItem(genre.name)}
        >
          <Picking>
            <FontAwesomeIcon
              icon={faChevronDown}
              size={6}
              color={'#ffffff50'}
            />
          </Picking>
          <Name isFavorite={favoriteGenres.includes(genre.name)}>
            {genre.name}
          </Name>
        </GenreItem>
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #efefef;
  padding: 8px;
`;

const GenreItem = styled.TouchableOpacity<GenreItemProps>`
  justify-content: center;
  align-items: center;
  width: 25%;
  height: ${({ height }) => height}px;
  background-color: ${({ defaultBackColor, isFavorite }) =>
    isFavorite ? '#20459e' : defaultBackColor};
  border-color: #dadada;
  border-right-width: 0.3px;
  border-bottom-width: 0.3px;
  ${({ id }) => (id <= 4 ? 'border-top-width: 0.3px;' : '')};
  ${({ id }) => (id % 4 === 1 ? 'border-left-width: 0.3px;' : '')};
`;

const Name = styled.Text<IsFavorite>`
  color: ${({ isFavorite }) => (isFavorite ? 'white' : '#666666')};
`;

const Picking = styled.View`
  flex: 1;
  align-items: center;
  position: absolute;
  top: 10px;
`;

export default FavoriteGenres;
