const root = document.querySelector("#root");

let letters = "";

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

root.classList.add("flex", "flex-col", "gap-y-8", "items-center")


const allIdCard = toDos.map(createIdCard).join(" ");

 root.innerHTML = `
 <div class="shadow-lg p-1 mx-auto">
    <label for="search" class="sr-only">Search</label>
    <input type="search" id="search" placeholder="Search" />
 </div>
 <main class = "items-center grid grid-cols-4 gap-2">
${allIdCard}
 </main>`

 function filterByComplete(idList, searchComplete) {
    return idList.filter((task) => task.completed.includes(searchComplete))
 }

 const search = document.querySelector("input")
search.addEventListener("keydown" , (event) => {
letters += event.key;
const filterId = filterByComplete (people,letters)

console.log(filterId)
