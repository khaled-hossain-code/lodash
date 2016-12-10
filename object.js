const _ = require("lodash");

var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pabalo': { 'age': 10,  'active': true },
  'pebbles': { 'age': 1,  'active': true }
  
};

//find age bellow 30
var under30 = _.findKey(users, (o)=>{
    return o.age < 30;
});

console.log(under30);