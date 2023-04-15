import Input from "./Input"
import Welcome from "./Welcome"

const StaticInput = () => {
  return (
    <>
      <Input defaultValue='welcome' defaultState={true} idLabel={Math.round(Math.random()*1000)} />
      <Welcome />
    </>
  )
}

export default StaticInput