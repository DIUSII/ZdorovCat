import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

import constants from '../../assets/styles/constants';

export default StyleSheet.create({
  container: {
    minWidth: '100%',
    backgroundColor: constants.color.primary,
    paddingVertical: verticalScale(12),
    borderRadius: 6,
  },
  textButton: {
    color: '#fff',
    fontSize: verticalScale(15),
    fontWeight: '600',
  },
});
