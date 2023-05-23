import data from '../data'


// api/posts/1
export default function handler(req, res){
    const { id } = req.query;
    const { Trending }  = data;

    if(id){
        const post = Trending.find( value => value.id == id)
        return res.status(200).json(post)
    }

    return res.status(404).json({ error : "Post Not Found"})

}