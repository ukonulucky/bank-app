import Image from 'next/image'
import React from 'react'

function Others() {
  return (
    <div className='flex w-full  mt-12 bg-gray-400'>
        <div  className='hidden sm:flex  w-1/3'>
        <Image 
        src="https://media.istockphoto.com/id/1385170622/photo/the-guitarist-plays-on-guitar-in-a-dark-room-hands-of-a-guitar-player-playing-the-guitar-low.jpg?b=1&s=170667a&w=0&k=20&c=RZiTdX54hGbxGPDc3bnLkaC3AZ62HQSrJgKuX-d0OCA="
        alt="bar"
        
     width='600px'
     height='500px'
       objectFit="cover"      
        />
        </div>
        <div className='sm:w-2/3 md:flex w-full flex:col p-4 space-y-4 md:space-y-0    md:justify-around 
        md:items-start
        '>
       
            <div >
                <h2 className='text-2xlg
                text-white uppercase'>
                    oh yes, we <br/>
                    did.  the lama  <br />
                    pizza. well <br/> based  slice of <br/>pizza.
                </h2>


            </div>
            <div>
                <h3 className='text-green-400 
                uppercase text-lg font-bold'>
                    find our restaurant
                </h3>
                <span className='capitalize text-lg text-white'>
                    165a R. don road #0776<br />
                    new york 85022

                </span>
                <span className='capitalize text-lg text-white'>
                    165a R. don road #0776<br />
                    new york 85022

                </span>
                <span className='capitalize text-lg text-white'>
                    165a R. don road #0776<br />
                    new york 85022

                </span>
                <span className='capitalize text-lg text-white'>
                    165a R. don road #0776<br />
                    new york 85022

                </span>
            </div>
            <div>
                <h2
                className='text-green-400 font-bold uppercase text-lg'>working hours</h2>
                 <span className='capitalize text-lg text-white'>
                    monday until friday<br />
                    9:00 - 22:00

                </span>
                <span className='uppercase text-lg text-white'>
                   saturday - sunday<br />
                    12:00 - 24:00

                </span>
            </div>
        
  
        </div>

    </div>
  )
}

export default Others