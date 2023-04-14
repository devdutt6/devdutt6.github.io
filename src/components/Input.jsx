import styles from "@/styles/Input.module.css"
import componentMaper from "@/utils/componentMap"
import { useContext, useEffect, useState, useRef } from "react"
import { ComponentContext } from '../pages/index'

const LabelLine = () => {
  const USER = "visitor"
  const DOMAIN = "terminal.devdutt.dev"

  return (
    <>
      <span className={styles.orange}>
        {USER}
      </span>
      @
      <span className={styles.green}>
        {DOMAIN}
      </span>
      :~$&nbsp;
    </>
  )
}

const Form = ({ defaultValue="", defaultState=false }) => {
  const { components, setComponents, history, setHistory } = useContext(ComponentContext)
  const reference = useRef()
  const [submitted, setSubmitted] = useState(defaultState)
  let [input, setInput] = useState(defaultValue)
  const [index, setIndex] = useState(0)

  const handelArrow = (e) => {
    if(e.key === "ArrowUp" || e.key === "ArrowDown"){
      e.preventDefault()
      if(e.key === "ArrowDown"){
        setIndex(ind => {
          if(ind == 0) return ind = 0
          else return ind-1
        })
      }
      else{
        setIndex(ind => {
          if(ind == history.length-1) return ind = history.length-1
          else return ind+1
        })
      }
      setInput(history[history.length-index-1])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    input = input.trim()
    if (input.length == 0) return
    setHistory(hist => [...hist, input])
    setSubmitted(true)
    setComponents([...components, componentMaper(input)])
  }

  const handelChange = (e) => setInput(e.target.value)

  useEffect(() => {
    reference.current.addEventListener('keydown', handelArrow)
    reference.current.focus()

    return () => {
      reference.current?.removeEventListener('keydown', handelArrow)
    }
  }, [index])

  return (
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
        disabled={submitted} />
        <input
        type="submit"
        value="submit"
        className={styles.display} />
      </form>
    </div>
  )
}

const Input = ({defaultValue, defaultState}) => {
  return (
    <div className={styles.card}>
      <LabelLine />
      <Form defaultValue={defaultValue} defaultState={defaultState} />
    </div>
  )
}

export default Input