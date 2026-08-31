class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0; 
        let j = heights.length-1;
        let max =  (j-i) * Math.min(heights[i],heights[j]);
        while(i < j){
            let fill = (j-i) * Math.min(heights[i],heights[j]);
            console.log(fill)
            if(fill > max){
                max = fill;
            }
            if(heights[i] <= heights[j]){
                i++;
            }
            else{
                j--;
            }

        }
        return max;
    }
}
