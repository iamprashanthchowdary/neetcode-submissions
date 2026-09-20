class Solution {

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const deque = []; // stores indices
        const result = [];
        let left = 0;

        for (let right = 0; right < nums.length; right++) {

            // Remove indices whose values are smaller than nums[right]
            while (
                deque.length &&
                nums[deque[deque.length - 1]] <= nums[right]
            ) {
                deque.pop();
            }

            // Add current index
            deque.push(right);

            // Remove indices outside the window
            if (deque[0] < left) {
                deque.shift();
            }

            // Once we have a complete window
            if (right - left + 1 === k) {
                result.push(nums[deque[0]]);
                left++;
            }
        }

        return result;
    }
}