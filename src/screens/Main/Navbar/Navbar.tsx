import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

interface IsSticky {
  isSticky: boolean;
}

const Navbar: React.FC<IsSticky> = ({ isSticky }) => {
  return (
    <Container isSticky={isSticky}>
      <SiderBtn activeOpacity={1} onPress={() => {}}>
        <FontAwesomeIcon
          icon={faBars}
          size={25}
          color={isSticky ? '#7f7f7f' : 'white'}
        />
      </SiderBtn>
      <Logo isSticky={isSticky}>JOAYO</Logo>
      <SearchBtn activeOpacity={1} onPress={() => {}}>
        <FontAwesomeIcon
          icon={faSearch}
          size={25}
          color={isSticky ? '#7f7f7f' : 'white'}
        />
      </SearchBtn>
    </Container>
  );
};

const Container = styled.View<IsSticky>`
  flex-direction: row;
  align-items: center;
  height: 48px;
  background-color: ${({ isSticky }) => (isSticky ? '#f7f7f7' : 'transparent')};
  border-bottom-width: ${({ isSticky }) => (isSticky ? 1 : 0)}px;
  border-bottom-color: #dcdcdd;
`;

const SiderBtn = styled.TouchableOpacity`
  flex: 0 0 20px;
  margin: 0 10px;
`;

const Logo = styled.Text<IsSticky>`
  flex: 1;
  margin-left: 10px;
  color: ${({ isSticky }) => (isSticky ? '#21459e' : 'white')};
  font-family: 'Kanit-Bold';
  font-size: 30px;
  font-weight: 900;
`;

const SearchBtn = styled.TouchableOpacity`
  margin-right: 10px;
`;
export default Navbar;
