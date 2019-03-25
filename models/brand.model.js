const mongoose=require("mongoose");
const brandSchema=new mongoose.Schema({
	brand:{
		type:String,
		required:true
	}
});
const Brand=mongoose.model("Brand",brandSchema,"brands");
module.exports=Brand;