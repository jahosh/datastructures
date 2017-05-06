class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToHead(val) {
    if (!head) {
      this.head = new Node(val);
    }
  }
}


module.exports = LinkedList;