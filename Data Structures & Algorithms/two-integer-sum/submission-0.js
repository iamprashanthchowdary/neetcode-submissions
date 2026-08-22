class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const arr = new Array(2)
        for(let i = 0; i < nums.length-1; i++){
            for(let j=i+1; j < nums.length; j++){
                if(nums[i]+nums[j] === target){
                    arr[0] = i;
                    arr[1] = j;
                    return arr;
                }
            }
        }
    }
}
