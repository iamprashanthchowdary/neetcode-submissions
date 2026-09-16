class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 1;
        let substring = s[l] || "";
        let max_len = substring.length;

        while(r < s.length){
            while (substring.includes(s[r])) {
                substring = substring.slice(1);
                l++;
            }
            substring += s[r];
            max_len = Math.max(substring.length, max_len);
            r++;
        }
        return max_len;
    }
}

