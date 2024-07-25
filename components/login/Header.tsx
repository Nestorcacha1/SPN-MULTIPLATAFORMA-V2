import useAdaptiveFont from '@/hooks/useAdaptativeFont';
import React, { memo } from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {

  const fontSizes = useAdaptiveFont();

  return <Text style={[styles.header, { fontSize: fontSizes.title }]}>{children}</Text>
};

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    paddingVertical: 14,
    color: 'white',
    textAlign: 'center'
  },
});

export default memo(Header);
