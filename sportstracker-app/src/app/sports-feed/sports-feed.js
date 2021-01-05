var request = require('request');
var MySportsFeeds = require("mysportsfeeds-node");
 
var msf = new MySportsFeeds("2.0", true);
msf.authenticate("178e0cc9-e553-4c80-818f-a570d8", "MYSPORTSFEEDS");

exports.getData = function() {
    console.log("got to function")
    var data = msf.getData( 'mlb', '2016-playoff', 'seasonal_games', 'json', {});
    console.log(data);
};