import { IUserInfo } from 'services/api/employees/types';
import { TUserAction, UserActions } from '../types';

export const userDefaultState: IUserInfo = {
  id: null,
  email: '',
  first_name: '',
  last_name: '',
  company_name: '',
  company_id: null,
  iban: '',
  registration_id: '',
  employee_number: '',
  verification_status: null,
  statusError: false,
  transaction_all_time_count_value: null,
  transaction_all_time_count: null,
  transaction_all_time_count_service_charge: null,
  is_first_visit: null,
  work_permit_number: '',
};

const userReducer = (
  state = userDefaultState,
  action: TUserAction,
): IUserInfo => {
  switch (action.type) {
    case UserActions.USER_SET_INFO: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case UserActions.USER_CLEAR_INFO:
      return userDefaultState;
    case UserActions.SET_VERIFICATION_STATUS: {
      return {
        ...state,
        verification_status: action.payload,
      };
    }
    case UserActions.SET_STATUS_ERROR: {
      return {
        ...state,
        statusError: action.statusError
      };
    }
    default:
      return state;
  }
};

export default userReducer;
