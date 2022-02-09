import auth from './auth';
import authMock from './auth/index.mock';
import employees from './employees';
import employeesMock from './employees/index.mock';
import { IApi } from './types';
import { BUILD_ENV } from '../../../build-env.js';
import { Envs } from '../../env';

const mockApi = {
  auth: authMock,
  employees: employeesMock,
};

const api: IApi = BUILD_ENV === Envs.E2E ? mockApi : {
  auth,
  employees,
};

export default api;
