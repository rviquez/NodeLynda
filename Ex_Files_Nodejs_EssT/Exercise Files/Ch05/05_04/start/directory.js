/**
 * Created by rviquez on 1/25/2016.
 */
var fs = require("fs");
if (fs.existsSync("lib")) {
    console.log("Directory already exists");
}else{
    fs.mkdir("lib", function (err) {
        if (err) {
            console.log(err);
        }else{
            console.log("Directory Created.");
        }
    });
}