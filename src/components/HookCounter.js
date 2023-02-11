import React, {useState} from 'react'

const HookCounter = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
  return (
    <div>
        <h2>Counter: {count}</h2>
        <button onClick = {()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
        <button onClick={()=>setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default HookCounter