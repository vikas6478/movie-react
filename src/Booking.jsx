import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./css/booking.css";

const Booking = () => {

  const { name } = useParams();
  const nav = useNavigate();

  const [form, setForm] = useState({
    movie: name,
    name:"",
    city:"",
    date:"",
    people:""
  });

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/movie",{...form,person:250}).then(()=>{
      nav("/admin");
    });
  }

  return (
    <>
    <form className="book-form" onSubmit={handleSubmit}>
      <h2>Booking for {name}</h2>
      Movie: <input value={form.movie} disabled /><br/>
      Name: <input type="text" name="name" placeholder="please enter your name" onChange={handleChange}/><br/>
      City: <br /> <input type="text" name="city" placeholder="please enter your name" onChange={handleChange}/><br/>
      Date: <input type="date" name="date"  onChange={handleChange}/><br/>
      People: <input type="number" name="people" placeholder="please enter people" onChange={handleChange}/><br/>
      <button >Confirm Booking</button>
    </form>
    </>
  );
};

export default Booking;
