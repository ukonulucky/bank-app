import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "../styles/Cart.module.css"
import ButtonWrapper from '../utils/paypal'

function Cart() {
    const cart =  useSelector(state => state.cart)
    const [show, setShow] = useState(false)
    console.log("this is show", show)
    
    const currency = "USD";
   

 console.log(cart)
  return (
    <div className='xs:flex-col md:flex
    justify-between sm:space-x-4'>
       <div className='md:w-2/3 w-full'>
       <table className='table-auto shadow-md m-auto rounded border-separate border-spacing-y-4 w-3/4 md:flex md:border-red-400 border-2 mt-4 flex-col'>
          
          <tr className='w-full hidden md:block'>
                <th className='font-bold text-lg capitalize text-red-400
                text-center '>product</th>
                <th className='font-bold text-lg capitalize text-center text-red-400'
                >name</th>
                <th
                className=' font-bold text-lg capitalize text-red-400 text-center'>extra</th>
                <th className=' text-center font-bold text-lg capitalize text-red-400'>price</th>
                <th className=' text-center font-bold text-lg capitalize text-red-400'>quantity</th>
                <th className=' text-center font-bold text-lg capitalize text-red-400'>total</th>
            </tr>
    
        
          {
            cart?.products.map((product) => ( <tr className='sm:bg-orange-400 duration-300 my-4 hover:bg-orange-200 myRow' key={product._id}>
                <td className='px-1 text-center'>
                    <Image 
                    src={product.img}
                    alt='pizza'
                    width={"80px"}
                    height={"50px"}
                    />
                </td>
                <td className='px-1 text-center text-red-600 uppercase font-semibold'>
                   {
                    product.title
                   }
                </td>
                <td className='px-2 text-left ' style={{
                    width: "200px"
                }}>
                    {
                        product.extraOptions.map((extra,index) =>  {
                        return    <span key={index}>
                            { extra.text }
                        </span>
                        }
                            
                        )
                    }
                </td>
                <td className='px-1 text-center price'>
                    ${product.price}
                </td>
                <td className='px-1 text-center quantity'>
                    {product.quantity}
                </td>
                <td className='px-1 text-center total '>
                   {
                    product.price * product.quantity
                   }
                </td>
            </tr>
            ))
           }
          
            
        </table>
       </div>
       <div
       className='md:w-1/3 
       flex justify-center '>
        <div className="bg-gray-900 flex-col space-y-4 justify-center items-center
        p-10 w-max mt-4  h-max  ">
            <h2 className="text-white
            uppercase font-bold text-2xl">
                cart total
            </h2>
            <div className='text-white flex-col space-y-1'>
                <p>
                    <span className='text-white capitalize  font-semibold'>Subtotal:</span> ${ cart.total }
                </p>
                <p>
                    <span className='text-white capitalize font-semibold'>discount:</span> $0.00
                </p>
                <p>
                    <span className='text-white capitalize font-semibold'>total:</span> ${
                        cart.total
                    }
                </p>
            </div>
             
                 
                 {
                    show ? <div onClick={()  => {
                        setShow(false)
                    }}>
                        <PayPalScriptProvider
                    options={{
                        "client-id": "test",
                        components: "buttons",
                        currency: "USD",
                        "disable-funding": "card,p24"
                    }}
                >
                    <ButtonWrapper
                        currency={currency}
                        showSpinner={false}
                        
                    />
                </PayPalScriptProvider>
                        </div>
                     :
                     <div onClick={() => {
                        
                        console.log("code ran successfully")
                        setShow(true)
                    }} >
                     <button className='bg-white flex items-center justify-center text-red-600 uppercase font-semibold border-0 text-6 px-8 py-2'>
                    checkout now!
            </button>
                     </div>
                    
                 } 
                   
             

           
            <div >
           
		</div>

        </div>

       </div>
    </div>
  )
}

export default Cart