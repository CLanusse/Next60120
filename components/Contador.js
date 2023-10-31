"use client"
import { useState } from "react"
import styles from './contador.module.css'
import Boton from "./ui/Boton"

const Contador = () => {
    const [counter, setCounter] = useState(0)

    const handleCounter = () => setCounter(counter + 1)

    return (
        <div>
            <Boton
                className="bg-blue-700"
                onClick={handleCounter}
                onMouseOver={() => console.log("Hover")}
            >
                Clicks: {counter}
            </Boton>
        </div>
    )
}

export default Contador