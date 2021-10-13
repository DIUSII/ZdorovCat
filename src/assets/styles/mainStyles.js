import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

import constants from './constants';

export default StyleSheet.create({
  headerTitle: {
    fontWeight: '600',
    fontSize: verticalScale(18),
    color: constants.color.primary,
  },
});
