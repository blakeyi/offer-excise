
//#region 剑指 Offer 09. 用两个栈实现队列
class CQueue {
    private queueIn: number[];
    private queueOut: number[];

    constructor() {
        this.queueIn = [];
        this.queueOut = [];
    }

    appendTail(value: number): void {
        this.queueIn.push(value);
    }

    deleteHead(): number {
        if (this.queueOut.length === 0) {
            while (this.queueIn.length !== 0) {
                this.queueOut.push(this.queueIn.pop());
            }
            return this.queueOut.length === 0 ? -1 : this.queueOut.pop();
        } else {
            return this.queueOut.pop();
        }
    }
}
//#endregion