export interface Files {
  fileName: string;
  content: string;
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

export interface IDocument {
  docID: number;
  files: Files;
  metaData: MetaData;
  status: String;
}
