import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  const [name,setName]=useState("");
  const [username,setUName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      navigate('/')
    }
  },[])

  const collectData= async ()=>{
    console.warn(name,email,password);
    let result =await fetch("http://localhost:5000/signup",{
      method:'post',
      body: JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result))
    navigate('/')
  }


  return (
    <div class=" container py-10 px-80 h-half w-half gradient-form h-screen w-100 inline-block shadow-black-xl">
     <h1 class ="text-5xl hover:italic">Register</h1>
    <form class= " w-full  grid items-center justify-center py-4 px-3 pt-4 focus:outline-none focus:ring shadow-lg  ">
     <div class="form-group max-w-md w-full space-y-2 ">
      <label for="exampleInputName" >Name</label>
      <input type="text" class="form-control shadow-xl" id="exampleInputName" aria-describedby="NameHelp"
       value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Full Name"/>
    </div>

    <br></br>

    <div class="form-group max-w-md w-full space-y-2">
      <label for="exampleInputName">Username</label>
      <input type="text" class="form-control shadow-xl" id="exampleInputUserName" aria-describedby="UNameHelp"
      value={username} onChange={(e)=>setUName(e.target.value)} placeholder="Enter Username"/>
    </div>

    <br></br>

    <div class="form-group max-w-md w-full space-y-2">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control shadow-xl" id="exampleInputEmail1" aria-describedby="emailHelp"
      value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <br></br>

    <div class="form-group max-w-md w-full space-y-2">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control shadow-xl" id="exampleInputPassword1" 
      value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
    </div>

    <br></br>

    <div class="form-check max-w-md w-full space-y-0 space-x-2">
      <input type="checkbox" class="form-check-input shadow-xl" id="exampleCheck1"/>
      <label class="form-check-label shadow-xl" for="exampleCheck1">Check me out</label>
    </div>

    <br></br>

    <button 
    onClick={collectData}
     type="button"
      class="btn btn-primary left-100 inset-y-0 flex items-center pl-3 shadow-lg">Submit</button>
  </form>
  </div>
  );
};
  
export default SignUp;