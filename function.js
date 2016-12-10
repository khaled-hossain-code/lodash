const _ = require("lodash");
var dataArr = [1, 2, 3, 4, 5, 6];

function isEven(n) {
  return n % 2 == 0;
}

var even = _.filter(dataArr,(value)=>{
    return isEven(value);
});

var odd = _.filter(dataArr, _.negate(isEven));

console.log(even);