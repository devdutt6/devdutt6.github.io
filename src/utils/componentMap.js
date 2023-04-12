import Welcome from '@/components/Welcome';
import Invalid from '@/components/Invalid';

const componentMapping = {
  welcome: <Welcome />,
}

const componentMaper = (textInput) => {
  textInput = textInput.toLowerCase();

  return componentMapping[textInput] || <Invalid command={textInput}/>;
}

export default componentMaper;