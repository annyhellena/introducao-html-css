function addTask(){
    const taskInput = document.getElementById("taskinput");
    const taskText = taskInput.value.trim();


    if (taskText === ""){
        alert("Por favor, digite uma tarefa...")
        return;
    }

    const li = document.createElement("li")
    li.content = taskText;
}
const li = document.createElement("li")
li.content = taskText;
 
li.addEventListener("click", function(){
    li.classList.toggle("completed")
})

const removebutton = document.createElement('button')
removebutton.addEventListener("click", function(e){
    e.stopPropagation();
    li.remove();
});

li.appendChild(removebutton);

const tasklist = document.getElementById('tasklist');
taskInput.appendChild(li);


taskInput.value = "";














