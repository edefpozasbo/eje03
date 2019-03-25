const bodyParser=require("body-parser");
const express=require("express");
const wagner=require("wagner-core");


require('./models/models')(wagner);

const app=express();

const routerProducts=require("./routers/product.router.js")(wagner);
const routerUsers=require("./routers/user.router.js")(wagner);
const routerLogin=require("./routers/login.router.js")(wagner);
const routerEmail=require("./routers/email.router.js")(wagner);
const routerBrands=require("./routers/brand.router.js")(wagner);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/product",routerProducts);
app.use("/user",routerUsers);
app.use("/login",routerLogin);
app.use("/email",routerEmail);
app.use("/brand",routerBrands);

module.exports=app;
