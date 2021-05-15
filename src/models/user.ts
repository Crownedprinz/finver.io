import { IUser } from "../interfaces/IUser";
import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter a first Name"],
      index: true,
    },
    lastName: {
      type: String,
      required: [true, "Please enter a Surname"],
      index: true,
    },
    companyName: {
      type: String,
      required: [true, "Please enter a Company Name"],
      index: true,
    },

    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },

    password: String,

    salt: String,
    isApproved: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUser & mongoose.Document>("User", User);
