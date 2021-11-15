import React, { useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import '@utils/interface';

interface props {
  data: {
    id: number;
    path: string;
  }[];
  width: number;
  height: number;
}

const Carousel = (props: props) => {
  const { width, height, data } = props;
  const [showing, setShowing] = useState<number>(1);
  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(true);
  const carouselRef = useRef<ScrollView>(null);

  useEffect(() => {
    carouselRef.current?.scrollTo({ x: width, animated: false });
  }, []);

  useEffect(() => {
    if (!isAutoScroll) return;

    const autoScroll = setTimeout(() => {
      carouselRef.current?.scrollTo({ x: (showing + 1) * width });
    }, 3000);
    return () => clearTimeout(autoScroll);
  }, [showing, isAutoScroll]);

  const changeShowingByScroll = (e: nativeEvent) => {
    const ratio = e.nativeEvent.contentOffset.x / width;
    if (ratio % 1 < 0.1 || ratio % 1 > 0.9) {
      const temp = Math.round(ratio);
      handleShowing(temp);
    }
  };

  const handleShowing = (nextShowing: number) => {
    if (nextShowing > data.length) {
      goToFirst();
    } else if (nextShowing < 1) {
      goToLast();
    } else if (nextShowing !== showing) {
      setShowing(nextShowing);
    }
  };

  const goToFirst = () => {
    carouselRef.current?.scrollTo({ x: width, animated: false });
  };

  const goToLast = () => {
    carouselRef.current?.scrollTo({
      x: width * data.length,
      animated: false,
    });
  };

  const stopAutoScroll = () => {
    setIsAutoScroll(false);
    setTimeout(() => {
      setIsAutoScroll(true);
    }, 15000);
  };

  const pressDotBtn = (btnId: number) => {
    carouselRef.current?.scrollTo({ x: width * btnId });
  };

  return (
    <Container width={width} height={height}>
      <BannerWrapper
        ref={carouselRef}
        width={width}
        height={height}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={changeShowingByScroll}
        onTouchStart={stopAutoScroll}
      >
        <BannerImage
          key={data.length + 1}
          source={{ uri: data[data.length - 1].path }}
          width={width}
          height={height}
          style={{
            resizeMode: 'cover',
          }}
        />
        {data.map(image => (
          <BannerImage
            key={image.id}
            source={{ uri: image.path }}
            width={width}
            height={height}
            style={{
              resizeMode: 'cover',
            }}
          />
        ))}
        <BannerImage
          key={0}
          source={{ uri: data[0].path }}
          width={width}
          height={height}
          style={{
            resizeMode: 'cover',
          }}
        />
      </BannerWrapper>
      <Paging>
        {data.map(image => (
          <DotBtn
            key={image.id}
            activeOpacity={1}
            onPress={() => {
              pressDotBtn(image.id);
            }}
          >
            <Dot isShowing={showing === image.id}>●</Dot>
          </DotBtn>
        ))}
      </Paging>
    </Container>
  );
};

const Container = styled.View<carousel>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const BannerWrapper = styled.ScrollView<carousel>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const BannerImage = styled.Image<carousel>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const Paging = styled.View`
  flex-direction: row;
  position: absolute;
  left: 16px;
  bottom: 8px;
  align-self: center;
`;

const DotBtn = styled.TouchableOpacity`
  margin: 5px;
`;

const Dot = styled.Text<{ isShowing: boolean }>`
  color: white;
  font-size: 16px;
  opacity: ${({ isShowing }) => (isShowing ? 1 : 0.6)};
`;

export default Carousel;
