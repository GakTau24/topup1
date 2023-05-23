import data from '../data'

// api/trending
export default function handler(req, res){
    const { Mobile } = data;
    if(Mobile) return res.status(200).json(Mobile)
    return res.status(404).json({ error: "Data Not Found"})
}