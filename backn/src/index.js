const expreso = require('express');

const caminhar = require('./caminhos.js');
const cors = require('cors');
const { errors } = require('celebrate');
const app = expreso();

    app.use(cors(
        /* {
            origin:"meuapp.com"
        } */
    ));
    app.use(expreso.json());
 
    app.use(caminhar);
    app.use(errors());

//app.listen(3333); 
module.exports=app;