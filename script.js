let tasks = JSON.parse(localStorage.getItem('tasks')) || []
const toDoListContainer = document.body



const renderContainer = function () {
  return document.createElement('div')
}

const renderTaskContainer = function (text = '') {
  const taskContainer = renderContainer()
  taskContainer.innerText = text
  taskContainer.style.boxShadow = '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
  taskContainer.style.borderRadius = '4px'
  taskContainer.style.padding = '10px'
  taskContainer.style.margin = '10px 0px'

  return taskContainer
}

const append = function (child, container = document.body) {
  container.appendChild(child)
}

const renderTaskFormContainer = function () {
  const taskFormContainer = renderContainer()

  const input = document.createElement('input')
  const button = document.createElement('button')

  input.style.width = '100%'
  input.style.height = '30px'
  input.style.margin = '10px 0px'
  input.style.border = '1px solid rgba(0, 0, 0, 0.2)'
  input.style.borderRadius = '4px'
  button.style.width = '100%'
  button.style.height = '30px'
  button.style.border = '1px solid rgba(0, 0, 0, 0.2)'
  button.style.backgroundColor = 'white'
  button.style.borderRadius = '4px'

  button.innerText = 'Add task'

button.addEventListener('click',()=>{
addTask(input.value)
})
  append(input, taskFormContainer)
  append(button, taskFormContainer)


  return taskFormContainer

}

const renderTaskList = function () {
  const taskListContainer = renderContainer()
  taskListContainer.style.width = '100%'

  tasks.forEach
    ((task) => {
      const taskContainer = renderTaskContainer(task.text)
      append(taskContainer, taskListContainer)
    })

  return taskListContainer

}


const setTasks = function (newTasks) {
  tasks = newTasks
  localStorage.setItem('tasks', JSON.stringify(tasks))


  render()
}

const addTask = function (text) {
  const newTasks = tasks.concat({ text: text })

  setTasks(newTasks)
}

const deleteTask = function (indexOfTasktoDelete) {
  const newTasks = tasks.filter(function (task, i) {
    return i !== indexOfTasktoDelete
  })
  setTasks(newTasks)
}



const render = function () {
  toDoListContainer.innerText = ''
  const taskForm = renderTaskFormContainer()
  const taskList = renderTaskList()
  append(taskList, toDoListContainer)
  append(taskForm, toDoListContainer)
}


render()

