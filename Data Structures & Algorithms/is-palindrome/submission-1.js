class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    const rgx = /^[A-Za-z0-9]$/
    s = s.toUpperCase();
    let start = 0;
    let end = s.length-1; 
    while(end > start){
        if(!rgx.test(s[end])){
            end--;
        }
        if(!rgx.test(s[start])){
            start++;
        }
        if(rgx.test(s[end]) && rgx.test(s[start])){
            if(s[start] !== s[end]){
                return false;
            }
            end--;
            start++;
        }
       
    }
    return true;
    }
}
