import mongoose from "mongoose";
import { IBanks } from '../interfaces/IBanks';

const Banks = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a Bank Name"],
      index: true,
      unique: true,
    },
    sortCode: {
      type: String,
      required: [false],
      unique: true,
      index: true,
    },
    active: {
      type: Boolean,
      required: [false],
      index: false,
    },
    color: {
      primary: {
        type: String,
        required: [false],
        index: false,
      },
      accent: {
        type: String,
        required: [false],
        index: false,
      },
      secondary: {
        type: String,
        required: [false],
        index: false,
      },
    },
    logo: {
      type: String,
      required: [false],
    },
    icon: {
      type: String,
      required: [false],
    },
  },
    
);

export default mongoose.model<IBanks & mongoose.Document>("Banks", Banks);