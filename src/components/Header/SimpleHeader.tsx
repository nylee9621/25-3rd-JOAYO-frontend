import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { statusBarHeight } from '@/constants/sizes';
import { FavoritGenresScreenNavProp } from '@/utils/type';
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
}

const SimpleHeader: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation<FavoritGenresScreenNavProp>();

  return (
    <Container marginTop={statusBarHeight}>
      <GoBackBtn activeOpacity={1} onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faChevronLeft} size={18} color={'#7f7f7f'} />
      </GoBackBtn>
      <Title>{title}</Title>
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

const GoBackBtn = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
`;

const Title = styled.Text`
  font-size: 18px;
`;

export default SimpleHeader;
