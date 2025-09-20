const input = document.getElementById("#favchap");
const button = document.getElementById("button");
const list = document.getElementById("#list");

const item = document.createElement('li');
const deleteButton =  document.createElement('button');

item.innerHTML = input.value;
deleteButton.textContent = "❌";

item.appendChild(deleteButton);

list.appendChild(item);
