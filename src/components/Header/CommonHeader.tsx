import React from 'react';
import styled from 'styled-components/native';
import { statusBarHeight } from '@/constants/sizes';
import { FavoritGenresScreenNavProp } from '@/utils/type';
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
}

const CommonHeader: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation<FavoritGenresScreenNavProp>();

  return (
    <Container marginTop={statusBarHeight}>
      <Left>
        <SiderBtn activeOpacity={1} onPress={() => {}}>
          <Icon source={require('@assets/images/Header/sider.png')} />
        </SiderBtn>
        <GoHomeBtn activeOpacity={1} onPress={() => {}}>
          <Icon source={require('@assets/images/Header/home.png')} />
        </GoHomeBtn>
        <GoGiftsBtn activeOpacity={1} onPress={() => {}}>
          <Icon source={require('@assets/images/MiddleMenu/gift.png')} />
        </GoGiftsBtn>
      </Left>
      <Title>{title}</Title>
      <Right>
        <GoAlgorithmBtn activeOpacity={1} onPress={() => {}}>
          <Icon source={require('@assets/images/MiddleMenu/book.png')} />
        </GoAlgorithmBtn>
        <GoFavoriteGenresBtn
          activeOpacity={1}
          onPress={() => navigation.push('FavoriteGenres')}
        >
          <Icon source={require('@assets/images/MiddleMenu/star.png')} />
        </GoFavoriteGenresBtn>
        <SearchBtn activeOpacity={1} onPress={() => {}}>
          <Icon source={require('@assets/images/Header/search.png')} />
        </SearchBtn>
      </Right>
    </Container>
  );
};

const Container = styled.View<Layout>`
  justify-content: center;
  align-items: center;
  margin-top: ${({ marginTop }) => marginTop}px;
  height: 48px;
  background-color: white;
`;

const Title = styled.Text`
  font-size: 18px;
`;

const Left = styled.View`
  flex-direction: row;
  position: absolute;
  left: 0;
`;

const Right = styled.View`
  flex-direction: row;
  position: absolute;
  right: 0;
`;

const SiderBtn = styled.TouchableOpacity`
  margin-left: 10px;
`;

const GoHomeBtn = styled.TouchableOpacity`
  margin-left: 10px;
`;

const GoGiftsBtn = styled.TouchableOpacity`
  margin-left: 10px;
`;

const GoAlgorithmBtn = styled.TouchableOpacity`
  margin-right: 10px;
`;

const GoFavoriteGenresBtn = styled.TouchableOpacity`
  margin-right: 10px;
`;

const SearchBtn = styled.TouchableOpacity`
  margin-right: 10px;
`;

const Icon = styled.Image`
  width: 17px;
  height: 17px;
`;

export default CommonHeader;
