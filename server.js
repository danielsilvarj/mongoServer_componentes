var express= require("express");  
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require('body-parser');
var url="mongodb://localhost:27017";
var app= express();

app.use(bodyParser.json()); 

app.use(function(req,res,next){
 res.header('Access-Control-Allow-Origin','*');
 res.header('Access-Control-Allow-Credentials','true');
 res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
 res.header('Access-Control-Allow-Headers',
  'X-Requested-With, Content-Type, X-Codingpedia, Authorization') ; 
 next();
});
 

app.get("/aluno", function(req,res){
   MongoClient.connect(url,function(err,database){
       if (err){
         console.log(err.err);
      }else{
        var db = database.db("banco_componentes");
          db.collection("aluno").find().toArray(function(err,data){
              res.send(data);
              database.close();
          });
    }
   })
});


app.post("/aluno", function(req,res){
    MongoClient.connect(url,function(err,database){
        if (err){
          console.log(err.err);
       }else{
         var db = database.db("banco_componentes");
        var collection = db.collection("aluno");
         collection.insertMany([req.body],function(err,documents){
               res.send({error: err, affected: documents});
               database.close();
           });
     }
    });
 });

 //prende
 var server=app.listen(4010,'localhost', function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host,port);
});


