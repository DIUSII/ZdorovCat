import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './ButtonStyle';
import flexStyles from '../../assets/styles/flexStyles';

const Button: React.FC<{
  children: string;
  onPress: any;
  marginBottom?: number;
}> = ({children, onPress, marginBottom}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, flexStyles.alignCenter, {marginBottom}]}>
      <Text style={styles.textButton}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
