import React from 'react';
import {View, SafeAreaView} from 'react-native';

import styles from './ScreenStyle';

const Screen = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.containerChildren, props.style]}>
        {props.children}
      </View>
    </SafeAreaView>
  );
};

export default Screen;
