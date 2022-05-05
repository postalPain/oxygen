import { useSelector } from 'react-redux';
import { selectAppState } from '../selectors';

const useAppState = () => {
  const appState = useSelector(selectAppState);

  return appState;
};

export default useAppState;