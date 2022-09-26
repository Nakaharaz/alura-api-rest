import mongoose from "mongoose";

mongoose.connect("mongodb+srv://enzo:Enzo*0705@alura.jzbbvkd.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;