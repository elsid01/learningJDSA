
class Queue{
  constructor(){
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element){
    this.items[this.count] = element;
    this.count++;
  }

  dequeue(){
    if(this.items.isEmpty()){
      return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
     this.lowestCount++;
     return result;
  }

  isEmpty(){
    return this.count - this.lowestCount === 0;
  }

  peek(){
    if(this.items.isEmpty()){
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  size(){
    return this.count -this.lowestCount;
  }

  clear(){
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString(){
   
    if(this.items.isEmpty()){
     return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for(let i = this.lowestCount + 1; i < this.count; i++){
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}