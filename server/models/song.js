/*
 * Author : Tawsif Mahmud
 * Title : Song model
 * Description: Detailed information of song model
 * Date : 16-01-2024
 */

const mongoose = require('mongoose');
const Joi = require('joi');

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    url: { type: String, required: true },
});

const validate = (song) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        artist: Joi.string().required(),
        url: Joi.string().required(),
    });

    return schema.validate(song);
};

const Song = mongoose.model('song', songSchema);

module.exports = { Song, validate };
