import { IEmployeesApi } from './types';
import { VerificationStatuses } from '../../../modules/user/types';
import { TransactionStatusesBE } from 'modules/transactions/types';

const employeesMock: IEmployeesApi = {
  verifyEmail: () => Promise.resolve(),
  checkVerification: () => Promise.resolve({
    data: {
      verification_status: VerificationStatuses.activated,
    }
  }),
  userInfo: () => Promise.resolve({
    data: {
      email: 'mock@mail.com',
      first_name: 'Mock',
      last_name: 'Api',
      iban: 'IBAN123456789',
      id: 123,
      registration_id: 'redistrationId-123',
      employee_number: 'employee_number-123',
      verification_status: VerificationStatuses.activated,
      statusError: false,
    }
  }),
  resendVerificationCode: () => Promise.resolve(),
  getBalance: () => Promise.resolve({
    data: {
      earned_wages: 2428.54,
      is_withdraw_paused: false,
      total_withdrawn_amount: 0,
      withdrawable_wages: 1214.27
    }
  }),
  getTransactions: () => Promise.resolve(),
  getSuggestedValues: () => Promise.resolve({
    data: [200, 500, 800, 1214],
  }),
  getFee: () => Promise.resolve({
    data: 25,
  }),
  withdrawal: () => Promise.resolve({
    data: {
      id: 235,
      amount: 5000,
      fee: 100,
      status: TransactionStatusesBE.accepted,
      created_at: 'created_at',
      updated_at: 'updated_at',
      bank_details: {
        id: 123,
        employee_id: 123,
        iban: 'iban123456789',
        created_at: 'created_at',
        updated_at: 'updated_at',
        bank_branch_name: 'bank_branch_name',
        counterparty_id: 123123,
        account_number: 3445,
        account_name: 'account_name',
        branch_address: 'branch_address',
        country: 'Country',
        swift_code: 'swift_code',
        account_type: 'account_type',
      },
    },
  }),
  getWithdrawableDefaults: () => Promise.resolve({
    data: {
      minimal: 100,
      maximum: 1214,
    }
  }),
};

export default employeesMock;
