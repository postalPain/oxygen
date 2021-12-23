import { StyleSheet } from 'react-native';
import { getHeight } from 'utils/window';


const useStyles = () => StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  link: {
    alignSelf: 'center',
    paddingBottom: getHeight(2.3)
  }
});

export default useStyles;
