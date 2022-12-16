const root = document.querySelector("#root");


function createToDoLI(todo) {
    return `
    <section class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-9 ">
    <h2> UserID: ${todo.userId} </h2>
    <ul>
        <li> ID Number: ${todo.id}<li>
        <li> Title of User: ${todo.title}<li>
        <li> Task Completes: ${todo.completed}<li>
    </ul>
</section>
`;
}
const resp =await fetch("https://jsonplaceholder.typicode.com/todos");

const toDos = await resp.json();

root.classList.add("flex", "flex-col", "gap-y-8", "items-center")


const todoLIs = toDos.map(createToDoLI).join();

 root.innerHTML = `
 <div class="shadow-lg p-1 mx-auto">
    <label for="completed">Show Completed</label>
    <input type="checkbox" id="completed"/>
 </div>
 <main class = "items-center grid grid-cols-4 gap-2">
${todoLIs}
 </main>`

 function filterByComplete(todoList) {

    return todoList.filter((task) => task.completed)
 }

 const checkbox = document.querySelector("input")

checkbox.addEventListener("change", () => {
    console.log(filterByComplete(toDos))
})

