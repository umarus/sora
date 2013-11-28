var mongoose = require('mongoose');
var  Schema = mongoose.Schema;
var server = new Server('localhost',27017,{auto_reconnect :true});
db =new Db('market', server);
var corporate  = new Schema({
        libele : {type: String},
        adresse : {type :String},
        pays : {type: String},
        prix :{type: Number}
});


var produit = new Schema({
    name : {type: String},
    desc : {type: String},
    img: :{type: String},
    societe :[corporate]
   
});