import { join } from "path";

import express from "express";

import defaultRoutes from "./routes/default";
import restaurantRoutes from "./routes/restaurants";

const app = express();

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/", defaultRoutes);
app.use("/", restaurantRoutes);

app.use(function (req, res) {
  res.render("404");
});

app.use(function (error, req, res, next) {
  res.render("500");
});

app.listen(3000);
