var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sandaga',function(err){

	if(err) {throw err};
});
	var societeschema = new mongoose.Schema({

		name : { type : String},
		address: String ,
		img: String,
		prix : Number
	});
	var produitschema = new mongoose.Schema({
         libele : String,
         caracteristic :String ,
         img:   String,
         size : String,
         boutik :[societeschema]
          
	});
	//mongoose.model(societeschema,'societeschema');
	//mongoose.model(produitschema,'produitschema');

var corporate = mongoose.model('societe',societeschema);
var product = mongoose.model('produit',produitschema);


exports.findall=function(req,res){

     var lmt = req.params.lmt;

   var query =   product.find({}).limit(lmt);
   
   query.exec(function(err,result){


        res.send(result);

   });

}
exports.findByCategories = function(req,res){

  var lmt = req.params.lmt;
  var catg =req.params.categorie;
  var query = product.find({categorie:catg}).limit(lmt);
  query.exec(function(err,result){
  	

   res.send(result);

  });


}
