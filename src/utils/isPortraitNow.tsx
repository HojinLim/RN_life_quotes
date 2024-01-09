import {Dimensions, useWindowDimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export const isPortraitNow = () => {
  if (height > width) {
    return true;
  } else {
    return false;
  }
};
