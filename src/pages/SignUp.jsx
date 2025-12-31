import React, { useState } from 'react'
import "../css/signup.css"
import { useNavigate } from 'react-router-dom'
const SignUp = () => {

     let [form,setForm] = useState({
        name:"",
        number:"",
        email:"",
        password:""
    })

    let nav = useNavigate()

    let handleChange=(e)=>{

        let name = e.target.name;
        let value = e.target.value;

        setForm({...form,
            [name]:value 
        })
    }
    
    let handleSubmit = (e) =>{
        e.preventDefault()

        let valid=true

        if(form.name.trim()==""){
            alert("name is empty")
            valid=false

        }
        else if(form.number.trim()==""){
            alert("mobile number is empty")
            valid=false
        }
        else if(form.email.trim()==""){
            alert("email is empty")
            valid=false
        }
        else if(form.password.trim()==""){
            alert("password is empty")
            valid=false
        }
        else if(form.password.trim().length !== 4){
            alert("password must be 4 digits")
            valid=false
    } 
    else if(valid){

        localStorage.setItem("name",form.name)
        localStorage.setItem("number",form.number)
        localStorage.setItem("email",form.email)
        localStorage.setItem("password",form.password)

        alert("submitted!!")
        nav("/login")
        
    }



    console.log(form)
        
    }

  return (
    <>

        <div className="signup">
      <h1>Sign Up</h1>
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
          placeholder="Enter mobile number"
          value={form.number}
          name="number"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Email"
          value={form.email}
          name="email"
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


export default SignUp
