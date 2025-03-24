const navButton = document.querySelector("#menu");
const navigation = document.querySelector("#navBar")

navButton.addEventListener("click",() =>{
    navigation.classList.toggle("open");
    navButton.classList.toggle("open");
});