var express = require('express');

//requiring the controller's function to fire it here
var todoController = require('./Controler(s)/TodoController');

var app = express();


//Setting the template engine
app.set('view engine', 'ejs');


//firing the controller's function

todoController(app)
//Handling our static files, whenever we run an url request its gonna map in the public folder
app.use(express.static('./public'))



//listening to port
app.listen(8000);
console.log('listening on port 8000');