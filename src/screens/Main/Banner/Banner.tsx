import React from 'react';
import { View } from 'react-native';
import Carousel from '@/components/Carousel/Carousel';
import BANNER_IMAGE_LIST from '@/data/Main/BannerData';
import '@/utils/interface';

const Banner = (props: carousel) => {
  const { width, height } = props;

  return (
    <View>
      <Carousel width={width} height={height} data={BANNER_IMAGE_LIST} />
    </View>
  );
};

export default Banner;
