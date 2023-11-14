"use client"
import { useRouter } from "next/navigation"
import { getPostById } from "../utils"
import Boton from "@/components/ui/Boton"


const Post = async ({ params }) => {
    const { back } = useRouter()

    const { id } = params
    const post = await getPostById(id)

    return (
        <div>
            <h2>{post.title}</h2>
            <hr/>
            <p>{post.body}</p>

            <Boton className="my-8" onClick={back}>Volver</Boton>
        </div>
    )
}

export default Post