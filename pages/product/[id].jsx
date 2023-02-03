import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductModel from "../../models/ProductModel";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/cartSlice";

export default function Product({pizza}) {
 const dispatch = useDispatch()

  const [price, setPrice] = useState(0);
  const [checkedAmount, setCheckedAmount] = useState(0);
  const [amountIndex, setAmountIndex] = useState(0);
  const [extraOptions, setExtraOptions] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("small")
const handleCheck = (e,options) => {
  const checked = e.target.checked
  if(checked){
    console.log("button  checked")
    console.log(options)
     setCheckedAmount(checkedAmount + options.amount)
     setExtraOptions(prev => [...prev, options] )
   
  } else{
    console.log("button not checked")
    setCheckedAmount(checkedAmount - options.amount)
    setExtraOptions(extraOptions.filter(i => i._id !== options._id))
 
  }
}
const handleAmount = () => {
const price = pizza.prices[amountIndex]
const totalAmount = price + checkedAmount
setPrice(totalAmount)
}

const handleDispatch = (item) => {
  const product = {
    img: item.img,
    title: item.title,
    price: price,
    extraOptions,
    size,
    quantity: quantity,
  }
dispatch(addCart(product))  
}

useEffect(() => {
  handleAmount()
}, [checkedAmount, amountIndex])


  return (
    <div className="flex-col justify-around w-full">
      {
        <div key={pizza._id} className=" xs:flex-col sm:flex w-full mt-12">
        <div
          className="flex items-center justify-center  sm:w-1/2 xs:w-full
         "
        >
          <div className="w-full  h-72 relative">
            <Image
              src={pizza.img}
              alt="pizza"
              layout="fill"
              objectFit="stretch"
            />
          </div>
        </div>
        <div className="  sm:w-1/2 xs:w-full  flex-col ">
          <h2 className="text-black text-center sm:text-left  sm:m-0 font-bold uppercase text-4xl xs:p-4 sm:p-0">
            {pizza.title}
          </h2>

          <span className="text-red-500 w-full  block text-center sm:text-left underline underline-red-300 text-2xl my-4 sm:my-0 sm:text-lg font-bold ">
            $ {price}
          </span>
          <p className="text-black-300 text-center sm:text-justify px-4 sm:px-0">{pizza.desc}</p>

          <h3 className="text-black-400 text-2xl text-center sm:text-left mt-8 sm:mt-0  font-bold sm:text-lg">
            Choose the size
          </h3>

          <div
            className="flex justify-between items-start w-full sm:w-1/2 mt-8 px-8 sm:px-0
              "
          >
            <div
              className="relative w-16 h-16 cursor-pointer"
              onClick={() => {
                setAmountIndex(0);
                setSize("small")
              }}
            >
              <Image
                src={pizza.img}
                layout="fill"
                alt="pizza"
                objectFit="stretch"
              />
              <span className="bg-green-800  text-white rounded-sm p-1 flex items-center justify-center absolute -top-2 -right-4">
                small
              </span>
            </div>

            <div
              className="relative  h-20 w-20 cursor-pointer"
              onClick={() => {
                setAmountIndex(1);
                setSize("medium")
              }}
            >
              <Image
                src={pizza.img}
                layout="fill"
                alt="pizza"
                objectFit="stretch"
              />
              <span className="bg-green-800  text-white rounded-sm p-1 flex items-center justify-center absolute -top-1 -right-7">
                Medium
              </span>
            </div>

            <div
              className="relative w-24 h-24  cursor-pointer"
              onClick={() => {
                setAmountIndex(2);
                setSize("large")
              }}
            >
              <Image
                src={pizza.img}
                layout="fill"
                alt="pizza"
                objectFit="stretch"
              />
              <span className="bg-green-800  text-white rounded-sm p-1 flex items-center justify-center absolute -top-1 -right-1">
                Large
              </span>
            </div>
          </div>
          <div className="flex-col mt-4 sm:mt-4 ">
            <h2 className="font-bold  text-center sm:text-left text-2xl sm:text-xl text-black capitalize ">
              Choose additional incredients
            </h2>
            <div className="flex-col space-y-4 px-4 sm:px-0 sm:flex sm:space-x-8 mt-4 ">
             
             {
              pizza.extraOptions.map(options => (
                <div className="flex space-x-2" key={options._id}>
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  name={options.text}
                  id={options.text}
                  onChange = {(e) => {
                    handleCheck(e,options)
                  }}
                />
                <label htmlFor={options.text} className="capitalize">{options.text}</label>
              </div>
              ))
             }
            </div>
          </div>
          <div className="flex pl-4 sm:pl-0 mt-8 sm:mt-4 space-x-2 items-center ">
              <input
              className="w-16 border-solid border-2 border-black p-2 h-10 rounded"
              type="number"
              defaultValue={1}
              value = {quantity}
              onChange = {
                (e) => {
                  setQuantity(e.target.value)
                }
              } />
              <button className="bg-red-500 rounded-md capitalize p-2 border-0 text-white" onClick={() => {
               handleDispatch(pizza)
              }}>
                  add cart
              </button>
          </div>
        </div>
      </div>
      }
    </div>
  );
}

export const getServerSideProps = async (context) => {

const {id} = context.query

try {
  const res = await axios.get(`http://localhost:3000/api/products/${id}`);
  console.log("this is the response", res.data);
      return {
        props: {
            pizza: res.data
        }
      }
    
} catch (error) {
  console.log(error.message)
}

}




