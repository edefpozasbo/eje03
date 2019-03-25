const status=require("http-status");
const crypto=require("crypto");

let _brand;

const getAll=(req,res)=>{
	_brand.find({}).then(data=>{
		console.log(data);
		res.status(200);
		res.json({
			code:200,
			msg:"Query succesfully!",
			detail:data
		});
	}).catch(err=>{
		console.log(err);
		res.status(400);
		res.json({
			code:400,
			msg:"Something wrong had happened in the query!",
			detail:err
		});
	});
}

const create=(req,res)=>{
	let brand=req.body;
	_brand.create(brand).then(data=>{
		console.log(data);
		res.status(200);
		res.json({
			code:200,
			msg:"Saved!",
			detail:data
		});
	}).catch(err=>{
		console.log(err);
		res.status(400);
		res.json({
			code:400,
			msg:"Something wrong had happened!",
			detail:err
		});
	});
}

const deleteBrand=(req,res)=>{
	let {id}=req.params;
	_brand.remove({_id:id}).then(data=>{
		console.log(data);
		res.status(200);
		res.json({
			code:200,
			msg:"Brand with id '${id}' was deleted succesfully!",
			detail:data
		});
	}).catch(err=>{
		console.log(err);
		res.status(400);
		res.json({
			code:400,
			msg:"Something wrong had happened in the delete!",
			detail:err
		});
	});
}

const getById=(req,res)=>{
	_brand.findOne({_id:req.params.id}).then(data=>{
		console.log(data);
		res.status(200);
		res.json({
			code:200,
			msg:"Query with id ${req.params.id} succesfully!",
			detail:data
		});
	}).catch(err=>{
		console.log(err);
		res.status(400);
		res.json({
			code:400,
			msg:"Something wrong had happened in the query!",
			detail:err
		});
	});
}

const update=(req,res)=>{
	let {id}=req.params;
	let {brand}=req.params;
	_brand.update(
		{
			_id:id
		},
		{
			$set:{
				brand:brand
			}
		}
	).then(data=>{
		console.log(data);
		res.status(200);
		res.json({
			code:200,
			msg:"Brand with id '${id}' was updated succesfully!",
			detail:data
		});
	}).catch(err=>{
		console.log(err);
		res.status(400);
		res.json({
			code:400,
			msg:"Something wrong had happened in the update!",
			detail:err
		});
	});
}

module.exports = (Brand) => {
    _brand = Brand;
    return ({
        getAll, create, deleteBrand, getById,update
    });
}