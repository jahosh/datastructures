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
    if (this.head) {

      let node = new Node(val);
      let temp = this.head;
      node.next = temp;
      this.head = node;

    } else {

      this.head = new Node(val);
      
    }
  }

  addToTail(val) {

    let node = new Node(val);
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
    this.tail = current.next;
  }

  returnAllValues() {

    const values = [];
    let current = this.head;
    while (current) {
      values.push(current);
      current = current.next;
    }
    return values;
  }

  size() {

    let count = 0;
    let current = this.head;
    while (current) {
      current = current.next;
      count++;
    }
    return count;
  }

  detectCycle() {

    let p1 = this.head;
    let p2 = this.head;

    while (p1 && p2 && p2.next) {
      p1 = p1.next;
      p2 = p2.next.next;
      
      if (p1 === p2) {
        return true;
      }
    }
    return false;
  }

}

// const ll = new LinkedList();
// ll.addToHead(10);
// ll.addToHead(20);
// ll.addToHead(30);
// ll.addToHead(35);
// ll.addToTail(10);
// ll.addToTail(252);

module.exports = LinkedList;