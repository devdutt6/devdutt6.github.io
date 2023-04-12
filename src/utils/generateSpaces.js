const generateSpaces = (spaces) => {
  let space = "\xA0\xA0"
  for(let i=0;i<spaces;i++) space += "\xA0";
  return space;
}

export default generateSpaces;