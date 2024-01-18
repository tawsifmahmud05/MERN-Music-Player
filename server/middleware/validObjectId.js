/*
 * Author : Tawsif Mahmud
 * Title : ValidObject Middleware
 * Description: checking if the id is valid in database before delete operation
 * Date : 16-01-2024
 */

const mongoose = require('mongoose');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(404).send({ message: 'Invalid ID' });

    next();
};
