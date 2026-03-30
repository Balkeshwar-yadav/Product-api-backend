import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());


app.get('/',(req , res)=>{
  res.render("index.ejs")
})

mongoose.connect("mongodb+srv://root:4089@cluster1.leuoiaz.mongodb.net/?appName=Cluster1",{
    dbName:"Product-list"
})
.then(()=> console.log("MongoDB Connected"));

app.use("/api/products", productRoutes);
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});