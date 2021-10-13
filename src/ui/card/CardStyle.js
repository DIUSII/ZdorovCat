import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

import constants from '../../assets/styles/constants';

export default StyleSheet.create({
  container: {
    borderRadius: 6,
    paddingVertical: verticalScale(28),
    minWidth: '100%',
    backgroundColor: '#fff',
  },
  containerImage: {
    marginBottom: verticalScale(21),
  },
  containerText: {
    maxWidth: '70%',
  },
  text: {
    fontWeight: '600',
    fontSize: verticalScale(18),
    color: constants.color.primaryText,
    textAlign: 'center',
  },
});
