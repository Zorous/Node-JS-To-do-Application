
var bodyParser = require('body-parser');


//Setting local data for testing purposes
var data = [
    {item : "Deploy your app"},
    {item : "Check your email inbox"},
    {item : "smash some coding"}
];





module.exports = function(app){

var urlencodedParser = bodyParser.urlencoded({extended : false});

//getting 
app.get('/todo',function(req,res){
    //searching for the Todo view and passing the data as a property to it
    res.render('Todo',{todos : data});
});


//------------------2----------------------
//adding : THIS HANDLER GET FIRED WHEN THE AJAX REQUEST IS MADE
app.post('/todo', urlencodedParser ,function(req,res){

console.log(req.body)


//pushing the parsed data into our local data array
data.push(req.body);


//we sent the data here to AJAX on success fired function
res.json(data)

})

//removing
app.delete('/todo/:item',function(req,res){
    //if it returns false it will filter that item out of the array
    //if it returns true, things will remain the same
data = data.filter(function(todo){
    return todo.item.replace(/ /g, '-') !== req.params.item;
})
res.json(data)
})



};