const root = document.querySelector("#root");

const todo = await fetch("https://jsonplaceholder.typicode.com/todos");

const toDos = await todo.json();