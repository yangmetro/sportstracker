var unirest = require("unirest");

var req = unirest("GET", "https://api-nba-v1.p.rapidapi.com/seasons/");

req.headers({
	"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
	"x-rapidapi-key": ""
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
