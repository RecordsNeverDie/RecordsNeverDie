const express = require("express")
const router = express.Router()
const spotifyApi = require("../configs/spotify.config")

router.get('/music', (req, res) => res.render('music/music-index'))

router.get("/spotifyAPI/:query", (req, res, next) => {
    let items = [];
    spotifyApi
        .searchTracks(req.params.query, { limit: 5 })
        .then(songs => {
            songs.body.tracks.items.forEach(song => {
                let fullSong = {
                    name: song.name,
                    id: song.id,
                    uri: song.uri,
                    artist: song.artists,
                    img: song.album.images
                };
                items.push(fullSong);
            });
        })
        .then(() => {
            res.json(items);
        })
        // res.render('music/music-index',data);
        .catch(err => {
            console.error(err);
        });
});



module.exports = router