class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
        let max_sq = 0;
        const set = new Set();
        for(let num of nums){
            set.add(num)
        }
        for(let s of set){
            if(!set.has(s-1)){
                let scan = 0;
                while(set.has(s+scan)){
                    scan++;
                }
                if(scan > max_sq){
                    max_sq = scan;
                }
            }
        }
        return max_sq;

    }
}
