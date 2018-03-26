var express = require("express");
var bp = require("body-parser");
var app = express();
var exphbs = require("express-handlebars");
var routes = require("./controllers/burger_controller.js");

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bp.urlencoded({ extended: true }));

app.use(bp.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
