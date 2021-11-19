import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import RECOMMEND_CATEGORY_LIST from '@/data/Main/RecommendListData';
import MiddleBanner from './MiddleBanner';
import BookLine from '@/components/BookLine/BookLine';

interface Props {
  headerScrollDistance: number;
}

const MD_RECOMMEND_DATA = {
  id: 1,
  title: [
    { isStrong: true, text: 'MD' },
    { isStrong: false, text: ' 추천작품' },
  ],
  isNew: false,
  api: '',
};

const BEST_SUPPORTED_DATA = {
  id: 1,
  title: [{ isStrong: false, text: '후원쿠폰 베스트' }],
  isNew: false,
  api: '',
};

const RecommendList: React.FC<Props> = ({ headerScrollDistance }) => {
  return (
    <Container marginBottom={headerScrollDistance}>
      <BookLine data={MD_RECOMMEND_DATA} theme="dark" />
      <MiddleBanner />
      {RECOMMEND_CATEGORY_LIST.map(category => (
        <BookLine key={category.id} data={category} theme="bright" />
      ))}
      <View>{/*선택된 선호장르에 맞는 것들만*/}</View>
      <BookLine data={BEST_SUPPORTED_DATA} theme="bright" />
    </Container>
  );
};

const Container = styled.View<Layout>`
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;

export default RecommendList;
