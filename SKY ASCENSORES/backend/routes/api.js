var express =require ('express');
const async = require('hbs/lib/async');
var router = express.Router();
var novedadesModel = require ('./../models/novedadesModel');
var cloudinary = require ('cloudinary').v2;

router.get ('/novedades', async function (req, res, next) {
    var usuario = req.session.nombre;
    let novedades = await novedadesModel.getNovedades();
    console.log (usuario);
    novedades = novedades.map (novedades =>{
        if (novedades.img_id) {
            const imagen = cloudinary.url (novedades.img_id, {
                width:80,
                height: 80,
                crop: 'pad'
            });
            return {
                ...novedades,
                imagen
            }
        } else {
            return {
                ...novedades,
                imagen:''
            }
        }
    });
    res.json (novedades);
});

module.exports =router;