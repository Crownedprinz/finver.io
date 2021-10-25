import { ITemplate } from "./../interfaces/ITemplate";
import mongoose from "mongoose";
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
