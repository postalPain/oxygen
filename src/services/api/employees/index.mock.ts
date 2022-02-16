import { IEmployeesApi } from './types';
import { VerificationStatuses } from '../../../modules/user/types';
import { TransactionStatusesBE } from 'modules/transactions/types';
import { globalMock } from '../index.mock';

const getTransaction = (amount: number) => ({
  amount,
  id: 235,
  fee: globalMock.fee,
  status: TransactionStatusesBE.pending,
  created_at: '2022-01-02T09:47:15.000000',
  updated_at: '2022-01-05T09:47:15.000000',
  bank_details: {
    id: 199,
    employee_id: 415,
    iban: '0A18KRE785504021 85048414404591',
    created_at: '2022-01-02T09:47:15.000000',
    updated_at: '2022-01-05T09:47:15.000000',
    bank_branch_name: 'Ilyaluntatun',
    counterparty_id: 'OeZJepynr5cYcsXgGz3X',
    account_number: 'fd2a0527-2cdf-3909-afc1-01f93d',
    account_name: 'suscipit',
    branch_address: '6195 Runolfsdottir Unions West Wayne, NE 14260-1228',
    country: 'KR',
    swift_code: 'DNDFKA5L',
    account_type: 'current',
  },
});

const employeesMock: IEmployeesApi = {
  verifyEmail: () => Promise.resolve(),
  checkVerification: () => {
    if (globalMock.auth) {
      return Promise.resolve({
        data: {
          verification_status: VerificationStatuses.activated
        }
      });
    }
    return Promise.reject('not_authorized');
  },
  userInfo: () => Promise.resolve({
    data: {
      email: 'mock@mail.com',
      first_name: 'Mockname',
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
      earned_wages: globalMock.earnedWages,
      is_withdraw_paused: false,
      total_withdrawn_amount: globalMock.withdrawn,
      withdrawable_wages: globalMock.balance,
    }
  }),
  getTransactions: () => {
    let response = {
      data: [],
    };
    if (globalMock.withdrawn !== globalMock.initialBalance) {
      response = {
        data: [getTransaction(200)]
      };
    }
    return Promise.resolve(response);
  },
  getSuggestedValues: () => Promise.resolve({
    data: [200, 500, 800, globalMock.balance],
  }),
  getFee: () => Promise.resolve({
    data: globalMock.fee,
  }),
  withdrawal: (amount) => {
    globalMock.balance -= amount - globalMock.fee;
    globalMock.withdrawn += amount + globalMock.fee;

    return Promise.resolve({
      data: getTransaction(amount),
    });
  },
  getWithdrawableDefaults: () => Promise.resolve({
    data: {
      minimal: 100,
      maximum: globalMock.balance,
    }
  }),
};

export default employeesMock;
