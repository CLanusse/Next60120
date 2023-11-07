"use client"
import Link from "next/link"

const MenuList = ({open, setOpen}) => {

    const handleClose = () => setOpen(false)

    return (
        <div className={`${open ? 'visible opacity-100' : 'invisible opacity-0'} transition-all fixed inset-0 bg-black/50 flex justify-end`}>
            
            <aside className={`${!open ? 'translate-x-48' : ''} transition-all w-48 bg-gray-500`}>
                <div 
                    className="text-white text-right p-4 text-2xl"
                    onClick={handleClose}
                >
                    X
                </div>

                <nav className="flex flex-col gap-5 px-4 text-white">
                    <Link onClick={handleClose} href={"/"}>Inicio</Link>
                    <Link onClick={handleClose} href={"/productos/all"}>Productos</Link>
                    <Link onClick={handleClose} href={"/nosotros"}>Nosotros</Link>
                    <Link onClick={handleClose} href={"/contacto"}>Contacto</Link>
                </nav>
            </aside>
        </div>
    )
}

export default MenuList