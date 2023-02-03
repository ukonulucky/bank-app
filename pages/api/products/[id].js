import ProductModel from "../../../models/ProductModel"
import dbConnect from "../../../utils/dbConnect"


export default async function getPizza(req, res) {
 const {method} = req
 await dbConnect()
 console.log("code ran from connect")
    if(method === "GET"){
        
    const {query: {id}} = req
  try {
    const pizza = await ProductModel.findById(id)
    res.status(200).json(pizza)
    
  } catch (error) {
    console.log(error.message)
  }
        
      
   }
   if(method === "PUT"){

   }
  if( method === "DELETE"){

  }
}