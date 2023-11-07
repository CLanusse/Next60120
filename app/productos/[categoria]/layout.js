import Link from "next/link"




const ProductosLayout = ({children}) => {

    return (
        <div className="container m-auto">
            <nav className="flex gap-10 py-4">
                <Link href={"/productos/all"}>Todos</Link>
                <Link href={"/productos/tvs"}>TVs</Link>
                <Link href={"/productos/hornos"}>Hornos</Link>
                <Link href={"/productos/aires"}>Aires</Link>
            </nav>

            {children}
        </div>
    )
}

export default ProductosLayout