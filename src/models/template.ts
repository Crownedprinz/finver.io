import mongoose from "mongoose";
import { ITemplate } from "../interfaces/IDocument";
const TemplateSchema = new mongoose.Schema({
  docNum: {
    type: Number,
    required: true,
    index: true,
  },
  name: String,
  description: String,
  documentType: String,
});

export default mongoose.model<ITemplate & mongoose.Document>(
  "Template",
  TemplateSchema
);
