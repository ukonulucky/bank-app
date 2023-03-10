import axios from "axios"
import React,{useState} from 'react'
// import {useNavigate, Link} from "react-router-dom"
import Link from "next/link"
import styles from "../styles/Register.module.css"
import { useDispatch } from "react-redux"

function Login() {
// seting state of the user
  const [details, setDetails] = useState({})

  //despatching an action from redux
  const dispatch = useDispatch()
   
  const [passwordError, setPasswordError] = useState("")
  const [phoneNumberError, setPhoneNumberError] = useState("")
    // const loginRef = useRef()
    // const navigate = useNavigate()
  const loginNewUser = async (e) => {
    e.preventDefault()
    setPasswordError("")
    setPhoneNumberError("")
       
      const  { password, phoneNumber } = details
       
        if (phoneNumber && password  ) {
          try {
            const data = {phoneNumber, password}
            const res = await axios.post("http://localhost:5000/user/login", data) 
            if (res.data && res.status === 201) {
            
              // dispatch(loginUser({...res.data}))
              // navigate("/", {replace:true})
              alert("Login Successful")
            }
            if (res.status === 202) {
              
              if (res.data.phoneNumberError) {
                setPhoneNumberError("incorrect Account number")
               }
               if (res.data.passwordError) {
                setPasswordError("incorrect password")
              }
            }
           
          } catch (error) {
           console.log(error.message)
          }

        }
    }
  return (
      <div className={styles.register}>
          <div className={styles.register__container}>
              <h1>Login</h1>
              <form onSubmit={loginNewUser}>
                  <div className={styles.register__list}>
            <span>Account Number:</span>
              
                  <input type="text" required
                      name="fullName"
                      value={details.phoneNumber}
                      onChange={
                          e => setDetails({
                          ...details, phoneNumber: e.target.value
                      })
                  } />
             
          </div>
          <p className="error">{phoneNumberError}</p>
              
                  <div className={styles.list}>
                   <span>Password:</span>
                  <input type="password" required
                      name="password"
                      value={details.password}
                      onChange={
                          e => setDetails({
                          ...details, password: e.target.value
                      })
                  } /> 
           
          </div>
          <p className={styles.error}>{ passwordError}</p>
                
                <button className={styles.login__register}>Sign In</button>
              </form>
              
             
              <p>Don't have an accout ? <Link href="/register">Register Now</Link></p> 
          </div>
         
   </div>
  )
}

export default Login
 