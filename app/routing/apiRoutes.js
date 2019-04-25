var friends = require("../data/friend");


// var friends = {
//   friend: "Max",
//   age: 4,
//   favColor: "red"
// };


module.exports = function (app){
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});



//Create new friend
app.post("/api/friends", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
   var newFriend = req.body.scores;
   var totalDifference = 0;
   var closestMatch = 50;
   var match = {};

   console.log(friends.length);
   console.log(friends[0].scores.length)
   for (var i = 0; i < friends.length; i++){

   for (var j = 0; j < newFriend.length; j++){
    
    //console.log(parseInt(friends.scores[i]))
    //console.log(parseInt(newFriend))
    totalDifference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriend[j])));
     //score.push(parseInt(newFriend[j]));
     //console.log(totalDifference);
     if (totalDifference <= closestMatch){
       match = friends[i]
       closestMatch = totalDifference;
      
  }

  }

}
console.log(match)
//    var count = 0;
//    function (inputs, inFunc) {
//     return inputs.filter(j => inFunc(j));
// }
//console.log(score);

//console.log(friends.scores);
//console.log(newFriend);

//friends.push(newFriend);

res.json(match);

friends.push(req.body);
});

}
