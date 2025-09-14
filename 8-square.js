const arg = process.argv[2];
const letter = 'X';
const num = Number(arg);

if (isNaN(num) || arg.length === 0) {
    console.log('Missing size')
} else {
    for (i = 0; i < num; i++) {
        process.stdout.write(letter)
    }
}