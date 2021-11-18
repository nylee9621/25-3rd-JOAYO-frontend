import React, { useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import MiddleMenu from './MiddleMenu/MiddleMenu';
import RecommendList from './RecommendList/RecommendList';

const displayWidth = Dimensions.get('window').width;
const bannerHeight = displayWidth * 0.6;

const NAVBAR_HEIGHT = 48; //navbar height에서 가져온 고정값
const MENU_HEIGHT = 60; //middleMenu height에서 가져온 고정값

const headerMaxHeight = bannerHeight + MENU_HEIGHT;
const headerMinHeight = NAVBAR_HEIGHT + MENU_HEIGHT;
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
    <Container>
      <Header style={{ transform: [{ translateY: headerTranslate }] }}>
        <Banner width={displayWidth} height={bannerHeight} />
        <MiddleMenu />
      </Header>
      <Navbars>
        <NavWrap style={{ opacity: stickyNavOpacity }}>
          <Navbar isSticky={true} />
        </NavWrap>
        <NavWrap style={{ opacity: nonStickyNavOpacity }}>
          <Navbar isSticky={false} />
        </NavWrap>
      </Navbars>
      <Contents
        marginTop={headerMinHeight}
        paddingTop={headerScrollDistance}
        showsVerticalScrollIndicator={false}
        onScroll={handleScrollY}
      >
        <RecommendList headerScrollDistance={headerScrollDistance} />
      </Contents>
    </Container>
  );
};

const Container = styled.View``;

const Header = styled(Animated.View)`
  position: absolute;
  top: 0;
  z-index: 20;
`;

const Navbars = styled.View`
  z-index: 40;
`;

const NavWrap = styled(Animated.View)`
  position: absolute;
  top: 0;
  width: 100%;
`;

const Contents = styled(Animated.ScrollView)<{
  marginTop: number;
  paddingTop: number;
}>`
  margin-top: ${({ marginTop }) => marginTop}px;
  padding-top: ${({ paddingTop }) => paddingTop}px;
`;

export default Main;
