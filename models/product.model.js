const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
	code:{
		type:String,
		required:true
	},
	name:{
		type:String,
		required:true
	},
	prize:{
		type:Number,
		required:true
	}
});
const Product=mongoose.model("Product",productSchema,"products");
module.exports=Product;