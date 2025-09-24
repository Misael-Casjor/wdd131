const dates = document.querySelector("#currentyear")
const lastChange = document.querySelector("#lastModified")
const today = new Date()
dates.innerHTML = `© <span class="highlight">${today.getFullYear()}</span> Misael Castro`;

let oLastModif = new Date(document.lastModified);
lastChange.innerHTML = `Last Modified: <span class="highlight">${oLastModif}</span>`

const menuButton = document.querySelector("#menu")
const nav = document.querySelector("#navList")
const title = document.querySelector("#title")

menuButton.addEventListener("click", () =>{
   menuButton.classList.toggle("open");
   nav.classList.toggle("open")
   title.classList.toggle("open")
})