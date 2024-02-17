// Day 15: Linked List

this.insert = function (head, data) {
    //complete this method
    let node = new Node(data);
    let current = head;

    if (!head) {
        return node;
    } else {
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    return head;
};

