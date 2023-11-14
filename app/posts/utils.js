
export const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        // cache: 'no-cache'
        next: {
            revalidate: 3600
        }
    })
    const posts = await response.json()
    
    return posts
}

export const getPostById = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 0
        }
    })
    const post = await response.json()
    return post
}