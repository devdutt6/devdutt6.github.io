import componentMaper from '@/utils/componentMap'
import { useContext, useEffect, useState, useRef } from 'react'
import { ComponentContext } from '../pages/index'

const LabelLine = ({idLabel}) => {
  const USER = 'visitor'
  const DOMAIN = 'terminal.devdutt.dev'

  const styles = {
    orange: {
      color: 'rgb(199, 152, 33)'
    },
    green: {
      color: 'var(--cursor-color)'
    }
  }

  return (
    <label htmlFor={idLabel}>
      <span style={styles.orange}>
        {USER}
      </span>
      @
      <span style={styles.green}>
        {DOMAIN}
      </span>
      :~$&nbsp;
    </label>
  )
}

const Form = ({ defaultValue='', defaultState=false, idLabel }) => {
  const { components, setComponents, history, setHistory } = useContext(ComponentContext)
  const reference = useRef()
  const [submitted, setSubmitted] = useState(defaultState)
  let [input, setInput] = useState(defaultValue)
  const [index, setIndex] = useState(0)

  const handelArrow = (e) => {
    if(e.key === 'ArrowUp' || e.key === 'ArrowDown'){
      e.preventDefault()
      if(e.key === 'ArrowDown'){
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

  const styles = {
    form: {
      width: '100%',
      height: '100%',
    },
    input: {
      border: 'none',
      backgroundColor: 'var(--background-dark)',
      display: 'flex',
      width: '100%',
      height: '100%',
      // color: 'var(--title-main)',
      fontSize: '1em',
      outline: 'none',
    },
    display: {
      display: 'none',
      height: '0',
    }
  }

  return (
    <div style={styles.form}>
      <form
      onSubmit={handleSubmit}
      autoComplete='off'
      style={styles.form}>
        <input
        type='text'
        id={idLabel}
        style={styles.input}
        value={input}
        onChange={handelChange}
        ref={reference}
        disabled={submitted} />
        <input
        type='submit'
        value='submit'
        style={styles.display} />
      </form>
    </div>
  )
}

const Input = ({defaultValue, defaultState, idLabel}) => {

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.1em',
  }

  return (
    <div style={styles}>
      <LabelLine idLabel={idLabel} />
      <Form defaultValue={defaultValue} defaultState={defaultState} idLabel={idLabel} />
    </div>
  )
}

export default Input