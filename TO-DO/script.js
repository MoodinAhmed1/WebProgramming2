var List = [];

function addToDo () {
    const userInput = document.querySelector('.input').value;
    
    if(userInput == "") {
        alert('input cannot be empty');
        return;
    } else {
        const toDoList = document.querySelector('.toDoList');
    
        List.push(userInput);

        List.forEach(toDO => {
            toDoList.innerHTML += `<li>${toDO}</li>`;
        })

        userInput = "";
    }
}