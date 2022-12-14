const root = document.querySelector("#root");

const todo = await fetch("https://jsonplaceholder.typicode.com/todos");

const toDos = await todo.json();
function createIdCard(user) {
    return `
    <section>
        <h2> UserID: ${user.userId} </h2>
        <ul>
            <li> ID Number: ${user.id}<li>
            <li> Title of User: ${user.title}<li>
            <li> Task Completed: ${user.completed}<li>
        </ul>
    </section>
        `;
}

const allIdCard = toDos.map(createIdCard).join(" ");

root.innerHTML = allIdCard