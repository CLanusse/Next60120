import ProductDetail from "@/components/products/ProductDetail"
import { db } from "@/firebase/config"
import { doc, getDoc } from "firebase/firestore"



const getProduct = async (id) => {
    const docRef = doc(db, 'productos', id)
    const docSnapshot = await getDoc( docRef )

    return docSnapshot.data()
}

const Detail = async ({params}) => {
    const { id } = params
    // const { categoria } = params
    // * mockData.find => id

    const item = await getProduct( id )

    return (
        <div className="container m-auto pt-8">
            <h2 className="text-4xl text-bold">Detalle de producto</h2>
            <hr/>
            <ProductDetail item={item}/>
            {/* { categoria } */}
        </div>
    )
}

export default Detail