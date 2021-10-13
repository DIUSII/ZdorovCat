import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    minWidth: '100%',
    backgroundColor: '#f3f3f3',
    borderRadius: 6,
    paddingHorizontal: verticalScale(19),
    paddingVertical: verticalScale(14),
  },
  textInput: {
    fontSize: verticalScale(12),
    color: '#6A6969',
  },
});
