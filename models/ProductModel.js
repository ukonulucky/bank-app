const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength:[16, "character exceeded limit of 16 characters"]

    },
   
    desc:{
        type: String,
        required: true,
        maxLength:[255, "character exceeded limit of 255 characters"]

     },
    prices:{
        type: [Number],
        required: true,
    },
    img:{
        type: String,
        required: true
    },
    extraOptions:[{
        text:{
            type:String,
            required: true,
        },
        amount:{
            type:Number,
            required: true
        }
    }]
}, {
    timeStamps:true
})

 export default mongoose.models?.products ||  mongoose.model("products", productSchema)
