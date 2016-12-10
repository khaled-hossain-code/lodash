const _ = require("lodash");
const mockData = require("./MOCK_DATA.json");
var dataArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var dataDupArr = _.concat(dataArr,dataArr);

var chunk = _.chunk(mockData,10); //creates a chunk of 10 objects in one array and return all the arrays in chunk [ [{},{},...], [{},{},...],...]
var twenty = _.concat(chunk[0], chunk[1]); //adding two arrays
var differenceBy = _.differenceBy(chunk[0], chunk[1], 'hair_color'); //difference by any property name of an object which first array has but second array does not have
var differenceWith = _.differenceWith(chunk[0],chunk[1], _.isEqual); // if there is a eqal object in both the array it will be subtracted from first array
var reducedChunk4mFront = _.drop(chunk,10); //drop first 10 element of chunk array
var reduceChunk4mBehind = _.dropRight(chunk,10); 
var filledArray = _.fill(twenty,"null",3,5); //fill the fourth & sixth element of the array with null, it mutates the array
var findDiaz = _.findIndex(mockData, {"last_name": "Diaz"}); //find the index of the person last name is diaz from first to last=>  output: 3
var findDiazLast = _.findLastIndex(mockData, {"last_name":"Diaz"}); //find diaz from last to first => output: 914
var mockDataFlatten = _.flatten(chunk);
var findIndexof = _.indexOf(dataDupArr,8);// found value 8 on index of 7 in the array
var commons = _.intersection(dataArr,dataDupArr); //find the commons between dataArr & dataDupArr 
var SameHairColor = _.intersectionBy(chunk[0], chunk[1], 'hair_color'); //intersect by any property name where the property value exists in both the array
var samePeople = _.intersectionWith(chunk[0], chunk[1], _.isEqual); // there is no same person in both the array so the output will be empty
var joinPeople = _.join(dataArr,' ');
var lastPerson = _.last(mockData);
var nthPerson = _.nth(mockData, -3); // find third last person
var pullValue = _.pull(dataDupArr, 9); // 9 will be removed twice and rest of the array will be returned. here original array is mutated
var pullMultipleValue = _.pullAll(dataDupArr, [7,8,6]);// 7,8,6 is removed twice and original array is mutated
var pullAnArr = _.pullAt(dataArr,[2,6,12]);// return an array of three element which are removed from chunk from position 2,6 & 12, original array is mutated
var reverseOrder = _.reverse(chunk); // [1,2,3] => [3,2,1]
var sliceArr = _.slice(dataArr, 3); // slice from 3rd position to end of the arr
var takeArr = _.take(dataArr, 4); //take first four elements
var firstFemale = _.takeWhile(mockData, {"gender": "Female"});
var unionPeople = _.union(chunk[0], chunk[1]); // common people will be reduced and uncommon from both array will be added
var allMale = _.unionBy([{"gender":"Male"}], chunk[0],"gender" );

console.log(differenceWith);