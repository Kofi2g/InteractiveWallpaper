
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
const img = document.querySelector("img")
const gridContainer = document.createElement("div")

const today = new Date;
const options = {
    hour: "2-digit",
    minute: "2-digit",
    // second: "numeric"
}

h1.innerText = today.toLocaleTimeString("en-UK", options);
setInterval(() => {
    const today = new Date;
    h1.innerText = today.toLocaleTimeString("en-UK", options);
}, 60000)

toDo.innerText = "To Do List";
div.className = "date-container";
box.className = "date-box";
toDoDiv.className = "toDoDiv";
toDo.className = "toDo";
gridContainer.className = "grid-container"


inputText.autofocus = true
inputText.setAttribute("type", "text");
inputText.setAttribute("placeholder", "Whats the move?");
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
    gridContainer.appendChild(toDoDiv);
    form.reset();
 
});

document.body.appendChild(div);
document.body.appendChild(toDo);
// TO DO LIST NOT DISPLAYED
toDo.style.display = "none"
document.body.appendChild(gridContainer);
gridContainer.appendChild(form);


let hour = today.getHours();

   

function checkHours() {
    
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
    }

}
checkHours()

const units = "metric"
const key = "8a17353366f90cc63c75f2704f902965"
// Please dont abuse im testing 
const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=${units}&appid=${key}`

const getWeather = async () => {
    const response = await fetch(url)

   const data = await response.json()
   return data;
}

getWeather().then((data) => {
    const weatherContainer = document.createElement("div")
    const weatherTextContainer = document.createElement("div")
    weatherContainer.className = "weather-container";
    weatherTextContainer.className = "weather-text-container"
    const temperature = `${data.main.temp}°`;
    const weatherDescription = data.weather[0].description;
    const icon = data.weather[0].icon;
    const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
    const logo = document.querySelector("img")
    let imageUrl = imageURL
    logo.setAttribute("src", imageUrl)
    


    const paraArray = [temperature , weatherDescription]
    paraArray.forEach((pg) => {

        let p = document.createElement("p")
        p.innerText = pg
        weatherTextContainer.appendChild(p)
        weatherTextContainer.appendChild(img)
        weatherContainer.appendChild(weatherTextContainer)

        gridContainer.appendChild(weatherContainer)
        
        
    })
    
})

