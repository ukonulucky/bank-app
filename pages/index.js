import Head from "next/head"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Link from "next/link"
import axios from "axios"
import Register from "../components/Register"







export default function Home() {
  return (
   <div className="overflow-hidden">
   <Register />
    
   </div>
 
    )
}

// export const getServerSideProps = async () => {
//   try {
//    const res = await axios.get("http://localhost:3000/api/products")
//   return {
//     props:{
//       pizzaList: res.data
//     }
//    }
   
     
//    } catch (error) {
//      console.log(error.message)
//    }
   
//  }
