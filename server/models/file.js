import mongoose from "mongoose";
const fileSchema = mongoose.Schema({
    path: {

        type: String,
        required: true
    },
    name: {

        type: String,
        required: true
    },
    downloadContent: {//not passing from client or frontend
        type: Number,
        required: true,
        default: 0
    }

})

const file = mongoose.model('fila', fileSchema);

export default file;