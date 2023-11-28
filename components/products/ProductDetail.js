"use client"

import { useCartContext } from "@/contexts/CartContext"
import Boton from "../ui/Boton"




const ProductDetail = ({item}) => {
    console.log(item)
    const { addToCart } = useCartContext()

    return (
        <div>
            <Boton onClick={() => addToCart(item)}>Agregar</Boton>
        </div>
    )
}

export default ProductDetail