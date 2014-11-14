var users = require('../data/users.json');

module.exports = {
  getFriendsGivenUserId: function(userId) {
    var friends = [];
    console.log(userId);
    users.forEach(function(user, index) {
      if (user.id == userId) {
        //Get the array of friends for the user passed in
        var userFriends = user.friends;
        console.log(userFriends);
        userFriends.forEach(function(friend, index) {
          var friend = getUserGivenUserId(friend.friend_id);
          friends.push(friend);
        }); 
        return;
      }
    });
    return friends;
  }
}
var getUserGivenUserId = function(userId) {
  var userReturn;
  users.forEach(function(user, index) {
    if (user.id == userId) {
      userReturn = user;
      return;
    }
  });
  return userReturn;
} 

