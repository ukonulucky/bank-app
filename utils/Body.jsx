import Image from 'next/image'
import React from 'react'
import Others from './Others'
import Pizza from './Pizza'
import axios from 'axios'

export default function Body({pizzaList}) {
  return (
    <div className='mt-8'>
        <div className='m-auto w-full md:w-1/2 mb-8 px-2 '>
            <h2 className='uppercase font-bold text-black-400 mb-6 mt-12 flex justify-center text-2xl '>the best pizza in town</h2>
            <p className='font-light text-black-200 text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit facere, quos labore cumque molestiae nemo magni. Porro velit aut inventore eum aperiam veritatis nihil pariatur at?
                        </p>


        </div>
    <div className='flex flex-wrap justify-around
    w-full 
    items-center'>
      {
        pizzaList.map(pizza =>   <Pizza id={pizza._id} pizza = {pizza} />)
      }
        
    </div>
    
    </div>
  )
}





