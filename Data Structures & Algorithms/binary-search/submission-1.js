class Solution {
    search(nums, target) {
        return this.binarySearch(nums, target, 0, nums.length - 1);
    }

    binarySearch(nums, target, left, right) {
        if (left > right) {
            return -1;
        }

        const mid = Math.trunc((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] > target) {
            return this.binarySearch(nums, target, left, mid - 1);
        }

        return this.binarySearch(nums, target, mid + 1, right);
    }
}