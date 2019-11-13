class List {
  constructor(){
    this.data = [];
  }

  add(data){
    this.data.push(data);
    console.log(this.data);
  }
}

class MyHClass extends List{

}

class TodoList {
  constructor(){
    this.todos = []
  }

  addTodo(){
    this.todos.push('Novo todo');
    console.log(this.todos);  
  }
}

const MinhaLista = new TodoList();
const MinhaHeranca = new MyHClass();

// document.getElementById('novotodo', onclick = function(){
//   MinhaLista.addTodo();
// })

document.getElementById('novotodo', onclick = function(){
  MinhaHeranca.add('Minha Herança');
})