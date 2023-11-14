// import { getPosts } from "./utils"

import Link from "next/link"

const Posts = async () => {
    // const posts = await getPosts()
    const response = await fetch('http://localhost:3000/api/posts')
    const posts = await response.json()

    return (
        <ul>
            {
                posts.map(post => (
                    <li key={post.id} className="my-4">
                        <Link href={`/posts/${post.id}`}>
                            <h3 className="text-2xl font-semi">{post.title}</h3>
                            <hr/>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Posts