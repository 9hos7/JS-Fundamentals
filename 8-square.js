const arg = process.argv[2];
const num = Number(arg);

if (!arg || isNaN(num)) {
  console.log("Missing size");
} else {
  for (let row = 0; row < num; row++) {
    let line = "";
    for (let col = 0; col < num; col++) {
      line += "X";
    }
    console.log(line);  // print one row at a time
  }
}
