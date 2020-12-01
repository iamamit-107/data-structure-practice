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
}

const node = new Node(5);
const list = new LinkedList();
list.head = node;
list.insertFirst(10);
list.insertFirst(15);
list.insertFirst(20);

console.log(list);
console.log(list.size());
console.log(list.getFirst());
console.log(list.getLast());
list.clear();
console.log(list.size());
