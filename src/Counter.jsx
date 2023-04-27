import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState("faefe");
    //initial count 0
    //function update setCount
    const Incr = () => {
      setCount(count + 1);
    };
    const Decr = () => {
      setCount(count - 1);
    };
    const Reset=()=>{
        setCount(0)
    }

  return (
    <>
      <div className="heading">Counter Project</div>
      <div>Count:{count}</div>
      <button onClick={Incr}>+</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Decr}>-</button>
    </>
  );
}

export default Counter