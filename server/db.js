/*
 * Author : Tawsif Mahmud
 * Title : database connectivity
 * Description: Connection with MongoDB
 * Date : 16-01-2024
 */

const mongoose = require('mongoose');

// Connection to MongoDB databse
module.exports = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        // console.error(error.message);
        // process.exit(1);
        console.log('Database conncection failed');
    }
};
