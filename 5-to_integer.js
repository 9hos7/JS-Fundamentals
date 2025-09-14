const arg = process.argv[2];

const result = parseInt(arg, 10);

if (isNaN(result)) {
    console.log('Not a number')
} else {
    console.log(`My number: ${result}`)
}

