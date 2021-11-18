import React from 'react';
import styled from 'styled-components/native';
import GENRE_LIST from '@/data/GenresData';

const FavoriteGenres: React.FC = () => {
  return (
    <Container stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      <Header>
        <Title>선호장르 선택</Title>
      </Header>
      <Contents></Contents>
    </Container>
  );
};

const Container = styled.ScrollView``;

const Header = styled.View`
  height: 48px;
  background-color: white;
  /* box-shadow: 0 0 3px 0 #e4e4e4; */
`;

const Title = styled.Text`
  color: black;
  font-size: 16px;
  line-height: 48px;
`;

const Contents = styled.View``;

export default FavoriteGenres;
