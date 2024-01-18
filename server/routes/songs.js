/*
 * Author : Tawsif Mahmud
 * Title : Song Routes
 * Description: API related to Songs
 * Date : 16-01-2024
 */

const router = require('express').Router();
const validObjectId = require('../middleware/validObjectId');
const { Song, validate } = require('../models/song');

// create song
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) res.status(400).send({ message: error.details[0].message });

    const song = await Song(req.body).save();
    res.status(201).send({ data: song, message: 'Song created successfully' });
});

// get all songs
router.get('/', async (req, res) => {
    const songs = await Song.find();
    res.status(200).send({ data: songs });
});

// get song by id
router.get('/:id', [validObjectId], async (req, res) => {
    const song = await Song.findById(req.params.id);

    res.status(200).send({ data: song, message: 'Selected Song' });
});

// Delete song by id
router.delete('/:id', [validObjectId], async (req, res) => {
    await Song.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: 'Song deleted Successfully' });
});

router.post('/search', async (req, res) => {
    const query = new RegExp(req.body.query, 'i'); // 'i' option for case-insensitivity

    const allSongs = await Song.find({ title: { $regex: query } });
    if (!allSongs) res.status(400).send({ error: 'No task was found' });
    res.status(200).send(allSongs);
});

module.exports = router;
