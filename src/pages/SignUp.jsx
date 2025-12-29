import React, { useState } from 'react'
import "../css/signup.css"
const SignUp = () => {

     let [form,setForm] = useState({
        name:"",
        password:""
    })

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
            alert("name empty")
            valid=false

        }
        else if(form.password.trim()==""){
            alert("password empty")
            valid=false
        }
        else if(form.password.trim().length !== 4){
            alert("password must be 4 digits")
            valid=false
    } 
    else if(valid){

        localStorage.setItem("name",form.name)
        localStorage.setItem("password",form.password)

        alert("submitted!!")
        
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
          placeholder="Enter Password"
          value={form.password}
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>

    {/* <h1 className='text-center '>
        Sign Up
    </h1>

    <form onSubmit={handleSubmit} >


        Enter name : <input type="text" value={form.name} name='name' onChange={handleChange} /> <br />
        Enter password : <input type="number" value={form.password} name='password' onChange={handleChange} /> <br />

        <button type='submit'>Submit</button>
    </form> */}
    </>
  )
}


export default SignUp
