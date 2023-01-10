import { DataTypes } from "sequelize";
import sequelize from "../conn.js";

const Book = sequelize.define(
  "Book",
  {
    title: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    isbn: {
      type: DataTypes.STRING,
    },
    pages: {
      type: DataTypes.INTEGER,
    },
    edition: {
      type: DataTypes.INTEGER,
    },
    // Will become `is_paperback` in table due to `underscored` flag
    isPaperback: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "Book",
    underscored: true,
  }
);

await Book.sync().catch((err) => {
  console.error("Error syncing database:", err.message);
  process.exit(1);
});

export default Book;
