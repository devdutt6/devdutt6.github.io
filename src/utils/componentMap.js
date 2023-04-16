import Welcome from '@/components/terminal/Welcome'
import Invalid from '@/components/terminal/Invalid'
import Pwd from '@/components/terminal/Pwd'
import Education from '@/components/terminal/Education'
import Help from '@/components/terminal/Help'
import About from '@/components/terminal/About'
import Social from '@/components/terminal/Social'
import Projects from '@/components/terminal/Projects'
import Wrapper from '@/components/terminal/Wrapper'
import Theme from '@/components/terminal/Theme'
import Dynamic from '@/components/terminal/Dynamic'
import { clearView, openResume, emptyElement, emptyFunction } from './functions'
import Input from '@/components/terminal/Input'

const Echo = (text) => {
  const styles = {
    padded: {
      fontSize: "1.1em",
      color: "var(--title-main)",
      padding: "8px 0px"
    }
  }

  return (
    <div style={styles.padded}>
      {text}
    </div>
  )
}

const WrapIt = (component) => {
  return (
    <>
      {component}
      <Input idLabel={Math.round(Math.random()*1000)} />
    </>
  )
}

const componentMapping = {
  pwd:  <Wrapper component={<Pwd />} />,
  help: <Wrapper component={<Help />} />,
  about: <Wrapper component={<About />} />,
  clear: <Wrapper component={<Dynamic effectFunction={clearView} returnElement={emptyElement} />} />,
  socials: <Wrapper component={<Social />} />,
  welcome: <Wrapper component={<Welcome />} />,
  projects: <Wrapper component={<Projects />} />,
  education: <Wrapper component={<Education />} />,
  whoami: <Wrapper component={<Dynamic effectFunction={emptyFunction} returnElement={() => Echo('visitor')} />} />,
  theme: <Wrapper component={<Theme />} />,
  resume: <Wrapper component={<Dynamic effectFunction={openResume} returnElement={emptyElement} />} />,
  pwd2: <Dynamic effectFunction={emptyFunction} returnElement={() => WrapIt(<Pwd />)} />,
  clear2: <Dynamic effectFunction={emptyFunction} returnElement={() => WrapIt(<Dynamic effectFunction={clearView} returnElement={emptyElement} />)} />
}

const componentMaper = (textInput) => {
  textInput = textInput.trim()

  if(/^echo\s/i.test(textInput)) {
    textInput = textInput.slice(5)
    if(/^["'`]/.test(textInput) && /["'`]$/.test(textInput)) textInput = textInput.slice(1,textInput.length-1)
    return <Wrapper component={<Dynamic effectFunction={emptyFunction} returnElement={() => Echo(textInput)} />} />
  }
  textInput = textInput.toLowerCase()

  return componentMapping[textInput] || <Wrapper component={<Invalid command={textInput} />}/>
}

export default componentMaper