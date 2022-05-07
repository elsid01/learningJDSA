// Fibonacci

const fibonacci = [];

fibonacci[1] = 1;
fibonacci[2] = 1;

for(let i = 3; i < 20; i++){
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for(let i = 0; i < fibonacci.length; i++){
  console.log(fibonacci[i]);
}

// Shifting array elements and adding an element at position 0

Array.prototype.insertFirstPosition = function(val){
  for(let i = this.length; i >=0; i-- ){
    this[i] = this[i -1];
  }
  this[0] = val;
}

// Removing an element from the first position
Array.prototype.reIndex = function(myArray){
  const newArray = [];

  for(let i = 0; i < myArray.length; i++){
    if(myArray[1] !== undefined){
      newArray.push(myArray[i]);
    }
  }
  return newArray;
}

// remove first position manually and reIndex

Array.prototype.removeFirstPosition = function(){
  for(let i = 0; i < this.length; i++){
    this[i] = this[i+1];
  }
  return this.reIndex(this);
}

// Joining multiple arrays
const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -3];

let numbers = negativeNumbers.concat(zero, positieNumbers);


// Sorting elements
const numbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

numbers.reverse();

numbers.sort((a, b) => a - b);

const compare = function(a, b){
  if(a < b) return -1;
  if(a > b) return 1;
  return 0;
}

numbers.sort(compare);

// Custom sorting
const friends = [
  {name: 'John', age: 30},
  {name: 'Ana', age: 20},
  {name: 'Chris', age: 24},
];

function comparePerson(a, b){
  if(a.age < b.age) return -1;
  if(a.age > b.age) return 1;
  return 0;
}

console.log(friends.sort(comparePerson));


// Sorting string 
let names = ['Ana', 'John', 'ana', 'john'];

console.log(names.sort(function(a,b){
  if(a.toLowerCase < b.toLowerCase) return -1;
  if(a.toLowerCase > b.toLowerCase) return 1;
  return 0;
}))


// The find and findIndex methods
function multipleOf13(element, index, array){
  return (element % 13 == 0);
}

console.log(numbers.find(multipleOf13));
console.log(numbers.find(multipleOf13));