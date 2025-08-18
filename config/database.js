const mongoose = require('mongoose');
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Database Connection established"))
    .catch((err) => {
        console.error("Database Connection error:", err.message);
        process.exit(1);
    });
};
