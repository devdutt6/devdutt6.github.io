import styles from "@/styles/Input.module.css"
import componentMaper from "@/utils/componentMap"
import { useContext, useEffect, useState, useRef } from "react"
import { ComponentContext, HistoryContext } from '../pages/index'

const Input = () => {
  const USER = "visitor"
  const DOMAIN = "terminal.devdutt.dev"
  const reference = useRef()
  const [submitted, setSubmitted] = useState(false)
  const [input, setInput] = useState("")
  const [index, setIndex] = useState(-1)
  const { components, setComponents } = useContext(ComponentContext)
  const { history, setHistory } = useContext(HistoryContext)

  const handelArrow = (e) => {
    if(e.key === "ArrowUp"){
      setIndex(index+1);
      setInput(history[history.length-1-(index+1)]);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setHistory(history => [...history, input]);
    setSubmitted(true)
    reference.current.removeEventListener('keydown', handelArrow);
    setComponents([...components, componentMaper(input)])
  }
  const handelChange = (e) => setInput(e.target.value)

  useEffect(() => {
    reference.current.focus(),
    reference.current.addEventListener('keydown', handelArrow);
  }, [])

  return (
    <div className={styles.card}>
      <>
        <span className={styles.orange}>{USER}</span>
        @<span className={styles.green}>{DOMAIN}</span>
        :~$&nbsp;
      </>
      <div className={styles.form}>
        <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={styles.form}>
          <input
          type="text"
          className={styles.input}
          value={input}
          onChange={handelChange}
          ref={reference}
          disabled={submitted}/>
          <input
          type="submit"
          value="submit"
          className={styles.display}/>
        </form>
      </div>
    </div>
  )
}

export default Input;