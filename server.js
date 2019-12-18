var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//     res.send("Hello World from server.js")
// });
// static files going in folder called public.
app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log("Server running on port 3000");
