import React, { useState } from "react";
import Input from "./Input";
import { Link, Links } from "react-router-dom";
import LoginF from "./login";
import SignupF from "./Signup";

export default function form() {
  const [Login , setLogin] = useState(true)
  const [Signup , setSignup] = useState(false)

  const loginHandle = (event)=>{
    event.preventDefault();
    setLogin(true)
    setSignup(false)
  }

  const signupHandle = (event)=>{
    event.preventDefault();
    setSignup(true)
    setLogin(false)
  }

  return (
<>
    <Link to="/" className="bg-[#2b2b2b] w-[100%] block text-center text-white text-5xl p-[20px]">Shocoana</Link>

    <div className="bg-[#2b2b2b] w-[90%] p-[30px] box-border mx-auto my-[10%] rounded-[10px] md:w-[70%]">

<div className="bg-emerald-500 text-white w-[100%] p-[20px] box-border flex flex-row justify-between items-center rounded-[10px]" >

<button className="cursor-pointer text-xl font-bold md:text-3xl" onClick={loginHandle} >Login</button>
<button className="cursor-pointer text-xl font-bold md:text-3xl" onClick={signupHandle}>Signup</button>

</div>

<div className=""></div>

{Login?<LoginF/>:<SignupF/>}

    </div>
</>
  )
}
