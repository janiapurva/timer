let input = process.argv.slice(2).sort();


for (const element of input) {
  if (element > 0  && isNaN(element) === false) {
    setTimeout(() => {
      process.stdout.write('\x07');
    },element * 1000);
  }
}

















