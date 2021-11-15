import React from 'react';
import styled from 'styled-components/native';
import NewLabel from '@/components/Label/NewLabel';
import BookItem from './BookItem/BookItem';

interface props {
  data: {
    id: number;
    title: { isStrong: boolean; text: string }[];
    isNew: boolean;
    api: string;
  };
  theme: string;
}

interface theme {
  theme: string;
}

const BookList = (props: props) => {
  const { title, isNew } = props.data;
  const { theme } = props;

  return (
    <Container theme={theme}>
      <Title>
        {title.map((el, idx) => (
          <Word key={idx} theme={theme} isStrong={el.isStrong}>
            {el.text}
          </Word>
        ))}
        {isNew && <NewLabel />}
      </Title>
      <Contents horizontal showsHorizontalScrollIndicator={false}>
        <BookItem theme={theme} />
        <BookItem theme={theme} />
        <BookItem theme={theme} />
        <BookItem theme={theme} />
        <BookItem theme={theme} />
        <BookItem theme={theme} />
        <BookItem theme={theme} />
      </Contents>
    </Container>
  );
};

const Container = styled.View<theme>`
  padding: 10px 0 25px 16px;
  background-color: ${({ theme }) =>
    theme === 'bright' ? 'white' : 'rgb(37, 47, 60)'};
`;

const Title = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Word = styled.Text<{ theme: string; isStrong: boolean }>`
  color: ${({ theme, isStrong }) =>
    isStrong ? '#4186e1' : theme === 'bright' ? '#333333' : '#DADADA'};
  font-family: 'NotoSansKR500';
  font-size: 17px;
`;

const Contents = styled.ScrollView`
  flex-direction: row;
`;

export default BookList;
