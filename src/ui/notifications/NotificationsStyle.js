import {Dimensions, StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

import constants from '../../assets/styles/constants';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 6,
    minWidth: '100%',
    maxWidth: '100%',
    paddingVertical: 14,
    paddingHorizontal: 19,
    flexDirection: 'row',
  },
  text: {
    fontSize: verticalScale(12),
    color: constants.color.primaryText,
    maxWidth: '85%',
  },
});
