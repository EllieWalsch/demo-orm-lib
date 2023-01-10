import config from "./config.js";
import { Sequelize } from "sequelize";

// Creates a new Sequelize instance
const sequelize = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  { host: "localhost", dialect: "mysql" }
);

await sequelize.authenticate().catch((err) => {
  console.error("Unable to connect to database:", err.message);
  // if there is an error, exit the process
  process.exit(1);
});

console.log("Connection established");

export default sequelize;
