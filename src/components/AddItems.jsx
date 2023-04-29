import { useState } from "react"
export default function button() {
    const [thingsArr, setThingsArr] = useState(["Item 0"])

    const thingsElements = thingsArr.map(thing => <p key={thing}>{thing}</p>)

    function addingItem() {
        thingsArr.push(`Item` + thingsArr.length)
        setThingsArr(prevState => [...prevState])
    }
    function reset() {
        setThingsArr(["Item 0"])
    }
    return (
        <div className="mainBtn">
            <button onClick={addingItem} >Add Item</button>
            <button onClick={reset} className="resetBtn">Reset</button>
            {thingsElements}
        </div>
    )
}
