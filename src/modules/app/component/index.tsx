import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { appInit } from '../actions';


const AppState = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appInit());
  }, []);

  return null;
};

export default AppState;