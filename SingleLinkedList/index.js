class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let tail = this.tail;
      tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.length == 0;
  }
  pop() {
    if (!this.head) return;
    let popped = this.tail;

    if (this.length == 1) {
      this.clear();
    } else {
      let current = this.head;
      while (current.next !== popped) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }
    this.length--;
    return popped;
  }
  shift() {
    if (!this.head) return;
    let removed = this.head;
    if (this.length == 1) {
      this.clear();
    } else {
      this.head = removed.next;
    }
    this.length--;
    return removed;
  }
  unshift(data) {
    let node = new Node(data, this.head);
    if (this.length == 0) this.tail = node;

    this.head = node;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) return null;

    if (index == 0) return this.head;
    if (index == this.length - 1) return this.tail;

    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(index, data) {
    if (!this.get(index)) {
      return false;
    }
    let node = this.get(index);
    node.data = data;
    return true;
  }
  insert(index, data) {
    if (!this.get(index)) return false;
    if (index == 0) return !!this.unshift(data);
    else if (index == this.length) this.push(data);
    else {
      let node = this.get(index);
      let prev = this.get(index - 1);
      let newNode = new Node(data, node);
      prev.next = newNode;
      this.length++;
      return true;
    }
  }
  remove(index) {
    if (!this.get(index)) return false;
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();
    let removed = this.get(index);
    let prev = this.get(index - 1);
    prev.next = prev.next.next;
    this.length--;
    return removed;
  }
  reverse() {
    if (this.length <= 1) {
      return this;
    }
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
