import React, {useState} from 'react'

const HookCounter = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementBy5 = () =>{
        for(let i = 0; i < 5; i++){
            setCount(prevState => prevState + 1)
        }
    }
  return (
    <div>
        <h2>Counter: {count}</h2>
        <button onClick = {()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(prevState => prevState + 1)}>Increment</button>
        <button onClick={()=>setCount(prevState => prevState - 1)}>Decrement</button>
        <button onClick={incrementBy5}>Increse by 5</button>
    </div>
  )
}

export default HookCounter