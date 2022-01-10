package main

import "fmt"

// #region 封装常见数据结构
type Stack struct {
	data []int
}

func (c *Stack) Push(value int) {
	c.data = append(c.data, value)
}

func (c *Stack) Pop() {
	c.data = append(c.data[:len(c.data)-1])
}

func (c *Stack) Top() int {
	sLen := len(c.data)
	if sLen == 0 {
		return -1
	}
	return c.data[len(c.data)-1]
}

func (c *Stack) Size() int {
	return len(c.data)
}

func (c *Stack) Empty() bool {
	return len(c.data) == 0
}

// #endregion

//#region 剑指 Offer 09. 用两个栈实现队列
type CQueue struct {
	stack1 Stack
	stack2 Stack
}

func Constructor() CQueue {
	return CQueue{}
}

func (c *CQueue) AppendTail(value int) {
	c.stack1.Push(value)
}

func (c *CQueue) DeleteHead() int {
	if c.stack2.Empty() {
		for !c.stack1.Empty() {
			c.stack2.Push(c.stack1.Top())
			c.stack1.Pop()
		}
	}
	if !c.stack2.Empty() {
		temp := c.stack2.Top()
		c.stack2.Pop()
		return temp
	}
	return -1
}

//#endregion

func main() {
	queue := CQueue{}
	queue.AppendTail(11)
	queue.AppendTail(22)
	fmt.Println(queue.DeleteHead())
}
