import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    window.open('https://drive.google.com/file/d/1_wdSkWYvnzHetMy8LJ9Qe7IP8W8ai4Up/view?usp=sharing', '_blank');
  }, [])
  return (<span></span>);
}