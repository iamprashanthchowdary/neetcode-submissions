class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let newArray = new Array();
        let stack = []
        for(let i = 0; i <= position.length-1; i++){
            newArray.push({pos:position[i], speed:speed[i]});
        }
        newArray.sort((a, b)=> b.pos - a.pos)
        for(let i = 0; i <= position.length-1; i++){
           let time = (target - newArray[i].pos) / newArray[i].speed;;
           if (stack.length === 0 || time > stack[stack.length - 1]) {
                 stack.push(time);
            }
        }
        return stack.length;
    }
}
