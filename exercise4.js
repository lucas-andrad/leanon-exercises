const matrix = [
    ['.', '#', '#', '#', '.', '.'],
    ['.', '#', '.', '.', '#', '.'],
    ['.', '#', '#', '#', '.', '.',],
    ['.', '#', '.', '.', '.', '.',],
];

matrix.map(row => console.log(row.join(' ')));

console.log('\n');
console.log('-----------------------');
console.log('\n');

const paintFunctions = {
    next: (y, x, actualColor, color) => {
        const nextPosition = matrix[y][x + 1];
        if (nextPosition === actualColor) {
            matrix[y][x + 1] = color;
            verifyAround(y, x + 1, actualColor, color);;
        }
    },

    previous: (y, x, actualColor, color) => {
        const nextPosition = matrix[y][x - 1];
        if (nextPosition === actualColor) {
            matrix[y][x - 1] = color;
            verifyAround(y, x - 1, actualColor, color);
        }
    },

    above: (y, x, actualColor, color) => {
        const nextPosition = matrix[y - 1][x];
        if (nextPosition === actualColor) {
            matrix[y - 1][x] = color;
            verifyAround(y - 1, x, actualColor, color);
        }
    },

    below: (y, x, actualColor, color) => {
        const nextPosition = matrix[y + 1][x];
        if (nextPosition === actualColor) {
            matrix[y + 1][x] = color;
            verifyAround(y + 1, x, actualColor, color);
        }
    },
}

const verifyAround = (y, x, actualColor, color) => {
    matrix[y] && matrix[y][x + 1] && paintFunctions.next(y, x, actualColor, color);
    matrix[y] && matrix[y][x - 1] && paintFunctions.previous(y, x, actualColor, color);
    matrix[y - 1] && paintFunctions.above(y, x, actualColor, color);
    matrix[y + 1] && paintFunctions.below(y, x, actualColor, color);
};

const PaintBucket = (y, x, color) => {
    const actualColor = matrix[y][x];
    matrix[y][x] = color;
    verifyAround(y, x, actualColor, color);
};

PaintBucket(0, 1, 'o');
matrix.map(row => console.log(row.join(' ')));
