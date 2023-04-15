export const followCursor = (x, y, className) => {
  const mainscreen = document.querySelector(`.${className}`);
  const pointer = document.createElement('div');
  pointer.className = "cursor";
  pointer.style.left = `${x}px`;
  pointer.style.top = `${y}px`;
  mainscreen.appendChild(pointer);
  setTimeout(() => mainscreen.removeChild(pointer), 200);
}

export const focusInput = () => {
  const inputs = document.querySelectorAll('input')
  inputs[inputs.length-2].focus()
}

export const clearView = () => {
  const main = document.querySelector('main')
  const childNodes = main.childNodes
  const childNodesL = childNodes.length
  for(let i=0;i<childNodesL-1;i++) main.removeChild(main.childNodes[0])
}

export const ctrlL = (e) => {
  if((e.ctrlKey || e.metaKey) && e.code === "KeyL") {
    e.preventDefault()
    clearView()
  }
}

export const generateSpaces = (spaces) => {
  let space = "\xA0\xA0"
  for(let i=0;i<spaces;i++) space += "\xA0"
  return space
}
