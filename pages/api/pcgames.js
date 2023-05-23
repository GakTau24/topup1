import data from "./data";

// api/games
export default function handler(req, res){
    const { pcGames } = data;
    if(pcGames) return res.status(200).json(pcGames)
    return res.status(404).json({ error: "Data Not Found"})
}