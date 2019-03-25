const status=require("http-status");
const crypto=require("crypto");

let _user;

const login=(req,res)=>{
	let {email}=req.body;
	let {password}=req.body;
	_user.findOne(
		{
			email:email,
			password:crypt(password)
		}
	).then(data=>{
		console.log(data);
		res.status(200);
		let msg="Login correct!";
		if(!data)
			msg="Login invalid!";
		res.json({
			code:200,
			msg:msg,
			detail:data
		});
	}).catch(err=>{
		console.log(err);
		res.status(400);
		res.json({
			code:400,
			msg:"Something wrong had happened in the login!",
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
        login
    });
}