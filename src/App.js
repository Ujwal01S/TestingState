import {useState} from 'react';
import './App.css';
const defaultInput = '';
function App() {
  const[userInput, setUserInput]= useState(defaultInput);
  const[submit, setSubmit]= useState('');

  const inputHandler=(event)=>{
    setUserInput(event.target.value);
    console.log(event.target.value);
  };
  const submitHandler=()=>{
    setSubmit(userInput);
    console.log(submit);
    setUserInput(defaultInput);
  };

  return (
    <div>
      <h1>Hello! {submit}</h1>
      {/* <form > */}
        <input onChange={inputHandler}
        type='text'
        value={userInput} />
        <button onClick={submitHandler} >Submit</button>
      {/* </form> */}
    </div>
  );
}

export default App;
