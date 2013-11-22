
/**
 * Module dependencies.
 */
var express = require('express');
var routes = require('./routes');
var products = require('./routes/products');
var http = require('http');
var path = require('path');
var params = require('express-params');
var app = express();
params.extend(app);


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.set('images', __dirname + '/public/images');

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.param('id', Number);
app.get('/products/:lmt', products.findall);
app.get('/byone/:name', products.findByName);

app.get('/bycorp/:society', products.findBySociety);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
