import mongoose from "mongoose";

const autorSchema = new mongoose.Schema (
    {
        id: {type: String},
        nomeDoAutor: {type: String, require: true},
        nacionalidade: {type: String, require: true}
    },
    {
        versionKey: false
    }
)

const autores = mongoose.model('autores', autorSchema);

export default autores;