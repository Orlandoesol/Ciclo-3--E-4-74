import express from 'express';
import { Mongoose } from 'mongoose';
// Guardar imagenes en carpeta del proyecto
const upload = require('../libs/storage')
const router = express.Router();
// importar el modelo camiseta
import Camiseta from '../models/camiseta';

// Agregar una camiseta

router.post('/nueva-camiseta', upload.single('imgUrl'), async(req, res) => { 
    const body = req.body;
    try {
        console.log(body)
        const camisetaDB = await Camiseta.create(body);
        res.status(200).json(camisetaDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
    // if (req.file) {
    //     const {filename} = req.file
    //     camisetaSchema.setImgUrl(filename)
    // }
});

// Get con parámetros: buscar una camiseta

router.get('/camiseta/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const camisetaDB = await Camiseta.findOne({_id});
        res.json(camisetaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Get con todos los documentos

router.get('/camiseta', async(req, res) => {
    try {
        const camisetaDB = await Camiseta.find();
        res.json(camisetaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Eliminar una nota

router.delete('/camiseta/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const camisetaDB = await Camiseta.findByIdAndDelete({_id});
        if(!camisetaDB){
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }
        res.json(camisetaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Actualizar datos de una camiseta

router.put('/camiseta/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const camisetaDB = await Camiseta.findByIdAndUpdate(
            _id, body, {new: true});
            res.json(camisetaDB);
        } catch (error) {
            return res.status(400).json({
                mensaje: 'Ocurrio un error', error })
            }
        });




// Exportamos la configuración de express app
module.exports = router;

