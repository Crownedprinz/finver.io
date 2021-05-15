import { ICustomerInputDto } from './../../interfaces/ICustomer';
import { Logger } from 'winston';
import { Container } from 'typedi';
import { NextFunction, Request, Response, Router } from 'express';
import CustomerService from '../../services/customer';
const router = Router();
 
export default (app:Router)=>{
    app.use("/customers",router);
    const customerServiceInstance =  Container.get(CustomerService);
    const logger:Logger = Container.get("logger");
    router.get("/", async (req:Request, res: Response, next: NextFunction)=>{
            logger.debug("Calling List of Customers endpoint");
            try{
               const {
                 customers
               } = await customerServiceInstance.GetAllCustomers(); 
               return res.status(200).json({customers});
            } catch(e){
                logger.error("error: o%", e);
                throw next(e);
            }
    });

    router.post("/", async (req:Request, res:Response, next: NextFunction)=>{
        logger.debug("Calling Create Sandbox endpoint", req.body);
        try{
            const{customer} = await customerServiceInstance.CreateSandboxCustomers(req.body as ICustomerInputDto);
            return res.status(201).json({customer: customer});
        }catch(e){
            logger.error("error: o%",e);
            throw next(e);
        }
    })
}