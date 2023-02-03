const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    order:{
        type: Number,
        required: true,
    },
   
    customer:{
        type: String,
        required: true,
        maxLength:[15, "character exceeded limit of 15 characters"]

     },
     address:{
        type: String,
        required: true,
        maxLength:[30, "character exceeded limit of 30 characters"]

     },
    total:{
        type: Number,
        required: true,
    },
    status:{
        type: Number,
        defaultValue:0
    }
}, {
    timeStamps:true
})

 const orderModel = mongoose.model("orderModel", productSchema)
export default orderModel