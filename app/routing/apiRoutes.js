var friendList = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendList);
    })

    app.post("/api/friends", function (req, res) {

        var user = req.body;
        var userScores = user.scores;
        var matchingFriend = {};
        var leastDifference = 100;
     
        for (var x = 0; x < friendList.length; x++){
          var friends = friendList[x];
          var difference = 0;
          for (var y = 0; y < friends.scores.length; y++) {
            var curUserScores = userScores[y];
            var curFriendScore = friends.scores[y];
            difference += Math.abs(curUserScores - curFriendScore);
          }

          if (difference <= leastDifference) {
            leastDifference = difference;
            matchingFriend = friends;
          }
        }
     
        if (user.name == matchingFriend.name) {
          matchingFriend = friendList[0];
        }

        friendList.push(user);
        res.json(matchingFriend);
      })
}