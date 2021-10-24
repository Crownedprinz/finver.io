import { ICustomer, ICustomerInputDto } from "./../interfaces/ICustomer";
import { Inject, Service } from "typedi";

@Service()
export default class CustomerService {  
  constructor(
    @Inject("logger") private logger,
    @Inject("customerModel") private customerModel
  ) {}

  public async GetAllCustomers(): Promise<{ customers: ICustomer }> {
    try {
      this.logger.silly("Reading Customers Records");
      const CustomerModel = await this.customerModel.find();
      const customers = CustomerModel;
      return { customers };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async CreateSandboxCustomers(
    input: ICustomerInputDto
  ): Promise<{ customer: ICustomer }> {
    try {
      this.logger.silly("Creating Customer Record");
      const CustomerModel = await this.customerModel.create(input);
      const customer = CustomerModel.toObject();
      Reflect.deleteProperty(customer, "createdAt");
      Reflect.deleteProperty(customer, "updatedAt");
      Reflect.deleteProperty(customer, "updatedAt");
      return { customer };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
