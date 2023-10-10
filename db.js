require('dotenv').config();
const mongoose = require("mongoose");
const dbconfig = mongoose.set("strictQuery", false);
const db = process.env.MONGODB_URI;

mongoose.connect(db, {
    dbName: "dashboard",
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((res) => {
        console.log("database connection established");
    })
    .catch((err) => {
        console.log("error connecting to database, ", err);
    });
module.export = { dbconfig };

