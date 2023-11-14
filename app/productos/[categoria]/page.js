import ProductCard from "@/components/products/ProductCard"

export const generateMetadata = async ({params}) => {
    return {
        title: 'CoderApp - ' + params.categoria
    }
}

const Productos = async ({params}) => {
    const { categoria } = params
    const response = await fetch(`http://localhost:3000/api/productos/${categoria}`, {
        cache: 'no-store'
    })
    const items = await response.json()

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