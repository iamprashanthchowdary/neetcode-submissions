class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const secrate = 'mysecrate';
        return strs.length > 0 ? strs.join(secrate) : 'nodata'
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const secrate = 'mysecrate';
        return str !== 'nodata' ? str.split(secrate) : [];

    }
}
