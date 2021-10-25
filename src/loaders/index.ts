import expressLoader from "./express";
import dependencyInjectorLoader from "./dependencyinjector";
import mongooseLoader from "./mongoose";
import jobsLoader from "./jobs";
import Logger from "./logger";
//We have to import at least all the events once so they can be triggered
import "./events";

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  Logger.info("✌️ DB loaded and connected!");

  /**
   * WTF is going on here?
   *
   * We are injecting the mongoose models into the DI container.
   * I know this is controversial but will provide a lot of flexibility at the time
   * of writing unit tests, just go and check how beautiful they are!
   */

  const userModel = {
    name: "userModel",
    // Notice the require syntax and the '.default'
    model: require("../models/user").default,
  };
  const banksModel = {
    name: "banksModel",
    // Notice the require syntax and the '.default'
    model: require("../models/banks").default,
  };
  const customerModel = {
    name: "customerModel",
    // Notice the require syntax and the '.default'
    model: require("../models/customer").default,
  };

  const transactionModel = {
    name: "transactionModel",
    // Notice the require syntax and the '.default'
    model: require("../models/transactions").default,
  };

  const documentModel = {
    name: "documentModel",
    model: require("../models/documents").default,
  };

  const templateModel = {
    name: "templateModel",
    model: require("../models/template").default,
  };
  // It returns the agenda instance because it's needed in the subsequent loaders
  const { agenda } = await dependencyInjectorLoader({
    mongoConnection,
    models: [
      userModel,
      banksModel,
      customerModel,
      transactionModel,
      documentModel,
      templateModel
      // salaryModel,
      // whateverModel
    ],
  });
  Logger.info("✌️ Dependency Injector loaded");

  await jobsLoader({ agenda });
  Logger.info("✌️ Jobs loaded");

  await expressLoader({ app: expressApp });
  Logger.info("✌️ Express loaded");
};
