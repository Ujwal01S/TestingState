import {useState} from 'react';
import Fetch from './Component/Fetch';
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
  const newDataHandler=(dataFromFetch)=>{
    const fetchData= dataFromFetch;
    console.log('dataFromFetch triggered');
    console.log(fetchData);
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
      <Fetch onNewData={newDataHandler}/>
    </div>
  );
}

export default App;
