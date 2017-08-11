var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlroutes");
var apiRoutes = require("./app/routing/apiRoutes");
var app = express();
var PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(express.static('app/public'));
apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
