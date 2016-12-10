const _ = require("lodash");
var users = [
  { 'user': 'barney',  'active': true, 'money': 100 },
  { 'user': 'fred',    'active': false, 'money':200 },
  { 'user': 'pebbles', 'active': false, 'money':300 }
];

var output = _.dropWhile(users, (user)=>{
     return user.money < 250;
});

console.log(output);
