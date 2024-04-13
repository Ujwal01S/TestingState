import { useState } from "react";


const Fetch=(props)=>{

    const[fetchInput, setFetchInput]=  useState('');
    const getInputHandler=(event)=>{
        setFetchInput(event.target.value);
        console.log(event.target.value);

    };
    const submitHandler=()=>{
        const newDdata = fetchInput;
        console.log(newDdata);
        props.onNewData(newDdata);
    };

    return(
        <div>
            <label>New data</label>
            <input onChange={getInputHandler} />
            <button onClick={submitHandler}>submit</button>
        </div>
    )
};

export default Fetch;