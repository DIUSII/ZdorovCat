import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

import constants from '../../assets/styles/constants';

export default StyleSheet.create({
  container: {},
  containerLogo: {
    marginBottom: verticalScale(-25),
    marginTop: verticalScale(25),
  },
  labelRegister: {
    color: constants.color.primaryText,
    fontSize: verticalScale(14),
    marginBottom: 6,
  },
});
