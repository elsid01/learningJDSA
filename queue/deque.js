/******************** 
 
 Creating the Deque class

**********************/

 class Dequeue{

  constructor(){
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  
/******************** 
 
 Creating the Deque 
 Main functions

**********************/

// Adding elements to the front the deque

addFront(element){
  if(this.isEmpty){
    this.addBack(element);
  }else if(this.lowestCount > 0){
    this.lowestCount --;
    this.items[this.lowestCount] = element;
  }else{
    for(let i = this.count; i > 0; i--){
      this.items[i] = this.items[ i - 1];
    }

    this.count++;
    this.lowestCount = 0;
    this.items[0] = element;
  }
}
addBack(element){
  this.items[this.count] = element;
  this.count++;
}

removeFront(){
  if(this.isEmpty()){
    return undefined;
  }
  const removedItem = this.items[this.lowestCount]
  delete this.items[this.lowestCount];
  this.lowestCount++;
  return removedItem;
}

removeBack(){
  if(this.isEmpty()){
    return undefined;
  }
  this.count--;
  const removedItem = this.items[this.count];
  delete this.items[this.count];
  return removedItem;
}

peekFront(){
  if(this.isEmpty()) return undefined;

  return this.items[this.lowestCount];
}

peekBack(){
  if(this.isEmpty()) return undefined;

  return this.items[this.count - 1];
}
/******************** 
 
 Creating the Helper functions

**********************/

  isEmpty(){
    return this.size() === 0
  }
  
  size(){
    return this.count - this.lowestCount;
  }

  clear(){
    this.items ={};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString(){
    if(this.isEmpty()){
      return '';
    }

    let objString = `${this.items[this.lowestCount]}`;

    for(let i = this.lowestCount + 1; i < this.count; i++){
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}


/******************** 
 Using the Dequeue class
**********************/

const dequeue = new Dequeue();
console.log(dequeue.isEmpty());

function hotPotato(elementsList, num){
 const queue = new Queue();
 const eliminatedList = [];

 for(let i = 0; i < elementsList.length; i++){
   queue.enqueue(queue.dequeue());
 }

 while(queue.size() > 1){
   for(let i = 0; i < num; i++){
     queue.enqueue(queue.dequeue());
   }
   eliminatedList.push(queue.dequeue());
 }
 return {
   eliminated : eliminatedList,
   winner: queue.dequeue()
 }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);

result.eliminated.forEach(name => {
  console.log(`${name} was eliminated from the Hot Potato game.`)})


  function palindromeChecker(aString){
    if(aString === undefined || aString === null ||
       (aString != null && aString.length === 0)){
         return false;
       }
    const deque = new Dequeue();
    const lowerString = aString.toLowerCase().split('').join('');
    let isEqual = true;
    let firstChar, lastChar;

    for(let i = 0; i < lowerString.length; i++){
      deque.addBack(lowerString.charAt(i));
    }

    while(deque.size() > 1 && isEqual){
      firstChar = deque.removeFront();
      lastChar = deque.removeBack();
      if(firstChar !== lastChar){
        isEqual = false;
      }
    }
    return isEqual;
  }