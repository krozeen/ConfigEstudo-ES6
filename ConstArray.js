const obj = {
  name: "Lucas",
  idade: 18,
  Sexo: 'M',
  estudando: true
}

obj.name = "Joao";
obj.idade = 24;
obj.estudando = false;

console.log(obj);

const arr = [1, 3, 4, 5, 7, 9];

const newArray = arr.map(function(item){
  return item * 2;
});

console.log(newArray);

const sum = arr.reduce(function(total, next){
  return total + next;
});

console.log(sum);

const filter = arr.filter(function(item){
  return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
  return item === 9;
});

console.log(find);