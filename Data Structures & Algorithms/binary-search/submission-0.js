class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let s = 0;
        let e = nums.length-1;
        while(s <= e){
            let mid = Math.trunc((s+e)/2);
            console.log(mid)
            if(nums[mid] === target){
                return mid;
            }
            else if(nums[mid] > target){
                e = mid-1;
            }
            else{
                s = mid+1
            }
        }
        return -1;
    }
}
