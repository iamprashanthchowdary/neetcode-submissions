class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for(let n of tokens){
            if(n === '+'){
               let opperand1 =  Number(stack[stack.length-1])
               stack.pop()
               let opperand2 =  Number(stack[stack.length-1])
               stack.pop()
               let res = opperand2 + opperand1
               console.log(res)
               stack.push(res)
            }
            else if(n === '-'){
               let opperand1 =  Number(stack[stack.length-1])
               stack.pop()
               let opperand2 =  Number(stack[stack.length-1])
               stack.pop()
               let res = opperand2 - opperand1
               console.log(res)
               stack.push(res)
            }
            else if(n === '*'){
               let opperand1 =  Number(stack[stack.length-1])
               stack.pop()
               let opperand2 =  Number(stack[stack.length-1])
               stack.pop()
               let res = opperand2 * opperand1
               console.log(res)
               stack.push(res)
            }
            else if(n === '/'){
               let opperand1 =  Number(stack[stack.length-1])
               stack.pop()
               let opperand2 =  Number(stack[stack.length-1])
               stack.pop()
               let res = Math.trunc(opperand2 / opperand1)
               console.log(res)
               stack.push(res)
            }
            else{
                stack.push(n)
            }
        }
        return Number(stack[stack.length-1])
    }
}
