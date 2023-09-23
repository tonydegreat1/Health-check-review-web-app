var http = require("http");
var options = {
  host: "34.122.90.162",
  port: "80",
  timeout: 2000,
};
var request = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  if (res.statusCode == 200) {
    process.exit(0);
  } else {
    process.exit(1);
  }
});
request.on("error", function (err) {
  console.log("ERROR");
  process.exit(1);
});
request.end();