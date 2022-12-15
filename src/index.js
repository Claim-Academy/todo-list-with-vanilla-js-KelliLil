const root = document.querySelector("#root");

const resp =await fetch("https://jsonplaceholder.typicode.com/todos");

const toDos = await resp.json();

function createIdCard(user) {
    return `
    <section class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-9 ">
    <h2> UserID: ${user.userId} </h2>
    <ul>
        <li> ID Number: ${user.id}<li>
        <li> Title of User: ${user.title}<li>
        <li> Task Completes: ${user.completed}<li>
    </ul>
</section>
`;
}


const allIdCard = toDos.map(createIdCard).join(" ");

 root.innerHTML = allIdCard