"use client"
import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart([...cart, product])
    }
    console.log(cart)

    return (
        <CartContext.Provider value={{
            cart,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}