const first = process.argv[2];
const second = process.argv[3];

function addNumbers(x, y) {
    return x + y;
}

console.log(addNumbers(parseInt(first, 10), parseInt(second, 10)));