const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `© <span class="highlight">${today.getFullYear()}</span> Misael Castro`;

const lastModified = document.querySelector("#lastModified")
let nLastModif = new Date(document.lastModified);
lastModified.innerHTML = `Last Modified: <span class="highlight">${nLastModif}</span>`