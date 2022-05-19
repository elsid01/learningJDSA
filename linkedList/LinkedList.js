import { defaultEquals } from '../util';
import { Node } from './models/linked-list-models';

export default class linkedList {
  constructor(equalsFn = defaultEquals){
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element){
    const node = new Node(element);
    let current;

    if(this.head == null){
      this.head = node;
    }else{
      current = this.head;
      while(current.next != null){
        current = this.next;
      }
      current.next = node;
    }
    this.count++;
  }

  removeAt(index){
    // check for out-of-bounds values
    if(index >= 0 && index < this.count){

      let current = this.head;

      // removing first item
      if(index === 0){
        this.head = current.next;
      }else{ 
        let previous;
        for(let i = 0; i < index; i++){
          previous = current;
          current = current.next;
        }
      // link previous with current's next: skip it to remove
      previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;  
  }

  getElementAt(index){
    if(index >= 0 && index < this.count){
      let node = this.head;
      for(let i = 0; i < index && node !=  null; i++){
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  insert(element, index){
  
    if(index >= 0 && index <= this.count){
      let node = new Node(element);
      if(index === 0){
        const current = this.head;
        node.next = current;
        this.head = node;
      }else{
        const previous = this.getElementAt(index -1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  indexOf(element){
    let current = this.head;
    for(let i = 0; i < this.count && current != null; i++){
      if(this.equalsFn(element, current.element)){
        return i;
      }
    }
    return -1;
  }

  remove(element){
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size(){
    return this.count;
  }

  isEmpty(){
    return this.size() === 0;
  }

  getHead(){
    return this.head;
  }

  toString(){
    if(this.head == null){
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;

    for(let i = 0 ; i < this.count; i++){
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

class DoublyNode extends Node{
  constructor(element, next, prev){
    super(element, next);
    this.prev = prev;
  }
}

class DoublyLinkedList extends LinkedList {
 constructor(equalsFn = defaultEquals){
   super(equalsFn);
   this.tail = undefined;
 }

 insert(element, index){
   if(index >= 0 && index < this.count){
     const node = new DoublyNode(element);
     let current = this.head;
     if(index === 0){
       if(this.head == null){
         this.head = node;
         this.tail = node;
       } else{
         node.next = this.head;
         current.prev = node;
         this.head = node;
       }
     }else if (index === this.count){
       current = this.tail;
       current.next = node;
       node.prev = current;
       this.tail = node;
     }else{
       const previous = this.getElementAt(index - 1);
       current = previous.next;
       node.next = current;
       previous.next = node;
       current.prev = node;
       node.prev = previous;
       
     }
     this.count++;
     return true;
   }
   return false;
 }

 removeAt(index){
   if(index >= 0 && index < this.count){
     let current = this.head;
     if(index == 0){
       this.head = current.next;
       if(this.count === 1){
         this.tail = undefined;
       }else{
         this.head.prev =undefined;
       }
     }else if(index === this.count -1){
       current = this.tail;
       this.tail = current.prev;
       this.tail.next = undefined;
     }else{
       current = this.getElementAt(index);
       const previous = current.prev;

       previous.next = current.next;
       current.next.prev = previous;

     }
     this.count--;
     return current.element;
   }
   return undefined;
 }
}