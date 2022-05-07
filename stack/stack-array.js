class Stack {
  constructor(){
    this.items = []; // {1}
  }

  push(element){
    this.items.push(element);
  }

  pop(){
    return this.items.pop();
  }

  peek(){
    return this.items[this.items.length -1 ];
  }

  isEmpty(){
   return this.items.length == 0;
  }
  
  size(){
    return this.items.length;
  }
  clear(){
   this.items = [];
  }

}