const usuario = {
  nome: "João",
  idade: 24,
  endereco: {
    cidade: "Franco da Rocha",
    estado: "SP"
  },
}

const {nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

