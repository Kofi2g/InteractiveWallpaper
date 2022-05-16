const today = new Date;

const options = {
    hour: "2-digit",
    minute: "2-digit",
}
const todaysDate = today.toLocaleTimeString("en-UK", options) {
    /* <form id="form" class="addForm" action="">
                <input id="item" type="text">
                <input class="submitButton" type="submit" value="submit">
            </form> */
}

const div = document.createElement("div");
const box = document.createElement("div");
const toDoDiv = document.createElement("div");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const toDo = document.createElement("h2");
const form = document.createElement("form");
const inputText = document.createElement("input");
const inputSubmit = document.createElement("input");
const ul = document.createElement("ul");


h1.innerText = todaysDate;
toDo.innerText = "To Do List";
div.className = "date-container";
box.className = "date-box";
toDoDiv.className = "toDoDiv";
toDo.className = "toDo";

inputText.setAttribute("type", "text");
inputSubmit.setAttribute("type", "submit");

box.appendChild(h1);
box.appendChild(h2);
div.appendChild(box);

form.appendChild(inputText);
form.appendChild(inputSubmit);

form.addEventListener("submit", e => {

    e.preventDefault();
    const li = document.createElement("li");
    const inputValue = document.querySelector("input").value;
    const liText = document.createTextNode(inputValue)

    li.appendChild(liText)
    ul.appendChild(li)
    toDoDiv.appendChild(ul)
    document.body.appendChild(toDoDiv);
    form.reset();



});

document.body.appendChild(div);
document.body.appendChild(toDo);
document.body.appendChild(form);

let hour = today.getHours();

if (hour >= 12 && hour < 18) {
    h2.innerText = "Good Afternoon Kofi"
} else if (hour >= 18 && hour < 21) {
    h2.innerText = "Good Evening Kofi"
} else if (hour >= 21 && hour < 24) {
    h2.innerText = "Good Night Kofi"
} else if (hour >= 0 && hour < 6) {
    h2.innerText = "Good Night Kofi"
} else {
    h2.innerText = "Good Morning Kofi"
};