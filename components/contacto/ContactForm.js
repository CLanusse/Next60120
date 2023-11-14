"use client"

import { useState } from "react"
import Boton from "../ui/Boton"

const ContactForm = () => {
    const [values, setValues] = useState({
        nombre: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const response = await fetch("http://localhost:3000/api/contacto", {
            method: 'POST',
            body: JSON.stringify(values)
        }).then(r => r.json())

        console.log(response)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={values.nombre}
                placeholder="Tu nombre"
                name="nombre"
                className="p-2 border mx-2"
                onChange={handleInputChange}
            />

            <input
                type="email"
                value={values.email}
                placeholder="Tu email"
                name="email"
                className="p-2 border mx-2"
                onChange={handleInputChange}
            />

            <Boton type="submit" className="my-4">Enviar</Boton>
        </form>
    )
}

export default ContactForm