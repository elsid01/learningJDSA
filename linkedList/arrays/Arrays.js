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