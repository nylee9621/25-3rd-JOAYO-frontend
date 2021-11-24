import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers';
import ListBookBox from '@/components/BookBox/ListBookBox';
import {
  filterBooksByFavoriteGenres,
  processBooks,
} from '@/utils/processBooks';
import { Book } from '@/utils/interface';
import BOOK_LIST from '@/data/BooksData';

interface Props {
  menu: string;
  tab: string;
}

const Books: React.FC<Props> = ({ menu, tab }) => {
  const { favoriteGenres } = useSelector(
    (state: RootState) => state.userReducer
  );
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setBooks(filterBooksByFavoriteGenres(BOOK_LIST, favoriteGenres));
  }, [favoriteGenres]);

  return (
    <Container>
      <List>
        {processBooks(books, menu, tab).map(book => (
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
