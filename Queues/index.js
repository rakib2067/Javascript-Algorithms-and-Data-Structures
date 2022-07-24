class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    let node = new Node(data);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    let removed = this.first;
    if (this.size == 1) {
      this.last = null;
    }
    this.first = removed.next;
    removed.next = null;
    this.size--;
    return removed.value;
  }
}
