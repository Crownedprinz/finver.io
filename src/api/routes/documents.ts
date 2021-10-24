import { Logger } from "winston";
import { Container } from "typedi";
import { NextFunction, Request, Response, Router } from "express";
import DocumentService from "../../services/document";
const router = Router();

export default (app: Router) => {
  app.use("/documents", router);
  const documentServiceInstance = Container.get(DocumentService);
  const logger: Logger = Container.get("logger");
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
};
