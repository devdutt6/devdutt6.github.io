import { useEffect } from "react";

export default function Dynamic({effectFunction, returnElement}) {

  useEffect(effectFunction, [])
  return returnElement()
}