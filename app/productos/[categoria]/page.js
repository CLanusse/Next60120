import ProductCard from "@/components/products/ProductCard"
import { mockData } from "@/data/products"

export const generateMetadata = async ({params}) => {
    return {
        title: 'CoderApp - ' + params.categoria
    }
}

const Productos = ({params}) => {
    const { categoria } = params

    const items = categoria === 'all'
                    ? mockData
                    : mockData.filter(product => product.type === categoria)

    return (
        <div className="container m-auto pt-8">
            <h2 className="text-4xl text-bold">Productos</h2>
            <hr/>
            
            <section className="flex justify-center items-center gap-10 flex-wrap">

                { items.map(product => <ProductCard key={product.slug} item={product}/>) }
            </section>
        </div>
    )
}

export default Productos