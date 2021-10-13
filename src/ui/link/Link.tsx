import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './LinkStyle';

const Link: React.FC<{
  children: string;
  onPress: any;
  align?: string;
  marginBottom?: number;
}> = ({children, onPress, align, marginBottom}) => {
  let alignItems: string = 'flex-start';

  switch (align) {
    case 'center': {
      alignItems = 'center';
      break;
    }
    case 'left': {
      alignItems = 'flex-start';
      break;
    }
    case 'right': {
      alignItems = 'flex-end';
      break;
    }
  }

  return (
    // @ts-ignore
    <TouchableOpacity onPress={onPress} style={{alignItems, marginBottom}}>
      <View style={[styles.container]}>
        <Text style={styles.textLink}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Link;
