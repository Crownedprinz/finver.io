import { IBanks } from './IBanks';
export interface ICustomer {
  firstName: String;
  lastName: String;
  email: Array<string>;
  phone: Array<string>;
  blocked: Boolean;
  noLinkedAccounts: Number;
  linkedAccounts: LinkedAccounts;
}

export interface ICustomerInputDto {
  firstName: String;
  lastName: String;
  username: String;
  password: String;
  accountCategory: String;
}

export interface LinkedAccounts {
  accountName: string;
  connected: string;
  nuban: string;
  banks: IBanks
}

