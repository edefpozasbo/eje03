const status=require("http-status");

let _product;

const getAll=(req,res)=>{
	_product.find({}).then(data=>{
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
	let product=req.body;
	console.log(product);
	_product.create(product).then(data=>{
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

const deleteProduct=(req,res)=>{
	let {id}=req.params;
	_product.remove({_id:id}).then(data=>{
		console.log(data);
		res.status(200);
		res.json({
			code:200,
			msg:"Product with id '${id}' was deleted succesfully!",
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
	_product.find({_id:req.params.id}).then(data=>{
		console.log(data);
		res.status(200);
		res.json({
			code:200,
			msg:"Query with id ${req}params.id) succesfully!",
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
	let {code}=req.params;
	let {name}=req.params;
	let {prize}=req.params;
	_product.update(
		{
			_id:id
		},
		{
			$set:{
				code:code,
				name:name,
				prize:prize,
			}
		}
	).then(data=>{
		console.log(data);
		res.status(200);
		res.json({
			code:200,
			msg:"Product with id '${req}params.id)' was updated succesfully!",
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

module.exports = (Product) => {
    _product = Product;
    return ({
        getAll, create, deleteProduct, getById,update
    });
}