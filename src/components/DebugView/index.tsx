import { Link } from 'components';
import { storeBiometricsPermission } from 'modules/biometrics/asyncStorage';
import { getLoginCount, setLoginCount } from 'modules/user/asyncStorage';
import { selectUserEmail } from 'modules/user/selectors';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

const DebugView = () => {
  const email = useSelector(selectUserEmail);
  return (
    <ScrollView>
      <Link onPress={() => setLoginCount(email, 0)}>
        Clear loginCount
      </Link>
      <Link onPress={() => storeBiometricsPermission(email, false)}>
        Reset Biometrics Permission
      </Link>
    </ScrollView>
  );
};

export default DebugView;