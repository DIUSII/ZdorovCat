import React from 'react';

import Screen from '../../ui/screen/Screen';
import Notifications from '../../ui/notifications/Notifications';

const RegisterDoctorDocument = () => {
  return (
    <Screen>
      <Notifications
        text={'От вас нужны документы подтверждающие ваши личность как врача'}
        mode={'info'}
        marginTop={10}
      />
    </Screen>
  );
};

export default RegisterDoctorDocument;
