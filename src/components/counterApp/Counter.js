import React,{ useState } from 'react';
import Button from '../Button';

const Counter = () => {

 const [count,setCount] =useState(0);
const Increment = () =>{
    // console.log(increment);
    setCount((prevCount) => prevCount + 1);//setCount is asynchronous function 
    console.log(count);
}
const Decrement =()=>{
    setCount((prevCount)=>prevCount===0?prevCount:prevCount-1);    
}
const reset =()=>{
    setCount(0);
}
  return (<div>
      <h1>Counter App</h1>
      <h2>Value</h2>
      <h3>{count}</h3>
      
     <Button color="green" click={Increment}>Increment</Button>
     <Button color="blue" click={Decrement}>Decrement</Button>
     <Button color="red" click={reset}>Reset</Button>


      {/* <button onClick={Increment}>Increase</button>
      <button onClick={Decrement}>Decrease</button>
      <button onClick={reset}>Reset</button> */}
  </div>);
};

export default Counter;
