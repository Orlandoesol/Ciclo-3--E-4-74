import mongoose from 'mongoose';
const { appConfig } = require('../config')

const Schema = mongoose.Schema;

const camisetaSchema = new Schema({
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    descripcion: String,
    color: String,
    usuarioId: String,
    precio: Number,
    stock: Number,
    date:{type: Date, default: Date.now},
    imgUrl: String,
    activo: {type: Boolean, default: true}

});




const Camiseta = mongoose.model('Camiseta', camisetaSchema);
export default Camiseta;
