import { Service, Inject } from "typedi";
import config from "../config";
import { IUser, IUserInputDTO } from "../interfaces/IUser";
import {
  EventDispatcher,
  EventDispatcherInterface,
} from "../decorators/eventDispatcher";
import events from "../subscribers/events";

@Service()
export default class BankService {
  constructor(
    @Inject("userModel") private userModel,
    // : Models.UserModel,
    @Inject("logger") private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface
  ) {}

  public async GetBanks(): Promise<any> {}
}
