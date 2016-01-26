/**
 * Created by rviquez on 1/25/2016.
 */
var fs = require("fs");
var path = require("path");

fs.readdir("./lib", function (err, files) {
    if (err) {
        throw err;
    }
    files.forEach(function (fileName) {
        var file = path.join(__dirname, "lib", fileName);
        var stats = fs.statSync(file);
        if (stats.isFile() && fileName !== "Person.js")  {
            fs.readFile(file, "UTF-8", function (err, contents) {
                console.log(contents);
            })
        }
    })
})

