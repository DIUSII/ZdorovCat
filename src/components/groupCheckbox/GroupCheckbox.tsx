import React, {SetStateAction, Dispatch} from 'react';
import {Text} from 'react-native';
import CheckBox from 'react-native-check-box';

import constants from '../../assets/styles/constants';
import flexStyles from '../../assets/styles/flexStyles';

import styles from './GroupCheckboxStyle';

const GroupCheckbox: React.FC<{
  pers: boolean;
  setPers: Dispatch<SetStateAction<boolean>>;
  rules: boolean;
  setRules: Dispatch<SetStateAction<boolean>>;
}> = ({pers, setPers, rules, setRules}) => {
  const rightTextViewPers = (
    <Text style={styles.textCheckbox}>
      Я согласен на обработку{' '}
      <Text style={styles.textCheckboxLink}>персональных даных</Text>
    </Text>
  );

  const rightTextViewRules = (
    <Text style={styles.textCheckbox}>
      Я согласен{' '}
      <Text style={styles.textCheckboxLink}>правилами программы</Text>
    </Text>
  );

  return (
    <>
      <CheckBox
        style={[flexStyles.selfStart, styles.marginBottomInCheckboxPers]}
        checkBoxColor={constants.color.primary}
        onClick={() => setPers(!pers)}
        isChecked={pers}
        rightTextView={rightTextViewPers}
      />
      <CheckBox
        style={[flexStyles.selfStart, styles.marginBottomInCheckboxRules]}
        checkBoxColor={constants.color.primary}
        onClick={() => setRules(!rules)}
        isChecked={rules}
        rightTextView={rightTextViewRules}
      />
    </>
  );
};

export default GroupCheckbox;
