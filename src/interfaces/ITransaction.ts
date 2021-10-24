import { IBanksInputDTO } from "./IBanks";

export interface ITransaction {
  accountName: String;
  nuban: String;
  accountCategory: String;
  accountType: String;
  availableBalance: Number;
  bookingBalance: Number;
  totalCredit: Number;
  totalDebit: Number;
  currency: String;
  address: String;
  bank: IBanksInputDTO;
  signatories: Array<ISignatories>;
  details: Array<IStatementDetails>;
}

 export interface ISignatories{
    name: String,
    bvn: String
}

export interface IStatementDetails {
  transactionDate: String;
  valueDate: String;
  narration: String;
  credit: Number;
  debit: Number;
  balance: Number;
  branch: String;
}