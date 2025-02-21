import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useAdaptiveFont = () => {
  const [fontSizes, setFontSizes] = useState(getFontSizes());

  useEffect(() => {
    const handleResize = () => {
      setFontSizes(getFontSizes());
    };

    const subscription = Dimensions.addEventListener('change', handleResize);

    return () => {
      subscription?.remove();
    };
  }, []);

  return fontSizes;
};

const getFontSizes = () => {
  const { width } = Dimensions.get('window');

  if (width <= 360) {
    return {
      buttonText: 15, //
      title: 22, //
      text: 14, //
    };

  } else if (width <= 768) {
    return {
      buttonText: 17, //
      title: 24, //28
      text: 16, //
    };

  } else if (width <= 1024) {

    return {
      buttonText: 19, //
      title: 28, //
      text: 18,//
    };

  } else {
    
    return {
        buttonText: 21, //
        title: 32, //
        text: 20,//
      };
  }

};

export default useAdaptiveFont;
