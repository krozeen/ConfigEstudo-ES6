function multy(a = 3, b = 5){
  return a * b;
}

const divide = (a = 3, b = 5) => a / b;

console.log(divide());
console.log(divide(5, 2));

console.log(multy(1, 3));
console.log(multy());