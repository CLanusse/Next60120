"use client"

import Boton from "@/components/ui/Boton"


const Error = ({ error, reset }) => {
    console.log({error})

    return (
        <div className="container m-auto mt-8">
            <h2>Hubo un error al cargar la página</h2>
            <p>{error.message}</p>
            <Boton onClick={reset}>Intentar nuevamente</Boton>
        </div>
    )
}

export default Error

