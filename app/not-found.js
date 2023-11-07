"use client"

import Boton from "@/components/ui/Boton"
import { useRouter } from "next/navigation"

const NotFound = () => {
    const router = useRouter()

    return (
        <div>
            Página no encontada
            <hr/>

            <Boton onClick={() => router.back()}>Volver</Boton>
        </div>
    )
}

export default NotFound