import { IDocument } from "./../interfaces/IDocument";

import mongoose from "mongoose";
const DocumentSchema = new mongoose.Schema({
  docID: {
    type: Number,
    required: true,
    index: true,
  },
  status: String,
  files: {
    fileName: String,
    content: String,
  },
  metaData: {
    caseNo: Number,
    complaint_Number: String,
    theme: String,
    protection: String,
    caseSubject: String,
    operationType: String,
    localCouncil: String,
    alleged_Ilegalities: String,
    document_Ref: String,
    investigation_Date: Date,
    uploaded_By: String,
    uploaded_On: Date,
    notes: String,
    rejections: String,
    inspectors: String,
    endorsed: Number,
    published: Number,
    endosed_By: String,
    endorsed_On: Date,
  },
});

export default mongoose.model<IDocument & mongoose.Document>(
  "Document",
  DocumentSchema
);
