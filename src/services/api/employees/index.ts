import apiUrls from 'config/apiUrls';
import request from '../request';

const userInfo = () => request.get(apiUrls.userInfo) ;

const verifyEmail = (code: string) => request.post('employees/verification/email', { code });

const employees = {
  verifyEmail,
  userInfo
};

export default employees;