import logo from './logo.svg';
import './App.css';
// import { createStore, combineReducers } from 'redux'

// Components
import { InputComponent } from './Components/InputComponent';
import OutputComponent from './Components/OutputComponent';

function App() {
  return (
    <div className="App">
      <div className='Inner_div'>
        <InputComponent />
      </div>
    </div>
  );
}

export default App;
