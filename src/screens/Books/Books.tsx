import React from 'react';
import styled from 'styled-components/native';
import ListBookBox from '@/components/BookBox/ListBookBox';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers';
import { filterBooksByFavoriteGenres } from '@/utils/processBooks';

interface Props {
  books: Book[];
}

const Books: React.FC<Props> = ({ books }) => {
  const { favoriteGenres } = useSelector(
    (state: RootState) => state.userReducer
  );

  return (
    <Container>
      <List>
        {filterBooksByFavoriteGenres(books, favoriteGenres).map(book => (
          <ListBookBox key={book.id} book={book} />
        ))}
      </List>
    </Container>
  );
};

const Container = styled.ScrollView`
  padding: 6px;
`;

const List = styled.View`
  margin-bottom: 12px;
  border: 0.5px solid #ebebeb;
`;

export default Books;
