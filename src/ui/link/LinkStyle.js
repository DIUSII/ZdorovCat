import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

import constants from '../../assets/styles/constants';

export default StyleSheet.create({
  container: {
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: constants.color.primary,
  },
  textLink: {
    color: constants.color.primary,
    fontSize: verticalScale(12),
  },
});
