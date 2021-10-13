import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './InputStyle';

const Input: React.FC<{placeholder: string; marginBottom: number}> = ({
  placeholder,
  marginBottom,
}) => {
  return (
    <View style={[styles.container, {marginBottom}]}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={'#6A6969'}
      />
    </View>
  );
};

export default Input;
