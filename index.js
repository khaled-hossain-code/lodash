const _ = require("lodash");
var users = [
  { 'user': 'barney',  'active': true, 'money': 100 },
  { 'user': 'fred',    'active': false, 'money':200 },
  { 'user': 'pebbles', 'active': false, 'money':300 }
];

var output = _.dropWhile(users, (user)=>{
     return user.money < 250;
});

var newInt = _.map(['6', '8', '10'], _.ary(parseInt, 1));


console.log(output);
