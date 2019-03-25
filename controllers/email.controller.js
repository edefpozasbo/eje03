const status=require("http-status");
const fs =require("fs");
const sgMail = require('@sendgrid/mail');

let _user;

sgMail.setApiKey("API KEY");

const load_template=function(path){
	return new Promise((resolve,reject)=>{
		fs.readFile(path,function(err,data){
			if(err){
				reject(err);
			}
			resolve(data);
		});
	});
}
const send=(req,res)=>{

	_user.find({_id:req.params.id}).then(data=>{
		load_template("../template/template.html").then(template=>{
			console.log(data);
			send_email(data,template).then(ex=>{
				res.status(200);
				res.json({
					code:200,
					msg:"Email sent succesfully!",
					detail:err
				});
			}).catch(err=>{
				res.status(400);
					res.json({
					code:400,
					msg:"Something wrong had happened sending the email!",
					detail:err
				});
			});
		}).catch(err=>{
			res.status(400);
				res.json({
				code:400,
				msg:"Something wrong had happened loading the template!",
				detail:err
			});
		})


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

const send_email=function(users_availables,template){
	let promises=[];

	for (var i = 0; i < users_availables.length; i++) {
		let item=users_availables[i];
		let email=item.email;
		let id=item._id;
		let msg_text=template.toString()
					.replace(/{{id}}/g,id)
					.replace(/{{nombre}}/g,item.firstName)
					.replace(/{{apellido}}/g,item.lastName)
					.replace(/{{email}}/g,item.email);
		let msg = {
			to: email,
			from: 'edefpozasbo@ittepic.edu.mx',
			subject: 'Correo de invitación a conferencia',
			html:msg_text
		};
		promises.push(sgMail.send(msg));
	}
	return Promise.all(promises);
}	


module.exports = (User) => {
    _user = User;
    return ({
        load_template,send,send_email
    });
}
