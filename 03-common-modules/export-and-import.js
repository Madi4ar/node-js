const { myName } = require("./multiple-exports");

const myFriendsName = "Bogdan";

module.exports.myFriendsName = myFriendsName;
module.exports.myName = myName;
