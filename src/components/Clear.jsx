import { useEffect } from "react";
import Input from "./Input";

export default function Clear() {

  useEffect(() => {
    const main = document.querySelector('main');
    const childNodes = main.childNodes;
    const childNodesL = childNodes.length;
    for(let i=0;i<childNodesL-1;i++){
      main.removeChild(main.childNodes[0]);
    }
  }, []);

  return <Input />;
}