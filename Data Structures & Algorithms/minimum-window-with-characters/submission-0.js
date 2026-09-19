class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
         if (t.length > s.length) return "";

    // Count required characters from t
    const need = new Map();

    for (const char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    let left = 0;
    let right = 0;

    // Number of characters in the current window
    // that satisfy the required frequency
    let have = 0;
    const required = t.length;

    let minLength = Infinity;
    let result = "";

    const window = new Map();

    while (right < s.length) {
        const char = s[right];

        // Add character to window
        window.set(char, (window.get(char) || 0) + 1);

        // Only count it if it is needed and doesn't exceed
        // the required frequency
        if (need.has(char) && window.get(char) <= need.get(char)) {
            have++;
        }

        // Once the window contains all characters of t,
        // try shrinking it from the left
        while (have === required) {
            const currentLength = right - left + 1;

            if (currentLength < minLength) {
                minLength = currentLength;
                result = s.substring(left, right + 1);
            }

            const leftChar = s[left];

            window.set(leftChar, window.get(leftChar) - 1);

            if (
                need.has(leftChar) &&
                window.get(leftChar) < need.get(leftChar)
            ) {
                have--;
            }

            left++;
        }

        right++;
    }

    return result;
    }
}
