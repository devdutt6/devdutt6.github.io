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
  const [index, setIndex] = useState(0)
  const { components, setComponents } = useContext(ComponentContext)
  const { history, setHistory } = useContext(HistoryContext)

  const handelArrow = (e) => {
    if(e.key === "ArrowUp"){
      setIndex(ind => {
        if(ind >= history.length-1) return ind = history.length-1
        else return ind+1
      });
      console.log(history, index)
      index < history.length ? setInput(history[history.length-index-1]) : setInput("")
    }
    if(e.key === "ArrowDown"){
      setIndex(ind => {
        if(ind <= 0) return ind = -1
        else return ind-1
      });
      console.log(history, index-1)
      index >= 0 ? setInput(history[history.length-index-1]) : setInput("")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setHistory(hist => [...hist, input]);
    setSubmitted(true)
    setComponents([...components, componentMaper(input)])
  }
  const handelChange = (e) => setInput(e.target.value)

  useEffect(() => {
    reference.current.addEventListener('keydown', handelArrow)
    reference.current.focus()

    return () => {
      reference.current.removeEventListener('keydown', handelArrow)
    }
  }, [index])

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