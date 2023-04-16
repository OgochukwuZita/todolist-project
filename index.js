

let Todo = [];

const addBtn = document.getElementById("addBtn");
const textField = document.getElementById("text-input-field");
const editBtn = document.getElementById("editBtn")
const todo = document.getElementsByClassName("todos-container")

addBtn.addEventListener("click",()=>{
    if (textField.value.trim() === "") {
        return(
            alert("Please add a task!")
        );
    }

})
addBtn.addEventListener("click",()=>{
    return(
    textField.value = "");
    
})




