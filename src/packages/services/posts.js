const path = process.env.SERVER || 'http://localhost:5000'

export const getPosts = async () => {
    const response = await fetch(`${path}/posts`)
    const data = await response.json()
    
    return data;
}

export const getPost = async (id) => {
    console.log("Getting post number:", id);
    const response = await fetch(`${path}/posts/${id}`)
    const data = await response.json()
    
    return data;
}