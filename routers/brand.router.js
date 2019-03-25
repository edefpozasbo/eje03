const routerBrand=require("express").Router();

module.exports=(wagner)=>{

	const brandCtrl = wagner.invoke((Brand)=>
        require('../controllers/brand.controller')(Brand)); 

	routerBrand.post("/",(req,res)=>{
		brandCtrl.create(req, res);
	});

	routerBrand.get("/",(req,res)=>{
		brandCtrl.getAll(req,res);
	});

	routerBrand.get("/:id",(req,res)=>{
		brandCtrl.getById(req, res);
	});

	routerBrand.delete("/:id",(req,res)=>{
		brandCtrl.deleteBrand(req, res);
	});

	routerBrand.put("/:id/:brand",(req,res)=>{
		brandCtrl.update(req, res);
	});
	
	return routerBrand;
}