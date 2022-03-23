import { StyleSheet } from 'react-native';
import { getHeight } from 'utils/window';


const useStyles = () => StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    alignSelf: 'center',
    paddingBottom: getHeight(2.3)
  },
  buttonContainer: {
    alignItems: 'center'
  }
});

export default useStyles;
