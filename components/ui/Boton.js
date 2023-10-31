"use client"

const Boton = ({children, className = '', ...args}) => {

    return (
        <button
            className={`text-white rounded-lg py-2 px-4 bg-gray-500 ${className}`}
            {...args}
        >
            {children}
        </button>
    )
}

export default Boton