import ProductModel from "../../../models/ProductModel";
import dbConnect from "../../../utils/dbConnect";


export default async function handleProducts (req, res) {
  const connect =  await dbConnect()
     const { method } = req

     if(method === "GET"){
      try {
        console.log("code ramn 44")
        const pizzaList = await ProductModel.find({})
        res.status(200).json(pizzaList)
        console.log(pizzaList)
      } catch (error) {
        console.log(error.message)
      }
     }
     if(method === "POST"){
        try {
            const newProduct = await ProductModel.create(req.body)
            res.status(201).json(newProduct)
            
        } catch (error) {

            console.log(error.message)
        }

     }
}