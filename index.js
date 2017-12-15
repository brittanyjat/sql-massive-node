const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const controller = require('./products_controller');

const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(dbInstance => { app.set('db', dbInstance) });

app.post( '/api/product', controller.create );
app.get( '/api/products', controller.getAll );
app.get( '/api/product/:id', controller.getOne );
app.put( '/api/product/:id', controller.update );
app.delete('/api/product/:id', controller.delete );



app.listen(port, () => { console.log(`Server listening on ${port}.`); });
