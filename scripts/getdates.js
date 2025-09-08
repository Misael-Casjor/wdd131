const dates = document.querySelector("#currentyear")
const today = new Date()
dates.innerHTML = `© <span class="highlight">${today.getFullYear()}</span> Misael Castro`;