const arrayme = [1, 3, 4, 5, 7, 9];

const oldArray = arrayme.map((item) => {
  return item * 2 === 10;
});

console.log(oldArray);

const soma = arrayme.reduce((total, next) => total + next);

console.log(soma);
