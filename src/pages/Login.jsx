import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/Login.css"

const Login = () => {
   let nav = useNavigate()

   let [form,setForm] = useState({
          name:"",
          password:""
      })

      let handleChange = (e) =>{

        let name=e.target.name
        let value=e.target.value
        
        setForm({...form,
            [name]:value 
        })
      }

      let handleSubmit = (e) =>{
        e.preventDefault()

        let Name = localStorage.getItem("name")
    let password = localStorage.getItem("password")

        if(form.name !== Name){
          alert("name is wrong")
        }
        else if(form.password !== password){
          alert("password is wrong")
        }
        else{
          localStorage.setItem("isLogin","true");
          nav("/")
        }
       
      }
    
  return (
    <>

        <div className="login-container">
      <h1>Login </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={form.name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Password"
          value={form.password}
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>

    </>
  )
} 

export default Login
