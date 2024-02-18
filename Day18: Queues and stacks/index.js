// Day18: Queues and stacks

function Solution() {
    this.stack = [];
    this.queue = [];

    this.pushCharacter = function (ch) {
        this.stack.push(ch)
    }

    this.enqueueCharacter = function (ch) {
        this.queue.push(ch)
    }

    this.popCharacter = function () {
        return this.stack.pop()
    }

    this.dequeueCharacter = function () {
        return this.queue.shift();
    }
}
