const { myName, myFavoriteNumber, myHobbies } = require("./multiple-exports");
const greeting = require("./my-modules/single-export");
const { myName: myOtherName, myFriendsName } = require("./export-and-import");

console.log("myothername:", myOtherName);

myHobbies.push("climbing");

greeting(myName);

console.log(myHobbies)