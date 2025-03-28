var List = JSON.parse(localStorage.getItem('list')) || [];

function addToDo () {
    const userInput = document.querySelector('.input').value;
    
    if(userInput == "") {
        alert('input cannot be empty');
        return;
    } else {    
        List.push(userInput);
        localStorage.setItem('list', JSON.stringify(List));

        renderList();
        document.querySelector('.input').value = "";
    }
}
function renderList() {
    const toDoList = document.querySelector('.toDoList');

    toDoList.innerHTML = "";

        List.forEach(toDO => {
            toDoList.innerHTML += `<li>${toDO}</li>`;
        })
}

document.addEventListener('DOMContentLoaded', renderList)