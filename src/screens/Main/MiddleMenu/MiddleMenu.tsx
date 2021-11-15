import React, { useRef, useState } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import MIDDLE_MENU_LIST from '@/data/Main/MiddleMenuData';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

interface menu {
  id: number;
  width: number;
}

const menuWidth = Dimensions.get('window').width / 4;
const maxPosition = (MIDDLE_MENU_LIST.length - 4) * menuWidth;

const MiddleMenu: React.FC = () => {
  const [isLeftBtnShow, setIsLeftBtnShow] = useState(false);
  const [isRightBtnShow, setIsRightBtnShow] = useState(true);
  const menuScrollRef = useRef<ScrollView>(null);

  const menuScroll = (e: nativeEvent) => {
    const scrollPosition = e.nativeEvent.contentOffset.x;
    toggleArrowBtn(scrollPosition);
  };

  const toggleArrowBtn = (scrollPosition: number) => {
    setIsLeftBtnShow(scrollPosition !== 0);
    setIsRightBtnShow(maxPosition - scrollPosition > 0.1);
  };

  const pressArrowBtn = (name: string) => {
    menuScrollRef.current?.scrollTo({ x: name === 'left' ? 0 : maxPosition });
  };

  return (
    <Container>
      {isLeftBtnShow && (
        <LeftBtn activeOpacity={1} onPress={() => pressArrowBtn('left')}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={15}
            color="rgba(0, 0, 0, 0.1)"
          />
        </LeftBtn>
      )}
      <MenuWrapper
        ref={menuScrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={menuScroll}
      >
        {MIDDLE_MENU_LIST.map(menu => (
          <Menu
            key={menu.id}
            id={menu.id}
            width={menuWidth}
            activeOpacity={1}
            onPress={() => {}}
          >
            <Icon source={{ uri: menu.icon }} />
            <Name>{menu.name}</Name>
          </Menu>
        ))}
      </MenuWrapper>
      {isRightBtnShow && (
        <RightBtn activeOpacity={1} onPress={() => pressArrowBtn('right')}>
          <FontAwesomeIcon
            icon={faChevronRight}
            size={15}
            color="rgba(0, 0, 0, 0.1)"
          />
        </RightBtn>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  padding: 8px 0;
  height: 60px;
  background-color: #f7f7f7;
`;

const MenuWrapper = styled.ScrollView`
  flex-direction: row;
`;

const Menu = styled.TouchableOpacity<menu>`
  align-items: center;
  width: ${({ width }) => width}px;
  ${({ id }) =>
    id !== 1 ? 'border-left-color: #d7d7d7; border-left-width: 1px;' : null}
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

const LeftBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  left: -1px;
  width: 18px;
  height: 27px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const RightBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  right: -1px;
  width: 18px;
  height: 27px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export default MiddleMenu;
