var unirest = require("unirest");

exports.getData = function(date) {
    console.log("got to function with date " + date)
    var req = unirest("GET", "https://api-nba-v1.p.rapidapi.com/games/date/"+date);

    req.headers({
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "0f80d42940msh7e702f1daf041e7p185178jsn1c3c50fd85f3"
    });
    
    var hteams = []
    var vteams = []
    var hlogos = []
    var vlogos = []
    req.end(function (res) {
        if (res.error) throw new Error(res.error);
        var gameData
        gameData = res.body.api.games;
        console.log(gameData)
        if (gameData != null) {
            var i;
            for (i = 0; i < gameData.length; i++) {
                hlogos.push(gameData[i].hTeam.logo)
                vlogos.push(gameData[i].vTeam.logo)
                if (gameData[i].hTeam.score.points != "") {
                    hteams.push(gameData[i].hTeam.shortName + " " + gameData[i].hTeam.score.points + " vs ")
                    vteams.push(gameData[i].vTeam.shortName + " " + gameData[i].vTeam.score.points + "\n|| Game Status: " + gameData[i].statusGame)
                }
                else {
                    hteams.push(gameData[i].hTeam.fullName + " vs ")
                    vteams.push(gameData[i].vTeam.fullName)
                }
            }
        }
    });

    return {
        hTeams: hteams, 
        vTeams: vteams,
        hLogos: hlogos, 
        vLogos: vlogos
    };
}

