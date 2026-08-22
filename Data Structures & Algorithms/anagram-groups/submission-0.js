class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(let str of strs){
            let check_str = str.split('').sort().join('');
            if(!map.has(check_str)){
                map.set(check_str,[]);
            }
            map.get(check_str).push(str);
        }

        return [...map.values()];

    }
}