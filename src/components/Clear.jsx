import { useEffect } from "react";
import Input from "./Input";

function NotClear() {
  return <Input />;
}

export default function Clear() {

  useEffect(() => {
    const main = document.querySelector('main');
    const childNodes = main.childNodes;
    const childNodesL = childNodes.length;
    // console.log(childNodesL);
    // console.log(childNodes);
    for(let i=0;i<childNodesL-1;i++){
      // console.log(main.childNodes.length);
      main.removeChild(main.childNodes[0]);
    }
  }, []);

  return <NotClear />;
}