const status=require("http-status");
const crypto=require("crypto");

let _user;

const getAll=(req,res)=>{
	_user.find({}).then(data=>{
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
	let user=req.body;
	user.password=crypt(user.password);
	_user.create(user).then(data=>{
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
	_user.remove({_id:id}).then(data=>{
		console.log(data);
		res.status(200);
		res.json({
			code:200,
			msg:"User with id '${id}' was deleted succesfully!",
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
	_user.find({_id:req.params.id}).then(data=>{
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
	let {firstName}=req.params;
	let {lastName}=req.params;
	let {email}=req.params;
	let {password}=req.params;
	_user.update(
		{
			_id:id
		},
		{
			$set:{
				firstName:firstName,
				lastName:lastName,
				email:email,
				password:crypt(password)
			}
		}
	).then(data=>{
		console.log(data);
		res.status(200);
		res.json({
			code:200,
			msg:"User with id '${id}' was updated succesfully!",
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

function crypt(string){

	const secret = 'password_encryption';
	const hash = crypto.createHmac('sha256', secret)
	                   .update(string)
	                   .digest('hex');
	return hash;
}
module.exports = (User) => {
    _user = User;
    return ({
        getAll, create, deleteProduct, getById,update
    });
}