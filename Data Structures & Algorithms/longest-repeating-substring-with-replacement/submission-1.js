class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    const count = {};
    let left = 0;
    let maxFreq = 0;
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        count[char] = (count[char] || 0) + 1;

        maxFreq = Math.max(maxFreq, count[char]);

        // Number of characters we need to replace
        while ((right - left + 1) - maxFreq > k) {
            count[s[left]]--;
            left++;
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
}
}
