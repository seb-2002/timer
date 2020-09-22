// take an array of arguments from the terminal
let alarmsArray = process.argv.slice(2).sort((a, b) => a - b)
// convert second to milliseconds
msArray = alarmsArray.map((seconds) => seconds*1000);
// filters out negative numbers and non-numbers
msArray = msArray.filter(alarm => alarm > 0 && Number(alarm) === alarm);

for (let alarm of msArray) {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, alarm);
}


