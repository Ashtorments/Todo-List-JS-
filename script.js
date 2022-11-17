// I was using a rather simple logic earlier but it had its shortcoming
// submit.addEventListener("click",(e)=>{
//     e.preventDefault()
//     let title1=title.value
//     localStorage.setItem("todo", JSON.stringify([title1]))
//     todo.innerHTML=`<h1>${title1}</h1>`
//     title.value=""
// })
// deleteBtn.addEventListener("click",(e)=>{
//     e.preventDefault()
//     localStorage.RemoveItem("todo")
//     todo.innerHTML=""
// })


const form = document.querySelector("#new-form");
const input = document.querySelector("#input");
const list = document.querySelector("#tasks");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = input.value;

  const task_element = document.createElement("div");
  task_element.classList.add("task");

  const task_content_element = document.createElement("div");
  task_content_element.classList.add("content");
  task_content_element.innerHTML = task;

  task_element.appendChild(task_content_element);

  const task_actions = document.createElement("div");
  task_actions.classList.add("actions");

  const task_delete = document.createElement("button");
  task_delete.classList.add("delete");
  task_delete.innerHTML = "Delete";

  task_actions.appendChild(task_delete);

  task_element.appendChild(task_actions);

  list.appendChild(task_element);

  input.value = "";

  task_delete.addEventListener("click", (e) => {
    list.removeChild(task_element);
  });
});
