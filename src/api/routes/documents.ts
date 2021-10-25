import { IDocumentInputDto } from './../../interfaces/IDocument';
import { Logger } from "winston";
import { Container } from "typedi";
import { NextFunction, Request, Response, Router } from "express";
import DocumentService from "../../services/document";
const router = Router();

export default (app: Router) => {
  const documentServiceInstance = Container.get(DocumentService);
  const logger: Logger = Container.get("logger");
  app.use("/documents", router);
  router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    logger.debug("Calling List of Documents endpoint");
    try {
      const documents = await documentServiceInstance.GetAllDocuments();
      return res.status(200).json(documents);
    } catch (e) {
      logger.error("error: o%", e);
      throw next(e);
    }
  });

  router.get(
    "/templates",
    async (req: Request, res: Response, next: NextFunction) => {
      logger.debug("Calling List of Templates endpoint");
      try {
        const templates = await documentServiceInstance.GetAllTemplates();
        return res.status(200).json(templates);
      } catch (e) {
        logger.error("error: o%", e);
        throw next(e);
      }
    }
  );

   router.patch(
     "/reject",
     async (req: Request, res: Response, next: NextFunction) => {
       logger.debug("Calling Reject endpoint");
       try {
         const result = await documentServiceInstance.RejectDocument(
           req.body as IDocumentInputDto
         );
         return res.status(200).json(result);
       } catch (e) {
         logger.error("error: o%", e);
         throw next(e);
       }
     }
   );
};
