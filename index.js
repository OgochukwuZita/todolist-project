

const Todo = [];

const addBtn = document.getElementById("addBtn");
const textField = document.getElementById("text-input-field");
const editBtn = document.getElementById("editBtn");
const todo = document.getElementById("todos-container");



addBtn.addEventListener("click",()=>{
    if (textField.value.trim() === "") {
    alert("Please add a task!");
       
    }

})
/*addBtn.addEventListener("click",()=>{
    return(
    textField.value);
})*/

addBtn.addEventListener("click",function(){
    Todo.unshift(textField.value);
    textField.value=""
    renderTodo();
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
    Todo.splice(i,1);
    renderTodo();
}
function editItem(i){
    const newTask = prompt('Enter new task');
    Todo.splice(i,1,newTask);
    renderTodo();
}


