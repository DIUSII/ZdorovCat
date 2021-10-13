import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

import constants from '../../assets/styles/constants';

export default StyleSheet.create({
  container: {},
  textCheckbox: {
    color: constants.color.secondaryText,
    fontSize: verticalScale(10),
    marginLeft: 11,
  },
  textCheckboxLink: {
    color: constants.color.primary,
  },
  marginBottomInCheckboxPers: {
    marginBottom: 10,
  },
  marginBottomInCheckboxRules: {
    marginBottom: 46,
  },
});
