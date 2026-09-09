class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let i=0; i < matrix.length; i++){
            let start = 0;
            let end = matrix[i].length-1;
            while(start <= end){
                let mid = Math.floor((start+end)/2)
                if(matrix[i][mid] === target){
                    return true;
                }
                else if(matrix[i][mid] > target){
                    end = mid-1;
                }
                else{
                    start = mid+1;
                }
            }
        } 
        return false;
    }
}
