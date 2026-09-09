class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = matrix.length;
        let col = matrix[0].length;

        let top_row = 0;
        let bottom_row = row-1;

       while (top_row <= bottom_row) {
        row = Math.floor((top_row + bottom_row) / 2);

        if (target > matrix[row][col - 1]) {
            top_row = row + 1;
        } 
        else if (target < matrix[row][0]) {
            bottom_row = row - 1;
        } 
        else {
            break;
        }
       }
        if (top_row > bottom_row){
            return false;
        }
        row = Math.floor((top_row+bottom_row)/2);
        let l = 0;
        let r = col-1;
        while( l <= r){
            let mid = Math.floor((l+r)/2)
            if(target > matrix[row][mid]){
                l = mid+1;
            }
            else if(target < matrix[row][mid]){
                r = mid-1;
            }
            else{
                return true;
            }
        }
        return false ;
    }
}