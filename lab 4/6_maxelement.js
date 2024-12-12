
const max = (matrix) => {
    let max = -Infinity;
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] > max) {
                max = matrix[i][j];
            }
        }
    }
    return max;
}

const m = max([[1, 2, 3, 6], [4, 5, 6, 1], [7, 8, 4, 4]]);
console.log(m);