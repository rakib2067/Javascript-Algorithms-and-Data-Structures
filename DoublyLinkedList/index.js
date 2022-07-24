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
      this.head = null;
      this.tail = null;
    } else {
      let newTail = popped.prev;
      newTail.next = null;
      popped.prev = null;
      this.tail = newTail;
    }
    this.length--;
    return popped;
  }
  shift() {
    if (this.length == 0) return undefined;
    let removed = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = removed.next;
      newHead.prev = null;
      removed.next = null;
      this.head = newHead;
    }
    this.length--;
    return removed;
  }
  unshift(data) {
    if (!this.head) return this.push(data);
    let newNode = new Node(data);
    let oldHead = this.head;
    newNode.next = oldHead;
    oldHead.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;
    let mid = this.length / 2;
    if (index <= mid) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, data) {
    if (!this.get(index)) return false;
    let node = this.get(index);
    node.data = data;
    return true;
  }
  insert(index, data) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return !!this.unshift(data);
    if (index == this.length) return !!this.push(data);

    let newNode = new Node(data);
    let prevNode = this.get(index);

    newNode.next = prevNode;
    newNode.prev = prevNode.prev;

    prevNode.prev.next = newNode;
    prevNode.prev = newNode;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();

    let toRemove = this.get(index);
    let next = toRemove.next;
    let before = toRemove.prev;
    before.next = next;
    next.prev = before;

    toRemove.next = null;
    toRemove.prev = null;

    this.length--;
    return toRemove;
  }
}

let list = new DoublyLinkedList();

list.push("first");
list.push("second");
list.push("third");

list.pop();
