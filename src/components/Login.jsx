import React, { useState } from "react";
import SignUp from "./Signup";
import {useNavigate} from 'react-router-dom';


const Login = () => {

    
    const [email, setEmail]= React.useState("");
    const [password,setPassword]= React.useState("");
    const navigate = useNavigate();
    
    const handleLogin = async () => {
      console.warn("email, password", email, password)
      let result = await fetch("http://localhost:5000/login", {
        method : 'post',
        body: JSON.stringify({email, password}),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      result = await result.json();
      console.warn(result)
     if(result.name){
      localStorage.setItem('user',JSON.stringify(result));
      navigate("/");
     }
     else{
      alert("Please enter correct details")
     }
    }
  
    // const collectData=()=>{
    //   console.warn(email,password)
    // }
  
    return(
        <>

<section class="h-full gradient-form bg-green-900 md:h-screen">
  <div class="container bg-green-900 py-12 px-6 h-full">
    <div class="flex justify-center bg-green-900 items-center flex-wrap h-full g-6 text-black-800">
      <div class="bg-green-900 xl:w-10/12">
        <div class="block bg-white bg-green-900 shadow-lg rounded-lg">
          <div class="lg:flex lg:flex-wrap g-0">
            <div class="lg:w-6/12 px-4 md:px-0">
              <div class="md:p-12 md:mx-6">
                <div class="text-center">
                  <img
                    class="mx-auto w-48"
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo"
                  />
                  <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">Welcome to BookGeeks!</h4>
                </div>
                <form>
                  <p class="mb-4">Please login to your account</p>
                  <div class="mb-4">
                    <input
                      type="email"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="password"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      value={password} onChange={(e)=>setPassword(e.target.value)}
                      placeholder="Password"
                    />
                  </div>
                  <div class="text-center pt-1 mb-12 pb-1">
                  
                    <button
                    onClick={handleLogin}
                      class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light">
                      Log in
                    </button>

                    <a class="text-red-500" href="#!">Forgot password?</a>
                  </div>

                  <div class="flex items-center justify-between pb-6">
                    <p class="mb-0 mr-2">Don't have an account?</p>
                    <button onClick={()=> navigate('/Signup')} className="Home-button"
                     type="button"
                      class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light">
                      SignUp
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
            //   style="
            //     background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
            //   "
            >
              <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                <h4 class="text-xl font-semibold mb-6">We are more than just a company</h4>
                <p class="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    );
};
export default Login;