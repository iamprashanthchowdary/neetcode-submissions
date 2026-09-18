class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);

        // Count characters in s1
        for (const ch of s1) {
            count1[ch.charCodeAt(0) - 97]++;
        }

        // First window of s2
        for (let i = 0; i < s1.length; i++) {
            count2[s2.charCodeAt(i) - 97]++;
        }

        // Compare the two arrays
        if (this.isSame(count1, count2)) {
            return true;
        }

        // Slide the window
        for (let right = s1.length; right < s2.length; right++) {
            // Add right character
            count2[s2.charCodeAt(right) - 97]++;

            // Remove left character
            const left = right - s1.length;
            count2[s2.charCodeAt(left) - 97]--;

            if (this.isSame(count1, count2)) {
                return true;
            }
        }

        return false;
    }

    isSame(a, b) {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }

        return true;
    }
}