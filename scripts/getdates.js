const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = ` ©️${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);
const modifShow = document.querySelector("#lastModif")
modifShow.innerHTML = `${oLastModif}`