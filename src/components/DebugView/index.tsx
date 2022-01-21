import { Link } from 'components';
import { storeBiometricsAccepted } from 'modules/biometrics/asyncStorage';
import { setLoginCount } from 'modules/user/asyncStorage';
import { selectUserEmail } from 'modules/user/selectors';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

const DebugView = () => {
  const email = useSelector(selectUserEmail);
  return (
    <ScrollView>
      <Link onPress={() => setLoginCount(email, 0)}>
        Clear loginCount
      </Link>
      <Link onPress={() => storeBiometricsAccepted(email, false)}>
        Reset Biometrics Permission
      </Link>
    </ScrollView>
  );
};

export default DebugView;