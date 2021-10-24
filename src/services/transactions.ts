import { ITransaction } from './../interfaces/ITransaction';
import { Inject, Service } from "typedi";


@Service()
export default class TransactionService {
  constructor(
    @Inject("logger") private logger,
    @Inject("transactionModel") private transactionModel
  ) {}

  public async GetAllTransactions(): Promise<{ transactions: ITransaction }> {
    this.logger.silly("Reading all transactions");
    const tranModel = await this.transactionModel.find();
    const transactions = tranModel;
    return { transactions };
  }

  public async AddTransaction(input:ITransaction):Promise<{transaction: ITransaction}>{
      try{
          this.logger.silly("Creating Transaction Record");
          const TransactionModel = await this.transactionModel.create(input);
          const transaction = TransactionModel.toObject();
          Reflect.deleteProperty(transaction, "createdAt");
          Reflect.deleteProperty(transaction, "updatedAt");
          Reflect.deleteProperty(transaction, "updatedAt");
          return {transaction};
      }catch(e){
        this.logger.error(e);
        throw e;
      }
  }
}