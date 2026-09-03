class MinStack {
    constructor() {
        this.item = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.item.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.item.pop();
    }
       
    /**
     * @return {number}
     */
    top() {
        return this.item[this.item.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.item)
    }
}
