var https = require("https");

function printMessage(username, badgeCount, points) {
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
    console.log(message);
};

function printError(error) {
    console.error(error.message);
};


function get(username){
    try {
        var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
            var body = "";

            response.on('data', function(chunk){
                body += chunk;
            });

            response.on('end', function(){
                if (response.statusCode === 200) {
                    try {
                        var profile = JSON.parse(body);
                        printMessage(username, profile.badges.length, profile.points.JavaScript);
                    } catch(error) {
                        printError(error);
                    }
                } else{
                    printError({message: "There was an erroro getting the profile for " + 
                        username + ". (" + response.statusCode + ")" });
                }
                
            });
        });
    } catch(error) {
        printError(error);
    }
}


module.exports.get = get;