// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var tables = [];



// app.post("/api/new", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body-parser middleware
//   var newTable = req.body;
//   newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newTable);

//   characters.push(newTable);

//   res.json(newTable);
// });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});