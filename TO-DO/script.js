var List = JSON.parse(localStorage.getItem('list')) || [];

function addToDo () {
    const userInput = document.querySelector('.input').value;
    
    if(userInput == "") {
        alert('input cannot be empty');
        return;
    }    

    List.push(userInput);
    localStorage.setItem('list', JSON.stringify(List));

    renderList();
    document.querySelector('.input').value = "";
}

function renderList() {
    const toDoList = document.querySelector('.toDoList');

    toDoList.innerHTML = `
                <tr>
                    <th>Tasks</th>
                    <th>Action</th>
                </tr>
            `;

        List.forEach((toDO, index) => {
            const row = document.createElement('tr');

            //create task cell;
            const taskCell = document.createElement('td');
            taskCell.textContent = toDO;
            row.appendChild(taskCell);

            //create action cell;
            const actionCell = document.createElement('td');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "delete";
            deleteBtn.addEventListener('click',() => removeToDo(index));
            actionCell.appendChild(deleteBtn);
            row.appendChild(actionCell);

            //Append the row to the table
            toDoList.appendChild(row);
        });
}

function removeToDo(index) {
    List.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(List));
    renderList();
}

document.addEventListener('DOMContentLoaded', renderList)