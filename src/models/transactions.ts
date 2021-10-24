import mongoose from 'mongoose';
import { ITransaction } from '../interfaces/ITransaction';

const TransactionModel = new mongoose.Schema(
  {
    transaction: [
      {
        accountName: {
          type: String,
          required: true,
          index: true,
        },
        nuban: {
          type: String,
          required: true,
          index: true,
        },
        accountCategory: String,
        accountType: String,
        availableBalance: {
          type: Number,
          required: true,
        },
        bookingBalance: {
          type: Number,
          required: true,
        },
        totalCredit: Number,
        totalDebit: Number,
        currency: String,
        address: String,
        customer: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Customer",
          required: true,
        },
        bank: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Banks",
          required: true,
        },
        signatories: [
          {
            Name: String,
            BVN: String,
          },
        ],
        details: [
          {
            transactionDate: String,
            valueDate: String,
            narration: String,
            credit: Number,
            debit: Number,
            balance: Number,
            branch: String,
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ITransaction & mongoose.Document>("Transaction", TransactionModel);