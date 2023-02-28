let newTaskInput = document.querySelector(".new-task-input");
let taskList = document.querySelector(".task-list");
let newTaskSsubmit = document.querySelector(".new-task-submit");
let editbtn, delbtn;
newTaskSsubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (newTaskInput.value.length) {
    let task = document.createElement("div");
    let content = document.createElement("div");
    let newTask = document.createElement("input");

    let actions = document.createElement("div");
    editbtn = document.createElement("button");
    editbtn.innerText = "edit";
    delbtn = document.createElement("BUTTON");
    delbtn.innerText = "delete";

    actions.append(editbtn, delbtn);
    taskList.append(task);
    task.append(content, actions);
    content.append(newTask);
    newTask.value = newTaskInput.value;
    newTask.readOnly = true;
    newTaskInput.value = "";

    addclass(task, content, actions, newTask, editbtn, delbtn);

    delbtn.addEventListener("click", (e) => {
      task.remove();
    });

    editbtn.addEventListener("click", (e) => edit(e,newTask));

    //
  } else {
    alert("please add some task");
  }
});

//// adding classes
function addclass(task, content, actions, newTask, editbtn, delbtn) {
  task.classList.add("task");
  content.classList.add("content");
  actions.classList.add("actions");
  newTask.classList.add("text");
  editbtn.classList.add("edit");
  delbtn.classList.add("delete");
}

////// edit task function
function edit(e,newTask) {
  if (newTask.readOnly) {
    newTask.readOnly = false;
    e.target.innerText = "Save";
  } else {
    newTask.readOnly = true;

    e.target.innerText = "Edit";
  }
}
