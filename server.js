var express = require("express");
var app = express();
app.use(express.static('public'))


 /* serves main page */
 app.get("/", function(req, res) {
    res.sendfile('./templates/index.htm')
 });

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});