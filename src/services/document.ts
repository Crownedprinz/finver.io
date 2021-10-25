import { Summary } from "./../interfaces/IDocumentRes";
import { IDocument } from "./../interfaces/IDocument";
import { Inject, Service } from "typedi";
import { IDocumentRes } from "../interfaces/IDocumentRes";
import { ITemplate } from "../interfaces/ITemplate";

@Service()
export default class DocumentService {
  constructor(
    @Inject("logger") private logger,
    @Inject("documentModel") private documentModel,
    @Inject("templateModel") private templateModel
  ) {}

  public async GetAllDocuments(): Promise<IDocumentRes> {
    try {
      this.logger.silly("Reading  Records");
      const DocumentModel = await this.documentModel.find();
      var documents: IDocumentRes = {
        summary: {
          rejectedDocumentsCount: 0,
          pendingDocumentsCount: 0,
          documentsCount: 0,
        } as Summary,
        draftsDocuments: [],
        pendingDocuments: [],
        rejectedDocuments: [],
      };
      const result = DocumentModel as IDocument[];
      documents.summary.documentsCount = result.length;

      documents.draftsDocuments = result.filter((x) => x.status === "drafts");
      documents.pendingDocuments = result.filter((x) => x.status === "pending");
      documents.rejectedDocuments = result.filter(
        (x) => x.status === "rejected"
      );
      documents.summary.draftsDocumentsCount = documents.draftsDocuments.length;
      documents.summary.pendingDocumentsCount =
        documents.pendingDocuments.length;
      documents.summary.rejectedDocumentsCount =
        documents.rejectedDocuments.length;
      return documents;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async GetAllTemplates(): Promise<ITemplate> {
    this.logger.silly("Reading  Records");
    const TemplateModel = await this.templateModel.find();
    const templates = TemplateModel;
    return templates;
  }
}
