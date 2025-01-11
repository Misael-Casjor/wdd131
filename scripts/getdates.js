const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `© <span class="highlight">${today.getFullYear()}</span> Misael Castro`;