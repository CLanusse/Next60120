import ProductList from "@/components/products/ProductList"
import { Suspense } from "react"

export const generateMetadata = async ({params}) => {
    return {
        title: 'CoderApp - ' + params.categoria
    }
}

const Productos = async ({params}) => {
    const { categoria } = params

    return (
        <div className="container m-auto pt-8">
            <h2 className="text-4xl text-bold">Productos</h2>
            <hr/>
            
            <Suspense fallback={<div>Cargando productos...</div>}>
                <ProductList categoria={categoria}/>
            </Suspense>
        </div>
    )
}

export default Productos