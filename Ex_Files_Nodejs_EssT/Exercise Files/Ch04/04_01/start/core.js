/**
 * Created by rviquez on 1/21/2016.
 */
var path = require('path');
var util = require('util');
var v8 = require('v8');

util.log(path.basename(__filename));

var dirUploads = path.join(__dirname, 'wwww', 'files', 'uploads');

util.log(dirUploads);

util.log(v8.getHeapStatistics());