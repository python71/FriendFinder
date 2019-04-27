//  Dependencies
var path = require("path");

// Routes
module.exports = function(app) {
    console.log("test")
    // loads survey page
    app.get("/survey", function(req, res) {
        res.sendfile(path.join(__dirname, "/../public/survey.html"));
    });

    // loads home page
    app.get("*", function(req, res) {
        res.sendfile(path.join(__dirname + "/../public/home.html"));
    });
};