
//  =====  DEPENDENCIES  =====  //
var path = require("path");

//  =====  ROUTING  =====  //
module.exports = function(app) {

  //  Display survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  //  If no matching route is found default to Home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};
