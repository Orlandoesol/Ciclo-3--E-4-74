import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app= express();

// CONEXION A BASE DATOS

const mongoose = require('mongoose');

const user = 'grupo-74-04';
const password = 'mintic0623149';
const dbname = 'tienda'
const uri = `mongodb+srv://${user}:${password}@cluster0.kmjrx.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))




// MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true}))



// RUTAS

app.use('/api', require('./routes/camiseta'));


const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


// PUERTO

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function (){
    console.log('Example app listening on port'+ app.get('puerto'));
});

