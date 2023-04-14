import React from "react"
import Input from "./Input"
import Welcome from "./Welcome"

const StaticInput = () => {
  return (
    <>
      <Input defaultValue='welcome' defaultState={true}/>
      <Welcome />
    </>
  )
}

export default StaticInput