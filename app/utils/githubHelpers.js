var axios = require('axios');

var id = 'YOUR_CLIENT_ID';
var sec = 'YOUR_SECRET_ID';
var param = '?client_id=' + id + '&client_secret' + sec;

function getUsersInfo (username) {
  
  //returns a promise
  return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
  getPlayersInfo: function (players) {
    //loop over every username in player array using .map
    //axios.all takes ar of promises
    //axios.all returns a promise where it is being called
    return axios.all(players.map(function (username) {
      
      //returns a promise
      return getUsersInfo(username)
    })).then(function (info) {
      
      //returns array of only the data property for each user
      return info.map(function (user) {
        return user.data;
      })
    }).catch(function (err) {
      console.warn('Error in getPlayersInfo', err);
    })
  }
};

module.exports = helpers;