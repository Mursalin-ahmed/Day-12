var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://mursalin_ahmed:M4sj58mG4ftQrpAo@cluster0.ootadp3.mongodb.net/?retryWrites=true&w=majority"

MongoClient.connect(URL,function(error){
    if(error){
        console.log("Connection Failed");
    }
    else{
        console.log("Connection Success");
    }

});