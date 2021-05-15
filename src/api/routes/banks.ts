import { IBanksInputDTO } from './../../interfaces/IBanks';

import {NextFunction, Request, Response, Router} from "express"
import Container from "typedi";
import {  Logger } from "winston";
import BanksService from "../../services/banks";
const router = Router();
export default (app: Router)=>{
    app.use("/banks", router);
    const logger: Logger = Container.get("logger");
    const banksServiceInstance = Container.get(BanksService);
    router.get("/",async (req:Request, res:Response, next: NextFunction)=>{
         logger.debug("Calling List of Banks endpoint");
         try {
           const { banks } = await banksServiceInstance.GetBanks();
           return res.status(200).json({ banks });
         } catch (e) {
           logger.error("🔥 error: %o", e);
           return next(e);
         }
    })

    router.post("/",async (req: Request, res: Response, next:NextFunction)=>{
      logger.debug("Calling Onboard Bank endpoint with body: %o", req.body);
        try{
          const {onboard} = await banksServiceInstance.OnboardBank( req.body as IBanksInputDTO);
          return res.status(201).json({banks:onboard});
        }catch(e){
          logger.error("error: %o", e);
          return next(e);
        }
    })
}
