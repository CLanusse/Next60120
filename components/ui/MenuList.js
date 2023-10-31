"use client"
import Link from "next/link"

const MenuList = ({open, setOpen}) => {

    return (
        <div className={`${open ? 'visible opacity-100' : 'invisible opacity-0'} transition-all fixed inset-0 bg-black/50 flex justify-end`}>
            
            <aside className={`${!open ? 'translate-x-48' : ''} transition-all w-48 bg-gray-500`}>
                <div 
                    className="text-white text-right p-4 text-2xl"
                    onClick={() => setOpen(false)}
                >
                    X
                </div>

                <nav className="flex flex-col gap-5 px-4 text-white">
                    <Link href={"#"}>Enlace 1</Link>
                    <Link href={"#"}>Enlace 2</Link>
                    <Link href={"#"}>Enlace 3</Link>
                </nav>
            </aside>
        </div>
    )
}

export default MenuList