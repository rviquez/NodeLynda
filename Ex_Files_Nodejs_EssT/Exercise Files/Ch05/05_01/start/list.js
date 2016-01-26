/**
 * Created by rviquez on 1/25/2016.
 */
var fs = require("fs");

fs.readdir('./lib', function (err, files) {
    if (err) {
        throw err;
    }
    console.log(files);
});

console.log("Reading Files...");