var https = require("https");
var username = "mahikero01";

function printMessage(username, badgeCount, points) {
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
    console.log(message);
};

try {
var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
    var body = "";

    console.log(response.statusCode);

    response.on('data', function(chunk){
        body += chunk;
    });

    response.on('end', function(){
        console.log(body);
    });
});
} catch(error) {

    console.error(error.message);

}