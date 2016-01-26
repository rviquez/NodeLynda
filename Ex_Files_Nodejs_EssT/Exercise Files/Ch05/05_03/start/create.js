/**
 * Created by rviquez on 1/25/2016.
 */
var fs = require("fs");

var md = `

Sample Markdown Title
=====================

Sample substitle
-----------------

* point
* point
* point

`;

fs.writeFile("sample.md", md.trim(), function (err) {
    console.log("File Created");
});