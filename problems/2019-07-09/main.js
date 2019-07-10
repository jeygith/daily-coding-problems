class MaxStack {
    constructor() {
        this.stack = [];

        this.maxNum = [];
    }

    push(val) {
        if (this.maxNum.length === 0 || val >= this.maxNum[this.maxNum.length - 1]) {
            this.maxNum.push(val);
        }

        this.stack.push(val)
    }


    /* pops off topmost element in the stack and returns it */

    pop() {
        if (this.stack.length === 0 && this.maxNum.length === 0) {
            return null;
        }
        const val = this.stack.pop();


        // check if we need to pop off the element from the maxNum stack
        if (val === this.maxNum[this.maxNum.length - 1]) {
            this.maxNum.pop();
        }

        return val;
    }

    max() {
        if (this.maxNum.length === 0) {
            return null;
        }

        return this.maxNum[this.maxNum.length - 1];
    }
}

let stack = new MaxStack();
stack.push(1);
stack.push(2);

console.log("Stack before pop");
console.log(stack);


console.log("Pop: " + stack.pop());

console.log("Max Number: " + stack.max());

console.log(stack);

module.exports = MaxStack;