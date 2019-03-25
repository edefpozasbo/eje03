const routerProducts=require("express").Router();

module.exports=(wagner)=>{

	const productCtrl = wagner.invoke((Product)=>
        require('../controllers/product.controller')(Product));   

	routerProducts.post("/",(req,res)=>{
		productCtrl.create(req, res);
	});

	routerProducts.get("/",(req,res)=>{
		productCtrl.getAll(req,res);
	});

	routerProducts.get("/:id",(req,res)=>{
		productCtrl.getById(req, res);
	});

	routerProducts.delete("/:id",(req,res)=>{
		productCtrl.deleteProduct(req, res);
	});

	routerProducts.put("/:id/:code/:name/:prize",(req,res)=>{
		productCtrl.update(req, res);
	});
	return routerProducts;
}