class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const set = new Set();
        //rows
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (set.has(board[i][j])) {
                    return false;
                }
                if (board[i][j] !== ".") {
                    set.add(board[i][j])
                }
            }
            set.clear();
        }
        //col
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (set.has(board[j][i])) {
                    return false;
                }
                if (board[j][i] !== ".") {
                    set.add(board[j][i])
                }
            }
            set.clear();
        }
       
       const arr = [0,0,0,0,0,0,0,0,0];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // let inc = 0;
            
                for (let child_i = i * 3; child_i < (i * 3) + 3; child_i++) {
                    for (let child_j = j * 3; child_j < (j * 3) + 3; child_j++) {
                        // arr[inc] = board[child_i][child_j];
                        // inc++;
                        if (set.has(board[child_i][child_j])) {
                            return false;
                        }
                        if (board[child_i][child_j] !== ".") {
                            set.add(board[child_i][child_j])
                        }
                    }
                }
                set.clear()
                // console.log("__________________________________________")
                // console.log(arr)
                // arr.fill(0);
            }
        }

        return true;

    }
}
