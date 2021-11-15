import React, { useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import MiddleMenu from './MiddleMenu/MiddleMenu';
import RecommendList from './RecommendList/RecommendList';
import '@utils/interface';

const displayWidth = Dimensions.get('window').width;
const bannerHeight = displayWidth * 0.6;

const NAVBAR_HEIGHT = 48; //navbar height에서 가져온 고정값
const MIDDLE_MENU_HEIGHT = 60; //middleMenu height에서 가져온 고정값

const headerMaxHeight = bannerHeight + MIDDLE_MENU_HEIGHT;
const headerMinHeight = NAVBAR_HEIGHT + MIDDLE_MENU_HEIGHT;
const headerScrollDistance = headerMaxHeight - headerMinHeight;

const Main: React.FC = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScrollY = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, headerScrollDistance],
    outputRange: [0, -headerScrollDistance],
    extrapolate: 'clamp',
  });

  const stickyNavOpacity = scrollY.interpolate({
    inputRange: [0, headerScrollDistance],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const nonStickyNavOpacity = scrollY.interpolate({
    inputRange: [0, headerScrollDistance],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <Container paddingBottom={headerMinHeight}>
      <Header style={{ transform: [{ translateY: headerTranslate }] }}>
        <Banner width={displayWidth} height={bannerHeight} />
        <MiddleMenu />
      </Header>
      <Navbars height={headerMinHeight}>
        <NavWrap style={{ opacity: stickyNavOpacity }}>
          <Navbar isSticky={true} />
        </NavWrap>
        <NavWrap style={{ opacity: nonStickyNavOpacity }}>
          <Navbar isSticky={false} />
        </NavWrap>
      </Navbars>
      <Contents
        paddingTop={headerScrollDistance}
        showsVerticalScrollIndicator={false}
        onScroll={handleScrollY}
      >
        <RecommendList />
      </Contents>
    </Container>
  );
};

const Container = styled.View<{ paddingBottom: number }>`
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
`;

const Header = styled(Animated.View)`
  position: absolute;
  top: 0;
`;

const Navbars = styled.View<{ height: number }>`
  align-items: flex-start;
`;

const NavWrap = styled(Animated.View)`
  position: absolute;
  top: 0;
  width: 100%;
`;

const Contents = styled(Animated.ScrollView)<{ paddingTop: number }>`
  padding-top: ${({ paddingTop }) => paddingTop}px;
`;

export default Main;
