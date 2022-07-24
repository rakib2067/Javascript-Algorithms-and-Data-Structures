class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    let node = new Node(data);
    if (this.length == 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length == 0) return undefined;
    let popped = this.tail;
    if (this.length == 1) {
      this.clear();
    } else {
      let newTail = popped.prev;
      newTail.next = null;
      this.tail = newTail;
    }
    this.length--;
    return popped;
  }
  shift() {
    if (this.length == 0) return undefined;
    let removed = this.head;
    if (this.length == 1) this.clear();
    else {
      let newHead = removed.next;
      newHead.prev = null;
      this.head = newHead;
    }
    this.length--;
    return removed;
  }
}

let list = new DoublyLinkedList();

list.push("first");
list.push("second");
list.push("third");

list.pop();
