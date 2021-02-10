function node (value){
    this.value = value;
    this.previous = null;
    this.next = null;
}

function doubleLinkedList() {
    this.head = null;
    this.tail = null;

    this.setHead = function (node) {
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return; 
        }
        this.insertBefore(this.head, node);
    }

    this.setTail = function (node) {
        if (!this.tail) {
            this.setHead(node);
            return; 
        }
        this.insertAfter(this.tail, node);
    }
    this.containsNodeWithValue = function (value) {
        let node = this.head;
        while (node) {
            if (node.value === value) {
                return true;
            }
            node = node.next;
        }
        return false;
    }

    this.removeNodeValue = function (target) {
        let node = this.head;
        while (node) {
            let nodeToRemove = node;
            node = node.next;
            if (nodeToRemove.value === target) {
                this.remove(nodeToRemove);
            }
        }
    }

    this.remove = function (node) {
        if (this.head == node) {
            this.head = this.head.next;
        }
        if (this.tail == node) {
            this.tail = this.tail.previous;
        }
        this.removeNodeBinding(node);
    }

    this.removeNodeBinding = function (node) {
        if (node.previous){
            node.previous.next = node.next;
        } 
        if (node.next) {
            node.next.previous = node.previous;
        } 
        node.previous = null;
        node.next = null;
        delete node;
    }

    

    this.insertAtPosition = function  (position, nodeToInsert) {
        if (position === 1) {
            this.setHead(nodeToInsert);
            return;
        }
        let node = this.head;
        let currPosition = 0;
        while (node && currPosition<position) {
            node = node.next;
            currPosition += 1;
        }
        if (node)
            this.insertBefore(node, nodeToInsert);
        else 
            this.setTail(nodeToInsert);
    }

    this.insertAfter = function (node, nodeToInsert) {
        if (nodeToInsert == this.head && nodeToInsert == this.tail) {
            return;
        }
        this.remove(nodeToInsert);
        nodeToInsert.previous = node;
        nodeToInsert.next = node.next;
        if (!node.next) {
            this.tail = nodeToInsert;
        } else {
            node.next.previous = nodeToInsert;
            node.next = nodeToInsert;
        }
    }

    this.insertBefore = function (node, nodeToInsert) {
      if (nodeToInsert == this.head && nodeToInsert == this.tail) {
          return;
      }
      this.remove(nodeToInsert);
      nodeToInsert.previous = node.previous;
      nodeToInsert.next = node;
      if (!node.previous) {
          this.head = nodeToInsert;
      } else {
          node.previous.next = nodeToInsert;
          node.previous = nodeToInsert;
      }
  }
}


// let node = new node(1);
// let tail = head;

// tail = insertAtEnd(tail, 2);
// tail = insertAtEnd(tail, 3);
// tail = insertAtEnd(tail, 4);
// tail = insertAtEnd(tail, 5);
// console.log(head);

let dll = new doubleLinkedList()
let newNode = new node(1)
dll.setHead(newNode);

newNode = new node(2)
dll.tail.next = newNode;
newNode.previous = dll.tail;
dll.tail = newNode;
newNode.next = null;

newNode = new node(3)
dll.tail.next = newNode;
newNode.previous = dll.tail;
dll.tail = newNode;
newNode.next = null;

newNode = new node(4)
dll.tail.next = newNode;
newNode.previous = dll.tail;
dll.tail = newNode;
newNode.next = null;

newNode = new node(5)
dll.tail.next = newNode;
newNode.previous = dll.tail;
dll.tail = newNode;
newNode.next = null;

newNode = new node(6)
dll.tail.next = newNode;
newNode.previous = dll.tail;
dll.tail = newNode;
newNode.next = null;

newNode = new node(7)
dll.tail.next = newNode;
newNode.previous = dll.tail;
dll.tail = newNode;
newNode.next = null;

console.log(dll.head);
dll.remove(dll.head);
dll.remove(dll.tail);
console.log(dll.head);
dll.insertAfter(dll.head.next, dll.head);
console.log(dll.head);

dll.insertBefore( dll.head, dll.head.next);
 console.log(dll.head);
// console.log(dll.head.next);
dll.insertAtPosition(5, dll.head.next);
// console.log(dll.head);
// console.log(dll.head.next);
