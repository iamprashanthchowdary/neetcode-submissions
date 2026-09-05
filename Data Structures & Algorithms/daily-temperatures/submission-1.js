class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
         let stack = [];

    let res = new Array(temperatures.length).fill(0);

    for (let i = temperatures.length - 1; i >= 0; i--) {

        while (
            stack.length > 0 &&
            stack[stack.length - 1].temp <= temperatures[i]
        ) {
            stack.pop();
        }

        if (stack.length > 0) {
            res[i] = stack[stack.length - 1].index - i;
        }

        stack.push({
            temp: temperatures[i],
            index: i
        });
    }

    return res;
    } 
}
