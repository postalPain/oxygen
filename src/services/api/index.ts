import auth from './auth';
import authMock from './auth/index.mock';
import employees from './employees';
import employeesMock from './employees/index.mock';
import { IApi } from './types';
import env from '../../env';

const mockApi = {
  auth: authMock,
  employees: employeesMock,
};

const api: IApi = env.e2e ? mockApi : {
  auth,
  employees,
};

export default api;
