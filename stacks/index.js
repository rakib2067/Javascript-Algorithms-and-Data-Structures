class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }
  push(data) {
    let node = new Node(data);
    if (this.size == 0) {
      this.last = node;
      this.first = node;
    } else {
      let temp = this.first;
      node.next = temp;
      this.first = node;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let first = this.first;
    if (this.size == 1) {
      this.last = null;
    } else {
      this.first = first.next;
      first.next = null;
    }
    this.size--;
    return first.data;
  }
}
