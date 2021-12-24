import express from "express";

const app = express();
import database from "./prisma/database";
const main = async () => {
  try {
    await database();
    app.use(express.json());

    app.listen(3000, () => {
      console.log("Running");
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};


main();
