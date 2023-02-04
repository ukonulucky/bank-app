"use client"
import axios from "axios"
import React, {useState} from 'react'
import  Link  from "next/link"
import {useRouter} from "next/router"
import styles from "../styles/Register.module.css"

import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../redux/userSlice"


function Register(){
    const state = useSelector(state => state.user)
    const [details, setDetails] = useState({
        fullName: "",
        email: "",
        phoneNumber:"",
        password:""
    })
    const router = useRouter()
    const [error, setError] = useState("")
    const [network, networkError] = useState("")
    // const router = useRouter()
    const dispatch = useDispatch()
    const registerNewUser = async (e) => {
        e.preventDefault()
        const { phoneNumber, password, fullName, email } = details
        
        if (phoneNumber && password && fullName && email ) {
            try {
              
            const data = {phoneNumber, password, fullName, email}
            console.log(data)
               dispatch(registerUser(data))
                if (state.userInfo) {
                    router.push("/login")
                    alert("Registartion Successful")
                } 
                if (state.userInfo.status === 202 ) {
                    setError("user allready registered")
                  }
               
            } catch (error) {
                console.log(error)
              networkError(error.message)
          }
        

        }
    }

  return ( <div className={styles.register}>
          <div className={styles.register__container}>
              <h1>Sign-Up</h1>
              <form onSubmit={registerNewUser}>
                  <div className={styles.list}>
                  <span>Full Name:</span>
                  <input type="text" required
                      name="fullName"
                      value={details.fullName}
                      onChange={
                          e => setDetails({
                          ...details, fullName: e.target.value
                      })
                  } />
                </div>
                  <div className={styles.list}>
                   <span>E-Mail:</span>
                  <input type="email" required
                      name="email"
                      value={details.email}
                      onChange={
                          e => setDetails({
                          ...details, email: e.target.value
                      })
                  } />
                </div>
                  <div className={styles.list}>
                      <span>Phone Number:</span>
                   
                  <input type="number" required
                      name="phoneNumber"
                      value={details.phoneNumber}
                      onChange={
                          e => setDetails({
                          ...details, phoneNumber: e.target.value
                      })
                  } />
                  </div>
                  {error && <p className={styles.error}>{error}</p>}   
                 
                  <div className={styles.list}>
                      
                  <span>Password:</span>
                  <input type="password"
                      name="password"
                      value={ details.password }
                      required onChange={e => setDetails({
                          ...details, password: e.target.value
                      })} />
                       </div>
                <button className={styles.login__register}>Create An Account</button>
              </form>
             
              {network && <p className={styles.error}>{networkError}</p>}   
             
              <p>Allready have an account?  <Link href="/Login">Login</Link></p> 
          </div>
         
   </div>
  
  )
}


 export default Register