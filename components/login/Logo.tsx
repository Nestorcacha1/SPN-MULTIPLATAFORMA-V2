import React, { memo } from 'react';
import { Dimensions, Image, ImageSourcePropType, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

interface Props {
  image: ImageSourcePropType
}

const Logo = ({image}: Props) => (
  <Image source={image} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: width <= 360 ? 120 : 128,
    height: width <= 360 ? 120 : 128,
  },
});

export default memo(Logo);
