const toDoListContainer = document.body

let tasks = [
  { text: 'Wynieś śmieci' },
  { text: 'Zmyj gary' },
  { text: 'Zmieć podłogę' },
]

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





const renderTaskList = function () {
const taskListContainer = renderContainer() 
taskListContainer.style.width = '100%'

tasks.forEach
((task)=>{const taskContainer = renderTaskContainer(task.text)
append(taskContainer, taskListContainer)
})

return taskListContainer

}

const render = function () {
  toDoListContainer.innerText = ''
  const taskList = renderTaskList()
  append(taskList,toDoListContainer)
}

render()

