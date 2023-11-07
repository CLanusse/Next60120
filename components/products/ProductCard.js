import Image from "next/image"
import Link from "next/link"



const ProductCard = ({ item }) => {

    return (
        <article className="basis-72 shadow-lg rounded">
            <Link href={`/productos/detail/${item.slug}`}>
                <Image 
                    alt={item.title}
                    src={`/imgs/products/${item.image}`}
                    width={288}
                    height={288}
                />

                <div className="px-4 border-t border-gray-200 pb-4">
                    <h4 className="text-sm my-4">{item.title}</h4>
                    <p className="text-2xl font-semibold">${item.price}</p>
                </div>                
            </Link>
        </article>
    )
}

export default ProductCard