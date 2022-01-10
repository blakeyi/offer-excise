//#region 封装一些通用的数据结构，如栈，队列等

function stack () {
    this.data = []
}

stack.prototype.push = function (element) {
    this.data.push(element)
}

stack.prototype.pop = function () {
    this.data.pop()
}

stack.prototype.clear = function () {
    this.data.length = 0
}

stack.prototype.size = function () {
    return this.data.length;
}

stack.prototype.empty = function () {
    return this.data.length == 0;
}

stack.prototype.top = function () {
    return this.data[this.data.length - 1];
}

//#endregion


//#region 剑指 Offer 09. 用两个栈实现队列
var CQueue = function () {
    this.stack1 = new stack()
    this.stack2 = new stack()
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.stack1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.stack2.empty()) {
        while (!this.stack1.empty()) {
            this.stack2.push(this.stack1.top());
            this.stack1.pop();
        }
    }
    if (!this.stack2.empty()) {
        let temp = this.stack2.top();
        this.stack2.pop();
        return temp;
    }
    return -1;
};

//#endregion
