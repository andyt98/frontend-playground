import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

import express, { urlencoded } from "express";

const app = express();

app.use(urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // localhost:3000/currenttime

app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>'
  );
}); // localhost:3000/

app.post("/store-user", function (req, res) {
  const userName = req.body.username;

  const filePath = join(__dirname, "data", "users.json");

  const fileData = readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  existingUsers.push(userName);

  writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send("<h1>Username stored!</h1>");
});

app.listen(3000);
