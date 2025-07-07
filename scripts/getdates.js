const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `Copiright © <span class="highlight">${today.getFullYear()} Misael Castro</span>`;


const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = new Date(document.lastModified);