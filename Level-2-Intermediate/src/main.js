// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  return array.filter(num => num % 2 !== 0)

}


// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
  return array.filter(num => num % 2 === 0)

}


// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  return Math.max(...array)

}

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  return string.trim()
}

// under the hood, a JavaScript array is a specific type of object in which values are paired with sequentially numbered keys.
// the "Array" object also contains a number of methods that give arrays their functionality.
// the below function should return an empty object that has the behavior and functionality of an array. this object should have the following methods:
  // push(val) adds val to the end
  // pop() removes a value from the end and returns it
  // unshift(val) adds val to the beginning
  // shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and create an object that has those methods
// function CreateArray() {
//   this.arr = [];
//   this.index = 0;
// }

// CreateArray.prototype.push = function (val){
//   this.arr[this.index] = val;
//   return this
// }

// // CreateArray.prototype.push = function( value ) {
// //   this.arr[ this.index++ ] = value;
// //   return this;
// // }
// CreateArray.prototype.pop = function () {

// }

// CreateArray.prototype.shift = function (){

// }

// CreateArray.prototype.unshift = function(val){

// }
 
function createArray(){
  this.length = 0;
}
createArray.prototype.push = function (val){
  this[this.length] = val;
  this.length++
}
createArray.prototype.pop = function (){
  let result = this[this.length - 1] 
  delete this[this.length - 1]
  this.length--
  return result;
}
createArray.prototype.unshift = function (...val){
  for (let i = 0; i < val.length; i++){
    this[i] = val[i]
    this.length++
  } 
  
  
}
createArray.prototype.shift = function(){
  let result = this[0];
  this.length--
  return result;
}