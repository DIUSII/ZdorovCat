import React from 'react';
import {View, Text} from 'react-native';

import styles from './StepStyle';
import flexStyles from '../../assets/styles/flexStyles';

const Step: React.FC<{children: string}> = ({children}) => {
  return (
    <View style={flexStyles.selfEnd}>
      <Text style={styles.step}>{children}</Text>
    </View>
  );
};

export default Step;
