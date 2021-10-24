import { Router } from "express";
import auth from "./routes/auth";
import user from "./routes/user";
import agendash from "./routes/agendash";
import banks from "./routes/banks";
import customer from "./routes/customer";
import transactions from "./routes/transactions";
import documents from "./routes/documents";

// guaranteed to get dependencies
export default () => {
  const app = Router();
  auth(app);
  user(app);
  banks(app);
  customer(app);
  transactions(app);
  documents(app);
  agendash(app);
  

  return app;
};
