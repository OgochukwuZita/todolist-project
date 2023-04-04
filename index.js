let textInputField = document.querySelector('#text-input-field');
let addButton = document.querySelector('#addBtn');
let todosContainer = document.querySelector('#todos-container');

addButton.addEventListener("click", ()=>{
    if (textInputField.value.trim().length == '') {
        return;

        textInputField.value = '';


    }else if (textInputField.value === "") {
       alert("Please add a new task!"); 
    }  
    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');
    todosContainer.appendChild(todoItemContainer);

    const todoText = document.createElement('p');
    todoText.id = 'todo-text';
    todoText.innerText = textInputField.value;
    todoItemContainer.appendChild(todoText);

    todoText.addEventListener('dblclick', ()=>{
        todoText.classList.add('line-through');
        editButton.setAttribute('enabled','enabled');
    })

    const editButton = document.createElement('button');
    editButton.id = 'edit';
    editButton.innerText = 'Edit';
    todoItemContainer.appendChild(editButton);

    editButton.addEventListener('click',()=>{
        textInputField.value = todoText.innerText;
        const parent = editButton.parentElement;
        parent.parentElement.removeChild(parent);
    })

    const deleteButton = document.createElement('button');
    editButton.id = 'delete';
    editButton.innerText = 'Delete';
    todoItemContainer.appendChild(deleteButton);

    deleteButton.addEventListener('click',()=>{
        const parent = deleteButton.parentElement;
        parent.parentElement.removeChild(parent);
    });
    
    })
 

