import { useWindowDimensions } from 'react-native';

const width = useWindowDimensions().width;
const height = useWindowDimensions().height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
