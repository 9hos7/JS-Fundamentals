const arg1 = Number(process.argv[2]);
const arg2 = Number(process.argv[3]);

function add (num1, num2) {
    return num1 + num2
}

console.log(add(arg1, arg2))