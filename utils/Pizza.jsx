import Image from 'next/image'
import React from 'react'
import {useRouter} from "next/router"
function Pizza({pizza}) {
  const router = useRouter()
 
const handleChangeRoute = (id) => {
  router.push(`/product/${id}`)
}

  return (
    <div className='flex-col 
    items-center w-52 mt-4 cursor-pointer' key={pizza._id} onClick= {
      () => handleChangeRoute(pizza._id)
    }>
       <Image
        src={pizza.img}
        width="350px"
        height={"300px"}
        alt="pizza image"
        />
     
       <h3 className='uppercase text-red-500 font-bold flex justify-center mb-4'>{pizza.title}</h3>
       <span className='flex items-center justify-center font-bold'>${pizza.prices[0]}</span>
       <span className='flex items-center font-light'>
       {pizza.desc}
       </span>
    </div> 
  )
}

export default Pizza