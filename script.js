const renderContainer = () => {
  return document.createElement('div')
}


const renderTaskCOntainer = (text) => {
  const task = renderContainer()
  task.innerText = text
  task.style.boxShadow = '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
  task.style.borderRadius = '4px'

  return task
}