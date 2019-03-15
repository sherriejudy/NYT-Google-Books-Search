const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
var mongoose = require("mongoose");
var seed = require("./scripts/seedDB.js");
var db = require("./models");
const books = require("./routes");
// Define middleware here
// Init express
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(books);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// mongo stuff
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist", {
    useNewUrlParser: true
  })
  .catch(err => {
    console.log(err);
  });
db.Book.remove({})
  .then(() => db.Book.collection.insertMany(seed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.log(err);
  });
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
