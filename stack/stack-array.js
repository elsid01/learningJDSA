class Stack {

  // constructor(){
    //   this.items = []; // {1}
    // }
    constructor(){
      this.count = 0;
      this.items = {};
    }

  // push(element){
  //   this.items.push(element);
  // }

  push(element){
    this.items[this.count]= element;
    this.count++;
  }

  // pop(){
  //   return this.items.pop();
  // }
  pop(){
    if(this.isEmpty()){
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  // peek(){
  //   return this.items[this.items.length -1 ];
  // }

  peek(){
    if(this.isEmpty()){
      return undefined;
    }
    return this.items[this.count -1];
  }

  // isEmpty(){
  //  return this.items.length == 0;
  // }
  isEmpty(){
    return this.count = 0;
  }
  
  // size(){
  //   return this.items.length;
  // }
  size(){
    return this.count;
  }
  // clear(){
  //  this.items = [];
  // }

  clear(){
    this.items = {};
    this.count = 0;
  }

  toString(){
    if(this.isEmpty()){
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++){
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }

}

function decimalToBinary(decNumber){
  const remStack = new Stack();

  let number = decNumber;
  let rem;
  let binaryString = '';

  while(number>0){
    rem = Math.floor(number%2);
    remStack.push(rem)
    number = Math.floor(number/2);
  }

  while(!remStack.isEmpty()){
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

function baseConverter(decNumber, base){
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let rem;
  let baseString = '';
  if(!(base >= 2 && base <=36)){
    return '';
  }
  while (number > 0){
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number/base);
  }

  while(!remStack.isEmpty()){
    baseString += digits[remStack.pop()];
}
return baseString;
}
console.log(baseConverter(100345, 16));

