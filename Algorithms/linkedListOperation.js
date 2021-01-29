function node (value){
    this.value = value;
    this.previous = null;
    this.next = null;
}

function doubleLinkedList() {
    this.head = null;
    this.tail = null;

    function setHead(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return; 
        }
        this.insertBefore(this.head, node);
    }

    function setTail(node) {
        if (this.tail === null) {
            this.setHead(node);
            return; 
        }
        this.insertAfter(this.tail, node);
    }
    function containsNodeWithValue(value) {
        let node = this.head;
        while (node) {
            if (node.value === value) {
                return true;
            }
            node = node.next;
        }
        return false;
    }

    function removeNodeValue(target) {
        let node = this.head;
        while (node) {
            let nodeToRemove = node;
            node = node.next;
            if (nodeToRemove.value === target) {
                this.remove(nodeToRemove);
            }
        }
    }

    function remove(node) {
        if (this.head == node) {
            this.head = this.head.next;
        }
        if (this.tail == node) {
            this.tail = this.node.previous;
        }
        this.removeNodeBinding(node);
    }

    function removeNodeBinding(node) {
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

    function insertBefore(node, nodeToInsert) {
        if (nodeToInsert == this.head && nodeToInsert == this.tail) {
            return;
        }
        this.remove(nodeToInsert);
        nodeToInsert.previous = node.previous;
        nodeToInsert.next = node.next;
        if (node.previous === null) {
            this.head = nodeToInsert;
        } else {
            node.previous.next = nodeToInsert;
            node.previous = nodeToInsert;
        }
    }

    function insertAtPosition (position, nodeToInsert) {
        if (position === 1) {
            this.setHead(nodeToInsert);
            return;
        }
        let node = this.head;
        let currPosition = 0;
        while (node !== null && currPosition<position) {
            node = node.next;
            currPosition += 1;
        }
        if (node !== null)
            this.insertBefore(node, nodeToInsert);
        else 
            this.setTail(nodeToInsert);
    }

    function insertAfter(node, nodeToInsert) {
        if (nodeToInsert == this.head && nodeToInsert == this.tail) {
            return;
        }
        this.remove(nodeToInsert);
        nodeToInsert.previous = node;
        nodeToInsert.next = node.next;
        if (node.next === null) {
            this.tail = nodeToInsert;
        } else {
            node.next.previous = nodeToInsert;
            node.next = nodeToInsert;
        }
    }
}



function insertAtEnd (tail, value) {
    let tempNode = new node(value);
    if (tail) {
        tail.next = tempNode;
        tempNode.prev = tail;
    }
    tail = tempNode;
    return tail;
}

function insertAtPosition (head, value, position) {
    let tempNode = new node(value);
    let prev = null;
    for (let i = 0; i < position; i++) {
        prev = head;
        head = head.next;
    }
    if (head && prev) {
        head.prev = tempNode;
        tempNode.next = head;
        prev.next = tempNode;
        tempNode.prev = prev;
    } if (head) {
        insertAtStart (head, value);
    } else {
        insertAtEnd (head, value);
    }   

}

function search(head, target) {
    while (head) {
        if (head.value === target) {
            return true;
        }
        head = head.next;
    }
    return false;
}




let head = new node(1);
let tail = head;
tail = insertAtEnd(tail, 2);
tail = insertAtEnd(tail, 3);
tail = insertAtEnd(tail, 4);
tail = insertAtEnd(tail, 5);
console.log(head);


