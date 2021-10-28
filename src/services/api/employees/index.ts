import apiUrls from 'config/apiUrls';
import request from '../request';

const userInfo = () => request.get(apiUrls.userInfo) ;

const verifyEmail = (code: string) => request.post('employees/verification/email', { code });

const checkVerification = () => request.get(apiUrls.checkVerification);

const employees = {
  verifyEmail,
  checkVerification,
  userInfo,
};

export default employees;