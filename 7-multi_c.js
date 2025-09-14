const arg = process.argv.slice(2);
const sentence = "C is fun";

const num = Number(arg)

if (isNaN(num) || arg.length === 0) {
    console.log('Missing number of occurrences')
} else {
    for (i = 0; i < num; i++) {
        console.log(sentence)
    }
}
