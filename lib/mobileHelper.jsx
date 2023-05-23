const baseURL = "http://localhost:3000/api/trending";

// endpoint: http://localhost:3000/api/posts
export default async function getData(id){
    const res = await fetch(`${baseURL}`)
    const posts = await res.json()

    if(id){
        return posts.find(value => value.id == id)
    }

    return posts;
}