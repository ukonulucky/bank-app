import React from 'react'
import styles from "../styles/order.module.css"
import {MdPayments} from "react-icons/md"
import {AiOutlineDeliveredProcedure} from "react-icons/ai"
import { MdOutlineDirectionsBike } from "react-icons/md"
import { FcApprove, FcProcess } from "react-icons/fc"


function order() {

  
    const status = 0
    const handleStatus = (i) => {
      if(i < 1) return "processing"
      if(i === 1) return "progress"
      if(i > 1) return "delivered"
    }
  return (
    <div className='flex flex-col   sm:flex-row w-full '>
        <div className='flex flex-col  sm:w-2/3  space-y-8'>
            <div className='flex flex-col  items-center
            sm:flex-row space-x-2 mt-4  justify-around'>
                <div className={styles.userId}>
                  <p className='hidden sm:block capitalize text-black font-bold'>Order</p>
                  1233445
                </div>
                <div className={styles.customer}>
                <p className='hidden sm:block capitalize text-black font-bold'>customer</p>
                    John Dove
                    </div>
                <div className={styles.address}>
                <p className='hidden sm:block capitalize text-black font-bold'>Address</p>
                    Elon St. 212-33 LA
                </div>
                <div className={styles.total}>
                <p className='hidden sm:block capitalize text-black font-bold'>Total</p>
                    $79.80</div>

            </div>
            <div className='flex flex-col sm:flex-row space-x-2 justify-around items-center'>
            <div className="flex flex-col items-center space-x-2 mt-8">
           
            <MdPayments 
            className='text-4xl' />
            <FcApprove                className='text-2xl' />
            </div>
            
            <div className="flex flex-col items-center space-x-2 mt-8">
           
           <FcProcess
           className={handleStatus(status)}
           />
        <span className='text-center font-light'>Prepairing</span>
          </div>
            <div className="flex flex-col items-center space-x-2 mt-8">
           
            <MdOutlineDirectionsBike
            className={handleStatus(1)}
            />
         <span className='text-center font-light'>On the way</span>
           </div>
           <div className="flex flex-col items-center space-x-2 mt-8">
           
           <AiOutlineDeliveredProcedure
            className={handleStatus(1)} />
         <span className='text-center font-light'>Delivered</span>
           </div>
            
           

            </div>

        </div>
        <div className='mt-8 w-full  sm:mt-0   sm:w-1/3 px-4'>
        <div className="bg-gray-900 flex-col space-y-4 justify-center items-center
        p-10  mt-4 m-auto w-5/6 sm:4/6 md:w-max h-max">
            <h2 className="text-white
            uppercase text-center font-bold text-2xl">
                cart total
            </h2>
            <div className='text-white flex-col space-y-1'>
                <p>
                    <span className='text-white capitalize  font-semibold'>Subtotal:</span> $79.60
                </p>
                <p>
                    <span className='text-white capitalize font-semibold'>discount:</span> $0.00
                </p>
                <p>
                    <span className='text-white capitalize font-semibold'>total:</span> $79.60
                </p>
            </div>

            <button className='bg-white flex items-center justify-center text-red-600 uppercase font-semibold  cursor-not-allowed border-0 text-6 w-full  px-8 py-2 '>
                paid
            </button>

        </div>
        </div>
    
    </div>
  )
}

export default order