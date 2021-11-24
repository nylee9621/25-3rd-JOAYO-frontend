import React from 'react';
import styled from 'styled-components/native';

interface IsSticky {
  isSticky: boolean;
}

const Navbar: React.FC<IsSticky> = ({ isSticky }) => {
  return (
    <Container isSticky={isSticky}>
      <SiderBtn activeOpacity={1} onPress={() => {}}>
        <Icon
          source={
            isSticky
              ? require('@assets/images/icon/sider.png')
              : require('@assets/images/icon/sider-white.png')
          }
        />
      </SiderBtn>
      <Logo isSticky={isSticky}>JOAYO</Logo>
      <SearchBtn activeOpacity={1} onPress={() => {}}>
        <Icon
          source={
            isSticky
              ? require('@assets/images/icon/search.png')
              : require('@assets/images/icon/search-white.png')
          }
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
  margin: 0 10px 0 15px;
`;

const Logo = styled.Text<IsSticky>`
  flex: 1;
  color: ${({ isSticky }) => (isSticky ? '#21459e' : 'white')};
  font-family: 'Kanit-Bold';
  font-size: 30px;
  font-weight: 900;
`;

const SearchBtn = styled.TouchableOpacity`
  margin-right: 10px;
`;

const Icon = styled.Image`
  width: 17px;
  height: 17px;
`;
export default Navbar;
