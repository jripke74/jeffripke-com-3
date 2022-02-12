const path = require("path");

const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use("/products/assets", express.static('product-data'))
app.use(express.urlencoded({ extended: false }));

app.listen(3000);
