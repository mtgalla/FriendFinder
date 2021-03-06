var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

//middleware that helps encode the object data and 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//app.use(express.static("."));
app.use(express.static("app"));
app.use(express.static("./"));
//app.use(express.static(path.join(__dirname + '/app')));
//app.use("/code", express.static(__dirname + "/code"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});