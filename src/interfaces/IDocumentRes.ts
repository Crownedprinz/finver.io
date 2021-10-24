export interface Summary {
  documentsCount: number;
  rejectedDocumentsCount: number;
  pendingDocumentsCount: number;
  draftsDocumentsCount: number;
}

export interface Files {
  fileName: string;
  content: string;
}

export interface Document {
  docID: number;
  files: Files;
  metaData: MetaData;
}

export interface MetaData {
  CaseNo: number;
  Complaint_Number: string;
  Theme: string;
  Protection: string;
  CaseSubject: string;
  OperationType: string;
  LocalCouncil: string;
  Alleged_Ilegalities: string;
  Document_Ref: string;
  Investigation_Date?: any;
  Uploaded_By: string;
  Uploaded_On: Date;
  Notes?: any;
  Rejections?: any;
  Inspectors?: any;
  Endorsed: number;
  Published: number;
  Endosed_By?: any;
  Endorsed_On?: any;
}


export interface IDocumentRes {
  summary: Summary;
  rejectedDocuments: Document[];
  pendingDocuments: Document[];
  draftsDocuments: Document[];
}
