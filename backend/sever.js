const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
const port = process.env.port || 5000;
app.use(cors());
app.use(express.json());

const uri = process.env.mongooseurl;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodg success");
});

const ProductRoute = require("./routes/Product");
const usersRoutes = require("./routes/users");
app.use("/product", ProductRoute);
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`Server is starting on port ${port}`);
});