/******************** 
 
 Creating the Deque class

**********************/


class Deque{

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