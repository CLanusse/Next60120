import { collection, getDocs, query, where } from "firebase/firestore"
import ProductCard from "./ProductCard"
import { db } from "@/firebase/config"


const getProducts = async (categoria) => {
    const productsRef = collection(db, 'productos')
    const q = categoria === "all"
                ? productsRef
                : query(productsRef, where('type', '==', categoria))

    const querySnapshot = await getDocs( q )

    return querySnapshot.docs.map( docSnapshot => docSnapshot.data() )
}


const ProductList = async ({categoria}) => {
    const items = await getProducts(categoria)

    return (
        <section className="flex justify-center items-center gap-10 flex-wrap">
            {items.map(product => <ProductCard key={product.slug} item={product} />)}
        </section>
    )
}

export default ProductList