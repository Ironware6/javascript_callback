//Rafael Perez
//-------------------FOR EACH---------------

// function to print out each array index to the console.
let myForEach = function(arrayP) {
    for(var i = 0; i < arrayP.length; i++) {
      console.log((arrayP[i]));
      
    }
     
  }
// function that takes an array as a parametere and a callback function to apply to that array
  let myEach = function(arrayR,callback) {
   return callback(arrayR);
  
  }
  
  // test case
  var x = [1,2,3];
  //myForEach(x);
  //call metho with callback function
  myEach(x,myForEach);

  // --------------- MAP -------------------

// test array 
var array1 = [1, 4, 9, 16];
//test callback function to add 1 to every index in the array
let add = function(x){
  return x + 1;
}
// my personal map function that takes an array and a callback function and returns the new array with the calback function applied
let myMap = function(arrayOne,callback) {
  var Q = [];
  for(var i = 0; i < arrayOne.length; i++) {
    // push all values that have used the callback on each index and put into new array
    Q.push(callback(arrayOne[i]));  
    
  }
  return Q;
}

//test print on myMap
console.log(myMap(array1,add));

// --------------FILTER-----------------
var arrayString = ["Chris", "Jose" , "Josh", "Ba"]

//Test function to remove any string that is less than 3 and push into new array
let greaterThanThree = function(aOne) {
 aTwo = [];
 for(var i = 0; i < aOne.length; i++ ) {
    if(aOne[i].length > 3){
      aTwo.push(aOne[i]);
    } 
 }
 return aTwo;
}
//using a new function to apply any callback function to the array in the parameter
let myFilter = function(arrayTwo, callback) {
  return callback(arrayTwo);
}
//test and print to console 
console.log(myFilter(arrayString, greaterThanThree));

//-----------SOME--------------

var array = [1, 1, 2, 1, 5];

let even = function(arrayA) {
  let boolA = false;
  for (var i = 0; i < arrayA.length; i++ )
    if (arrayA[i] % 2 === 0) {
      boolA = true;
    }
    return boolA;
  // checks whether an element is even and changes the boolean variable when it finds one that is even and if not it leaves it as false

};
// apply a callback function to the array in the parameter.
let mySome = function(arrayN, callback){
  return callback(arrayN);
}
// test callback function
console.log(mySome(array, even));


//-----------SOME--------------

var arrayFive = [1, 1, 18, 1, 2, ];

// checks if the values of the array are less than five and changes the boolean variable to true if it is
let lessThanFive = function(arrayA) {
  let boolA = false;
  for (var i = 0; i < arrayA.length; i++ )
    if (arrayA[i] < 5) {
      boolA = true;
    } else {
      return false;
    }
    return boolA;


};
// apply a callback function to the array in the parameter.
let myEvery = function(arrayZ, callback){
  return callback(arrayZ);
}
//test 
console.log(myEvery(arrayFive, lessThanFive));

