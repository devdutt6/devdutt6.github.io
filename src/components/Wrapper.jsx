import Input from "./Input"

const Wrapper = ({component}) => {
  return (
    <>
      {component}
      <Input idLabel={Math.round(Math.random()*1000)} />
    </>
  )
}

export default Wrapper