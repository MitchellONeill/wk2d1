//Part 1
var http = require("http");

var requestOptions = {
  host: "example.com",
  path: "/",
  headers: {}
};

function printExampleHTML(callback) {
  http.get(requestOptions, function (response) {
    response.setEncoding("utf8");
    response.on("data", function(data) {
    console.log("Chunk Received.", data);
  });
    response.on("end", function() {
    console.log("Response stream completed.");
   });
  });
};

printExampleHTML();



// //Part 2
// var request = require("request");
// const endpoint = "https://example.com";

// request.get({
//   url: endpoint,
//   headers:'',
//   json: true
// }, function(err, incomingMessage, responseBody) {
//   if (err){
//     console.log(err);
//     return;
//   }
// console.log(responseBody);
// })
