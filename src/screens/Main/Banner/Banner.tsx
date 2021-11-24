import React from 'react';
import { View } from 'react-native';
import Carousel from '@/components/Carousel/Carousel';
import BANNER_IMAGE_LIST from '@/data/Main/BannerData';
import { Size } from '@/utils/interface';

const Banner: React.FC<Size> = ({ width, height }) => {
  return (
    <View>
      <Carousel width={width} height={height} data={BANNER_IMAGE_LIST} />
    </View>
  );
};

export default Banner;
