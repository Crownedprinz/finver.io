
import mongoose from "mongoose";
import { ICustomer } from "../interfaces/ICustomer";
const CustomerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      index: true,
    },
    lastName: {
      type: String,
      required: true,
      index: true,
    },
    username: String,
    password: String,
    accountCategory: String,
    email: [String],
    phone: [String],
    noLinkedAccounts: {
      type: Number,
      required: false,
    },
    linkedAccounts: [
      {
        accountName: String,
        connected: Boolean,
        nuban: String,
        bank: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Banks",
          required: true,
        },
      },
    ],
    blocked: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ICustomer & mongoose.Document>("Customer", CustomerSchema);