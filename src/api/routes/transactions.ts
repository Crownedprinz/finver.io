import { ITransaction } from './../../interfaces/ITransaction';
import { Logger } from 'winston';
import { NextFunction, Request, Response, Router } from 'express';
import Container from 'typedi';
import TransactionService from '../../services/transactions';
const router =  Router();
export default (app:Router)=>{
    app.use("/transactions", router);
    const transactionServiceInstance = Container.get(TransactionService);
    const logger: Logger=Container.get("logger");
    router.get("/",async (req:Request, res: Response, next: NextFunction)=>{
            logger.debug("Calling List of Transactions endpoint");
            try{
                const {transactions} = await transactionServiceInstance.GetAllTransactions();
                return res.status(200).json({ transactions });
            }catch(e){
                logger.error("error: o%",e);
                throw next(e);
            }
    });

    router.post("/", async(req:Request, res: Response, next: NextFunction)=>{
        logger.debug(`Calling Add Transaction endpoint with body: ${req.body}`);
        try{
            const {transaction} = await transactionServiceInstance.AddTransaction(req.body as ITransaction);
            return res.status(200).json({transaction});
        }catch(e){
            logger.error("error: o%", e);
            throw next(e);
        }

    });
}