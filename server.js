const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
const methodOverride = require('method-override');

// Asignations
const server = express();
require('./database');
// Settings
server.set('port', process.env.PORT || 3000);
server.engine('.hbs', handlebars({
	defaultLayout: 'main',
	layoutsDir: 'views',
	extname:'.hbs'
}));
server.set('view engine', '.hbs');
// Middleware
server.use(express.urlencoded({extended: false}));
server.use(methodOverride('_method'));
server.use(session({
	secret: 'secretapp',
	resave: true,
	saveUninitialized: true
}));
// Globals

// Routes
server.use(require('./routes/index'));
server.use(require('./routes/notes'));
server.use(require('./routes/users'));

// Static
server.use(express.static('public'))
// Serve
server.listen(server.get('port'),()=>{
	console.log(`Server running on port ${server.get('port')}`);
});

