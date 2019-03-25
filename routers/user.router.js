const routerUsers=require("express").Router();

module.exports=(wagner)=>{

	const userCtrl = wagner.invoke((User)=>
        require('../controllers/user.controller')(User)); 

	routerUsers.post("/",(req,res)=>{
		userCtrl.create(req, res);
	});

	routerUsers.get("/",(req,res)=>{
		userCtrl.getAll(req,res);
	});

	routerUsers.get("/:id",(req,res)=>{
		userCtrl.getById(req, res);
	});

	routerUsers.delete("/:id",(req,res)=>{
		userCtrl.deleteProduct(req, res);
	});

	routerUsers.put("/:id/:firstName/:lastName/:email/:password",(req,res)=>{
		userCtrl.update(req, res);
	});
	
	return routerUsers;
}