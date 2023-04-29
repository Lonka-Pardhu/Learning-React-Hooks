import { useState } from "react"
export default function PlusMinus() {
    const [counter, setCounter] = useState(0)
    function add() {
        setCounter(prevCount => prevCount + 1)
    }
    function remove() {
        setCounter(prevCount => prevCount - 1)
    }
    return (
        <div className="counter">
            <button className="counter--minus" onClick={remove}>-</button>
            <div className="counter--count">
                <h1>{counter}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
