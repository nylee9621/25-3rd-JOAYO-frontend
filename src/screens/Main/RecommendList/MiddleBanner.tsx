import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Carousel from '@/components/Carousel/Carousel';
import BANNER_IMAGE_LIST from '@/data/Main/BannerData';

const bannerWidth = Dimensions.get('window').width;
const bannerHeight = bannerWidth * 0.164;

const MiddleBanner: React.FC = () => {
  return (
    <Container>
      <Carousel
        width={bannerWidth}
        height={bannerHeight}
        data={BANNER_IMAGE_LIST}
      />
    </Container>
  );
};

const Container = styled.View`
  padding-top: 8px;
  background-color: #f5f5f5;
`;

export default MiddleBanner;
