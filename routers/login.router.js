const routerLogin=require("express").Router();

module.exports=(wagner)=>{

	const loginCtrl = wagner.invoke((User)=>
        require('../controllers/login.controller')(User));   

	routerLogin.post("/",(req,res)=>{
		loginCtrl.login(req,res);
	});
	
	return routerLogin;
}