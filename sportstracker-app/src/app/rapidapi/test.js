var unirest = require("unirest");

var req = unirest("GET", "https://api-nba-v1.p.rapidapi.com/seasons/");

req.headers({
	"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
	"x-rapidapi-key": "0f80d42940msh7e702f1daf041e7p185178jsn1c3c50fd85f3"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
