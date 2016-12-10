const _ = require("lodash");
const mockData = require("./MOCK_DATA.json");

var chunk = _.chunk(mockData,10); //creates a chunk of 10 objects in one array and return all the arrays in chunk [ [{},{},...], [{},{},...],...]
var twenty = _.concat(chunk[0], chunk[1]);
console.log(twenty);