function range(start, end, step) {
  let output = [];
  if (start === null || end === null || step === null || end < start || step < 0){
    output = [];
  } else {
    for (let i = start; i <= end; i += step){
      output.push(i);
    }
  }
  return output;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));