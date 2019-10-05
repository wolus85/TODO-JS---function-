const renderContainer = function () {
  return document.createElement('div')
}


const renderTaskCOntainer = function (text = '') {
  const task = renderContainer()
  task.innerText = text
  task.style.boxShadow = '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
  task.style.borderRadius = '4px'
  task.style.padding = '10px'
  task.style.margin = '10px 0px'

  return task
}

const append = function (child,container = document.body) {

  container.appendChild(child)
}

// append
// takes 2 params - child, container
// it should appends child to container
// *if no container passed container should be equal to document.body