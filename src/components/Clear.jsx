import { useEffect } from "react";
import { clearView } from "@/utils/functions";

export default function Clear() {
  useEffect(clearView, [])
  return (<span></span>)
}