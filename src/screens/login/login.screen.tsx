/* eslint-disable no-unused-expressions */
import React, { useState, useRef, useEffect } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import useInterval from '@use-it/interval';
import { dimensions } from '~/constants';
import { Slider, Slide } from './login.styles';

const HomeScreen: React.FC = () => {
  const slider = useRef<any>(null);
  const [active, setActive] = useState(0);

  const slideWith = dimensions.fullWidth;
  const [delay, setDelay] = useState<number|null>(2000);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setDelay(null);
    event.stopPropagation();
    const offsetX = event.nativeEvent.contentOffset.x;
    const totalSlides = event.nativeEvent.contentSize.width / slideWith;
    const activeSlide = Math.floor(offsetX / slideWith) % totalSlides;
    setActive(activeSlide);
    setTimeout(() => {
      setDelay(2000);
    }, 1000);
  };

  useInterval(() => {
    console.log('interval');
    setActive((act) => act + 1);
  }, delay);

  useEffect(() => {
    console.log(active);
    slider.current.scrollTo({ x: active * slideWith, y: 0 });
  }, [active, slideWith]);

  return (
    <Slider
      ref={slider}
      snapToInterval={dimensions.fullWidth}
      onScrollEndDrag={onScroll}
      decelerationRate={0}
      horizontal
    >
      <Slide color="green" />
      <Slide color="yellow" />
      <Slide color="blue" />
      <Slide color="pink" />
      <Slide color="grey" />
    </Slider>
  );
};

export default HomeScreen;
