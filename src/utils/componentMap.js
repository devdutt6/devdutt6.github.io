import Welcome from '@/components/Welcome'
import Invalid from '@/components/Invalid'
import Echo from '@/components/Echo'
import Clear from '@/components/Clear'
import Pwd from '@/components/Pwd'
import Education from '@/components/Education'
import Help from '@/components/Help'
import About from '@/components/About'
import Social from '@/components/Social'
import Projects from '@/components/Projects'
import Wrapper from '@/components/Wrapper'
import Theme from '@/components/Theme'

const componentMapping = {
  pwd:  <Wrapper component={<Pwd />} />,
  help: <Wrapper component={<Help />} />,
  about: <Wrapper component={<About />} />,
  clear: <Wrapper component={<Clear />} />,
  socials: <Wrapper component={<Social />} />,
  welcome: <Wrapper component={<Welcome />} />,
  projects: <Wrapper component={<Projects />} />,
  education: <Wrapper component={<Education />} />,
  whoami: <Wrapper component={<Echo text='visitor'/>} />,
  theme: <Wrapper component={<Theme />} />
}

const componentMaper = (textInput) => {
  textInput = textInput.trim()

  if(/^echo\s/i.test(textInput)) {
    textInput = textInput.slice(5)
    if(/^["'`]/.test(textInput) && /["'`]$/.test(textInput)) textInput = textInput.slice(1,textInput.length-1)
    return <Wrapper component={<Echo text={textInput} />} />
  }
  textInput = textInput.toLowerCase()

  return componentMapping[textInput] || <Wrapper component={<Invalid command={textInput} />}/>
}

export default componentMaper