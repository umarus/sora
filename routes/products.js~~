var mongo = require('mongodb');
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;


                                                                                
var server = new Server('localhost',27017,{auto_reconnect :true});              
db =new Db('tiledb',server);                                                    
                                                                                
db.open(function(err,db){                                                       
if(!err){                                                                       
console.log("connect to 'tiledb database");                                    
db.collection('product',{safe:true},function(err,collection){                     
if(err){                                                                        
console.log("not exist database");                                              
                                                            
}                      
});
}
});
//lister tous les produits 
exports.findall =  function(req,res){
db.collection('product',function(err,collection){
collection.find().sort({prix: 1}).toArray(function(err,items){

	//res.render('index',{'items':items});
res.send(items);
});
});
};
//chercher les produits par nom

exports.findByName = function(req,res){
 var  name= req.params.name;
db.collection('product',function(err,collection){
collection.find({name: name}).sort({prix: 1}).toArray(function(err,items){

	res.send(items);
});
});
};

//chercher les produits par  society

exports.findBySociety = function(req,res){
 var  society= req.params.society;
db.collection('product',function(err,collection){
collection.find({societe: society}).sort({prix: 1}).toArray(function(err,items){

	res.send(items);
});
});
};
