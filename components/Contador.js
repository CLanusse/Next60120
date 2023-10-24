"use client"
import { useState } from "react"

const Contador = () => {
    const [counter, setCounter] = useState(0)

    const handleCounter = () => setCounter(counter + 1)

    return (
        <div>
            <button onClick={handleCounter}>{counter}</button>
        </div>
    )
}

export default Contador