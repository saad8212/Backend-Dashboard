require('dotenv').config();
const mongoose = require("mongoose"); 

let isConnected = false;

const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log('MongoDB is already connected!');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "dashboard",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true;
        console.log("MongoDB Connected!")
    } catch (error) {
        console.error(error);
    }

}
module.export = {connectToDB}