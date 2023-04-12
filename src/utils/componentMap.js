import Welcome from '@/components/Welcome';
import Invalid from '@/components/Invalid';
import Echo from '@/components/Echo';
import Extra from '@/components/Extra';
import Pwd from '@/components/Pwd';
import Education from '@/components/Education';
import Help from '@/components/Help';
import About from '@/components/About';

const componentMapping = {
  welcome: <Welcome />,
  clear: <Extra />,
  pwd:  <Pwd />,
  education: <Education />,
  help: <Help />,
  whoami: <Echo text='visitor'/>,
  about: <About />
}

const componentMaper = (textInput) => {
  textInput = textInput.trim();

  if(/^echo\s/i.test(textInput)) {
    textInput = textInput.slice(5)

    if(/^["'`]/.test(textInput) && /["'`]$/.test(textInput)){
      textInput = textInput.slice(1,textInput.length-1)
    }

    return <Echo text={textInput} />
  }

  textInput = textInput.toLowerCase();

  return componentMapping[textInput] || <Invalid command={textInput}/>;
}

export default componentMaper;