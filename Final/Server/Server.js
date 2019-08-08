'use strict';

var express = require('express'),
	path = require('path'),
	gaikan = require('gaikan'),
	bodyParser = require('body-parser'),
	compression = require('compression');

var app = express();

app.set('view engine', '.html');
app.engine('html', gaikan);
app.set('views', __dirname + '/views');
app.use(compression());
gaikan.options.rootDir = __dirname;
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
/*****************************************************************/
app.get('/Buscar', function (req, res) {
	if (req.query.buscar.toLowerCase() == 'herramientas') {
		var send = [{
			Producto: 'Herramienta Nueva',
			Imagen: 'public/img/Productos/herramientas/7.1.jpg',
			Imagen2: 'public/img/Productos/herramientas/7.2.jpg',
			NombreM: 'Herramienta Nueva',
			Descripcion: 'Los productos de nuestra tienda son la combinación perfecta de una verdadera fiabilidad y durabilidad',
			Precio: '$32.00',
			PrecioO: '$40.00',
			Porcentaje: '-20%',
			Id: 1
		}, {
			Producto: 'Taladro Herramienta fina',
			Imagen: 'public/img/Productos/herramientas/19.1.jpg',
			Imagen2: 'public/img/Productos/herramientas/19.2.jpg',
			NombreM: 'Taladro Herramienta Fina',
			Descripcion: 'Los productos de nuestra tienda son la combinación perfecta de una verdadera fiabilidad y durabilidad',
			Precio: '$52.00',
			PrecioO: '$65.00',
			Porcentaje: '-20%',
			Id: 2
		}, {
			Producto: '2-1-4-Horsepower Router',
			Imagen: 'public/img/Productos/herramientas/86.1.jpg',
			Imagen2: 'public/img/Productos/herramientas/86.2.jpg',
			NombreM: '2-1-4-Horsepower Router',
			Descripcion: 'Los productos de nuestra tienda son la combinación perfecta de una verdadera fiabilidad y durabilidad',
			Precio: '$40.00',
			PrecioO: null,
			Porcentaje: null,
			Id: 3
		}];
		res.json({ respuesta: send });
	} else {
		res.json({ respuesta: [] });
	}
});

app.get('/SendMail', function (req, res) {
	//enviar el correo electronico
	console.log("Data: ", req.query);
	res.json({ Mensaje: "Su mensaje ha sido enviado con éxito.", Exito: true });
});
/*****************************************************************/
/***		Control de Errores		***/
app.use(function (err, req, res, next) {
	console.error("Primer Handler: ", err.stack);
	console.log("\n\n");
	next(err);
});

app.use(function (err, req, res, next) {
	if (req.xhr) {
		res.status(500).send({
			error: 'Error Interno!'
		});
	} else {
		console.log("Error Tipo 500: ", err);
		next(err);
	}
});

// Error 500
app.use(function (err, req, res, next) {
	if (res.headersSent) {
		return next(err);
	}
	res.status(500);
	res.render('500', {
		error: err
	});
});

// Error 404
app.use(function (req, res) {
	/* res.status(404);
	res.render('404', {
		Error: 'El objecto que buscas no se encuentra en el servidor!!!'
	}); */
	res.status(404).send({
		Error: 'El objecto que buscas no se encuentra en el servidor!!!'
	});
});
// Excepción no Controlada
process.on('uncaughtException', function (err) {
	console.log('Excepción No Controlada: \n' + err);
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log("Escuchando por: " + port);