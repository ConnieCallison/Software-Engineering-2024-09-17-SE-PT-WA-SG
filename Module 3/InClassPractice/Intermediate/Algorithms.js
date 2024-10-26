const obj = {
    one: 1,
    two: 2,
};

console.log(obj.one); // O(1)

const arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} // O(n) n stands for the length of the array

const mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];
for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
        console.log(mat[i][j]);
    }
} // O(n^2) n stands for the row and column assuming row and column are the same