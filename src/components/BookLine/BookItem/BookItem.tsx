import React from 'react';
import styled from 'styled-components/native';
import PremiumLabel from '@/components/Label/PremiumLabel';

const BookItem: React.FC<Theme> = ({ theme }) => {
  return (
    <Container>
      <Cover source={require('@/assets/images/book-cover-sample.png')} />
      <Name theme={theme} numberOfLines={1} ellipsizeMode="tail">
        제목을 적어주세요블라블라
      </Name>
      <Info>
        <PremiumLabel size={11} />
        <Views>382.7만</Views>
        <Author numberOfLines={1} ellipsizeMode="tail">
          작가이름미상
        </Author>
      </Info>
    </Container>
  );
};

const Container = styled.View`
  margin-right: 16px;
  width: 90px;
`;

const Cover = styled.Image`
  margin-bottom: 4px;
  width: 90px;
  height: 136px;
  border-width: 1px;
  border-color: #e1e1e1;
`;

const Name = styled.Text<Theme>`
  color: ${({ theme }) => (theme === 'bright' ? '#333333' : '#DADADA')};
  font-size: 13px;
  line-height: 17px;
`;

const Info = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 2px;
`;

const Views = styled.Text`
  margin-left: 4px;
  color: #898989;
  font-size: 9px;
`;

const Author = styled.Text`
  flex: 1;
  margin-left: 4px;
  padding-left: 4px;
  border-left-width: 1px;
  border-left-color: #a9a9a9;
  color: #898989;
  font-size: 9px;
`;

export default BookItem;
