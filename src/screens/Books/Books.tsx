import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import ListBookBox from '@/components/BookBox/ListBookBox';

const Books: React.FC = () => {
  return (
    <Container>
      <List>
        <ListBookBox />
        <ListBookBox />
        <ListBookBox />
        <ListBookBox />
        <ListBookBox />
        <ListBookBox />
        <ListBookBox />
        <ListBookBox />
        <ListBookBox />
        <ListBookBox />
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
