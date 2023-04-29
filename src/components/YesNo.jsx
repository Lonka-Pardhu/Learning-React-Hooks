import { useState } from "react"
export default function YesNo() {
    const [result, setResult] = useState("Yes")
    function handleClick() {
        setResult(prevResult => prevResult === "Yes" ? "No" : "Yes")
    }
    return (
        <div className="item">
            <h2>Yes/No - Button</h2>
            <div className="switch" onClick={handleClick}>
                <h1>{result}</h1>
            </div>
        </div>
    )
}
