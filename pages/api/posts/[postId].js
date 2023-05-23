import data from '../data'

export default function handler(req, res) {
    const { gamesId } = req.query;
    const { Games } = data

    if(gamesId){
        const game = Games.find(value => value.id == gamesId)
        return res.status(200).json(game)
    }

    return res.status(404).json({ error: 'Post Not Found'})
}