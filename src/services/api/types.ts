import { IAuthApi } from './auth/types';
import { IEmployeesApi } from './employees/types';

export interface IResponse<T> {
  data: T;
}

export interface IApi {
  auth: IAuthApi;
  employees: IEmployeesApi;
}
