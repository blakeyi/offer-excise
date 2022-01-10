
# region 封装常见数据结构
class Stack(object):

    def __init__(self):
        self.stack = []

    def push(self, data: int):
        self.stack.append(data)

    def pop(self):
        return self.stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def size(self) -> int:
        return len(self.stack)

    def empty(self) -> bool:
        return len(self.stack) == 0

# endregion


# region 剑指 Offer 09. 用两个栈实现队列
class CQueue:

    def __init__(self):
        self.stack1 = Stack()
        self.stack2 = Stack()

    def appendTail(self, value: int) -> None:
        self.stack1.push(value)

    def deleteHead(self) -> int:
        if self.stack2.empty():
            while not self.stack1.empty():
                self.stack2.push(self.stack1.top())
                self.stack1.pop()
        if not self.stack2.empty():
            temp = self.stack2.top()
            self.stack2.pop()
            return temp

        return -1

# endregion


queue = CQueue()
queue.appendTail(1)
queue.appendTail(2)
print(queue.deleteHead())
