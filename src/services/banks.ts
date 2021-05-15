import { IUser } from "./../interfaces/IUser";
import { IBanks, IBanksInputDTO } from "./../interfaces/IBanks";
import Container, { Inject, Service } from "typedi";
import mongoose from "mongoose";

@Service()
export default class BanksService {
  constructor(
    @Inject("logger") private logger,
    @Inject("banksModel") private banksModel
  ) {}

  //IBanks ensures we call our customized functions
  //Document ensures we call mongoose functions
  //This are used for strongly typed approaches
  public async GetBanks(): Promise<{ banks: IBanks }> {
    try {
      const BankRecord = await this.banksModel.find();
      const banks = BankRecord;
      Reflect.deleteProperty(banks, "createdAt");
      Reflect.deleteProperty(banks, "updatedAt");
      Reflect.deleteProperty(banks, "__v");
      return { banks };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async OnboardBank(
    banksInputDTO: IBanksInputDTO
  ): Promise<{ onboard: IBanks }> {
    try {
      this.logger.silly("Creating Bank Record");
      const BankRecord = await this.banksModel.create(banksInputDTO);

      if (!BankRecord) {
        throw new Error("Bank Record was not created");
      }

      const onboard = BankRecord.toObject();
      Reflect.deleteProperty(onboard, "updatedAt");
      Reflect.deleteProperty(onboard, "createdAt");
      Reflect.deleteProperty(onboard, "__v");
      return { onboard };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
