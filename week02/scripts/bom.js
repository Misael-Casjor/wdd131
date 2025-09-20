const input = document.getElementById("favchap");
const button = document.getElementById("button");
const list = document.getElementById("list");






button.addEventListener('click', function() {

    const item = document.createElement('li');
    const deleteButton = document.createElement('button');
    item.innerHTML = input.value;
    deleteButton.textContent = "❌";
    deleteButton.addEventListener('click', function(){
    list.removeChild(item);
    input.focus();
    });

    if(input.value.trim() !== ""){
      item.textContent = input.value.trim();
      list.appendChild(item);

      item.appendChild(deleteButton);
      input.value = "";
    }
    else if(input.value.trim() == ""){
       input.focus(); 
    }
});

