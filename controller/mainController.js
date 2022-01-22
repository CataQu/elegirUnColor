const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const { parse } = require('path');


const controller = {
    index: function (req, res) {
        let userData = req.session
        res.render('index', {userData: userData})
    },
    formulario: function (req, res) {
        var resultValidations = validationResult(req)
        if (resultValidations.errors.length > 0){
            return res.render('index', {
                errors: resultValidations.mapped(),
                oldData: req.body,
            })
        }
        
        req.session.name = req.body.name
        req.session.colors = req.body.colors
        req.session.email = req.body.email
        req.session.age = req.body.age

        if (req.body.rememberColor){
            res.cookie('color', req.body.colors, {maxAge: 60000 * 1000})
        }
        res.redirect('/')

        let data = req.session;
        console.log('ESTA ES LA COOKIE==' + req.cookies.color);
        console.log('ESTA ES LA SESSION == ' + data);
    },
    gracias: function (req, res){
        if(req.session.name){
        let data = req.session
        let bkgColor = req.cookies.color;
        console.log(bkgColor)
        return res.render('gracias', {data, bkgColor: bkgColor})
    }
    res.redirect(  '/'  )
},
borrar: (req, res) => {
    res.clearCookie('color');
    req.session.destroy();
    res.render('colorBorrado')
}
}

module.exports = controller