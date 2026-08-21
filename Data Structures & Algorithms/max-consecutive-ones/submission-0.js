class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCons = 0;
        let counter = 0;
        for(let num of nums){
            if(num !== 1){
                counter = 0;
            }else{
                counter++;
                if (counter > maxCons){
                    maxCons = counter;
                };
            }
        }
        return maxCons;
    }
}
