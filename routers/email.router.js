const routerEmail=require("express").Router();

module.exports=(wagner)=>{

	const emailCtrl = wagner.invoke((User)=>
        require('../controllers/email.controller')(User));   

	routerEmail.get("/:id",(req,res)=>{
		emailCtrl.send(req,res);
	});
	
	return routerEmail;
}