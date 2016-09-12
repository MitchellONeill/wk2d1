//Part 1

function printExampleHTML0 (callback) {

  var http = require("http");
  var requestOptions = {
    host: "www.example.com",
    path: "/",
    headers: {}
  };
  var exampleHTML0 = '';
  http.get(requestOptions, (response) => {
    response.setEncoding("utf8");
    response.on("data", function(data) {
    exampleHTML0 += data
  });
    response.on("end", function() {
    callback(exampleHTML0);
   });
  });
};

printExampleHTML0 (function (exampleHTML0){
  console.log('function1****\n' + exampleHTML0);
});



//Part 2
var request = require("request");
const endpoint = "https://example.com";
var exampleHTML = '';

function printExampleHTML(callback){
  request.get({
    url: endpoint,
    json: true
    }, function(err, incomingMessage, responseBody) {
    if (err){
      console.log(err);
      return;
    } else {
      exampleHTML += responseBody;
    }
  callback(exampleHTML);
  });
};

printExampleHTML(function (exampleHTML) {
  console.log('function2****\n' +exampleHTML);
});

