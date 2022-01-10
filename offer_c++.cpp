#include <iostream>
#include <stack>
using namespace std;

#pragma region // 剑指 Offer 09. 用两个栈实现队列
// stack1用来插入， 当删除的时候启动stack2，
// 如果stack2为空，则将stack1中元素全部插入到stack2
// 这样stack2的元素顺序就是要删除的元素顺序，直接删除栈顶元素即可

class CQueue
{
public:
    CQueue()
    {
    }

    void appendTail(int value)
    {
        stack1.push(value);
    }

    int deleteHead()
    {
        if (stack2.empty())
        {
            while (!stack1.empty())
            {
                stack2.push(stack1.top());
                stack1.pop();
            }
        }
        if (!stack2.empty())
        {
            int temp = stack2.top();
            stack2.pop();
            return temp;
        }
        return -1;
    }

private:
    stack<int> stack1, stack2;
};
#pragma endregion

int main()
{
    CQueue queue;
}