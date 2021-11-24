import React from 'react';
import styled from 'styled-components/native';
import Carousel from '@/components/Carousel/Carousel';
import BANNER_IMAGE_LIST from '@/data/Main/BannerData';
import { displayWidth } from '@/constants/sizes';

const bannerHeight = displayWidth * 0.164;

const MiddleBanner: React.FC = () => {
  return (
    <Container>
      <Carousel
        width={displayWidth}
        height={bannerHeight}
        data={BANNER_IMAGE_LIST}
      />
    </Container>
  );
};

const Container = styled.View`
  padding: 8px 0;
  background-color: #f5f5f5;
`;

export default MiddleBanner;
