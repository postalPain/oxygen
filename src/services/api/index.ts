import auth from './auth';
import employees from './employees';

export interface IResponse<T> {
  data: T;
}

const api = {
  auth,
  employees,
};

export default api;