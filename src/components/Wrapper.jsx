import Input from "./Input"

const Wrapper = ({component}) => {
  return (
    <>
      {component}
      <Input />
    </>
  )
}

export default Wrapper;