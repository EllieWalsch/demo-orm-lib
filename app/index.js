import express from "express";
import bookRouter from "./book/routes.js";

const PORT = 3001;
const app = express();

// middleware to parse incoming request bodies (eg POST)
app.use(express.json());

app.use("/api/books", bookRouter);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
