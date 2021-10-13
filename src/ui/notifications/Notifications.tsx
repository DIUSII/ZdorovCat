import React from 'react';
import {View, Text} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {verticalScale} from 'react-native-size-matters';

import Info from '../../assets/images/notifications/info.svg';

import styles from './NotificationsStyle';
import flexStyles from '../../assets/styles/flexStyles';

const Notifications: React.FC<{
  text: string;
  mode: string;
  marginTop?: number;
}> = ({text, mode, marginTop}) => {
  const info: Element = (
    <Info width={verticalScale(24)} height={verticalScale(24)} />
  );
  let image: Element;

  switch (mode) {
    case 'info': {
      image = info;
      break;
    }
    default: {
      image = info;
    }
  }

  return (
    <View style={{marginTop}}>
      <Shadow distance={3} getChildRadius offset={[0, 2, 0, 0]}>
        <View style={[styles.container, flexStyles.flexCenterBetween]}>
          <Text style={styles.text}>{text}</Text>
          {image}
        </View>
      </Shadow>
    </View>
  );
};

export default Notifications;
