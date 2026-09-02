class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for(let sym of s){
            if ( sym === '(' || sym === '[' || sym === '{'){
                stack.push(sym);
            }
            if(stack && (sym === ')' || sym === '}' || sym === ']')){
                let perfect_match = stack[stack.length-1]+sym;
                if( perfect_match == '()' || perfect_match == '[]' || perfect_match == '{}'){
                    stack.pop();
                }
                else{
                    return false;
                }
            }
        }
        if(stack.length > 0){
            return false;
        }
        return true;
    }
}
