document.addEventListener("DOMContentLoaded", () => {
  let submitVariable = document.getElementById("submitId")
  submitVariable.addEventListener("click", (e) => {
    e.preventDefault()
    function newTask(text){
      let newTaskItem = document.createElement("li")
      newTaskItem.textContent = text
      document.querySelector("#tasks").appendChild(newTaskItem)
    }
    let inputVariable = document.getElementById("new-task-description")
    newTask(inputVariable.value)
  })
  











});
