import Head from "next/head"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Link from "next/link"
import SliderComponent from "../utils/Slider"
import Body from "../utils/Body"
import axios from "axios"






export default function Home({ pizzaList }) {
  console.log(pizzaList)


 
  return (
   
   <div className="overflow-hidden">
  <SliderComponent />
    <Body pizzaList ={ pizzaList } />
   </div>
 
    )
}

export const getServerSideProps = async () => {
  try {
   const res = await axios.get("http://localhost:3000/api/products")
  return {
    props:{
      pizzaList: res.data
    }
   }
   
     
   } catch (error) {
     console.log(error.message)
   }
   
 }
