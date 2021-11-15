import React from 'react';
import styled from 'styled-components/native';
import MENU_LIST from '@/data/MenuData';

const Menu: React.FC = () => {
  return (
    <Container>
      {MENU_LIST.map(menu => (
        <MenuItem key={menu.id} width={100 / MENU_LIST.length}>
          <Icon source={{ uri: menu.icon }} />
          <Name>{menu.name}</Name>
        </MenuItem>
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  height: 60px;
`;

const MenuItem = styled.TouchableOpacity<{ width: number }>`
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width}%;
`;

const Icon = styled.Image`
  align-self: center;
  width: 20px;
  height: 20px;
  opacity: 0.5;
`;

const Name = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  font-family: 'NotoSansKR500';
  font-size: 11px;
`;

export default Menu;
