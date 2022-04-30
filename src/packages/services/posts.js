const path = process.env.SERVER || 'http://localhost:5000'

export const getPosts = async () => {
    const response = await fetch(`${path}/posts`)
    const data = await response.json()
    
    return data;
}