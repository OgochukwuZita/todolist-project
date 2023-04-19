

const Todo = localStorage.getItem('todoz')? JSON.parse(localStorage.getItem('todoz')):[];

const addBtn = document.getElementById("addBtn");
const textField = document.getElementById("text-input-field");
const editBtn = document.getElementById("editBtn");
const todo = document.getElementById("todos-container");



addBtn.addEventListener("click",function(){
    if (textField.value.trim() ==='') {
        alert("Please add a task!");
       
    } else{
    Todo.unshift(textField.value);
    localStorage.setItem('todoz',JSON.stringify(Todo));
    textField.value=""
    renderTodo();
}
}
)

function renderTodo(){
    todo.innerHTML="";
    Todo.forEach(function(n,i){
    todo.innerHTML +="<li>"+n+"<a onclick='editItem("+i+")'>Edit</a> <a onclick='delteItem("+i+")'>&times;</a></li>"
    }
    );
}

function delteItem(i){
    localStorage.removeItem('todoz');
    Todo.splice(i,1);
    renderTodo();
}
function editItem(i){
    const newTask = prompt('Enter new task');
    Todo.splice(i,1,newTask);
    renderTodo();
}


