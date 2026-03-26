import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

/* GET ALL PRODUCTS */
router.get("/", async(req,res)=>{
 const products = await Product.find();
 res.json(products);
});

/* GET PRODUCT BY ID */
router.get("/:id", async(req,res)=>{
 const product = await Product.findById(req.params.id);
 res.json(product);
});

/* CREATE PRODUCT */
router.post("/", async(req,res)=>{
 const product = await Product.create(req.body);
 res.json(product);
});

/* UPDATE PRODUCT */
router.put("/:id", async(req,res)=>{
 const product = await Product.findByIdAndUpdate(
  req.params.id,
  req.body,
  {new:true}
 );
 res.json(product);
});

/* DELETE PRODUCT */
router.delete("/:id", async(req,res)=>{
 await Product.findByIdAndDelete(req.params.id);
 res.json({message:"Product deleted"});
});

export default router;