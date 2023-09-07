import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    
    const add = () => {
       const newCount = count + 1;
        setCount(newCount);
    }
    const reduce = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h4>Counter: {count} </h4>
            <button onClick={add} style={{marginRight:"10px"}}>Add</button>
            <button onClick={reduce}>Reduce</button>
        </div>
    )
}