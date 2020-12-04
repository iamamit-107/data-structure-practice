class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        let node = new Node(data, this.head);
        this.head = node;
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }

            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        let node = this.head;
        this.head = node.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node.next) {
            previous = node;
            node = node.next;
        }

        previous.next = null;
    }

    insertLast(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
    }

    getAt(index) {
        if (!this.head) {
            return null;
        }

        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }

        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return null;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        let previous = this.getAt(index - 1) || this.getLast();
        let node = new Node(data, previous.next);
        previous.next = node;
    }
}

const node = new Node(5);
const list = new LinkedList();
list.head = node;
list.insertFirst(10);
list.insertLast(0);
// list.removeLast();
console.log(list.getFirst());
console.log(list.size());
console.log(list.getAt(10));
// list.removeFirst();

// console.log(list.size());
// console.log(list.getFirst());
// console.log(list.getLast());
//list.clear();
// console.log(list.size());
