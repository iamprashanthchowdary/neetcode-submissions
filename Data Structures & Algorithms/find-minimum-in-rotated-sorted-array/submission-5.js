class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let res = nums[0];
        let e = nums.length-1;
        while( l <= e){
            if(nums[l] < nums[e]){
                res = Math.min(res, nums[l]);
                break;
            }
            let mid = Math.floor((l+e)/2);

            res = Math.min(res,nums[mid])
            if(nums[mid] >= nums[l]){
                l = mid+1;
            }
            else{
                e = mid-1
            }
        }
        return res;
    }
}
