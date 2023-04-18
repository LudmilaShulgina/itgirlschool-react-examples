import logo from './logo.svg';
import './App.css';
import SayHello,{FIRSTNAME, LASTNAME} from './consts';
import * as colors from './colors'
import { TwitterPicker } from 'react-color';

console.log("FIRSTNAME", FIRSTNAME);
console.log("LASTNAME", LASTNAME);
console.log(colors)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SayHello/>
        <p style={{color: colors.ERROR}}>My error message</p>
        <p style={{color: colors.WARNING}}>My warning message</p>
        <p style={{color: colors.SUCCESS}}>My success message</p>
        <TwitterPicker/>
      </header>
    </div>
  );
}

export default App;
