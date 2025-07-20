import React, { useState } from "react";
import Input from "./Input";
import { Link, Links } from "react-router-dom";
import LoginF from "./login";
import SignupF from "./Signup";

// export default function Form() {
//   const [Login, setLogin] = useState(true);
//   const [Signup, setSignup] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setLogin(true);
//     setSignup(false);
//   };
//   const handleSignup = (e) => {
//     e.preventDefault();
//     setSignup(true);
//     setLogin(false);
//   };

//     const [data, setData] = useState({
//     name: "",
//     lastName: "",
//   });

//   const handleChange = (e) => {
//     setData((prevState) => {
//       return {
//         ...prevState,
//         [e.target.name]: e.target.value,
//       };
//     });
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     console.log(data);
//   };

//   return (
//     <>
//       <div className="w-[100%] bg-[#2b2b2b] text-center p-[20px]">
//         <Link to="/" className="text-white text-5xl">
//           Shocoana
//         </Link>
//       </div>

//       <div className="w-[50%] bg-[#2b2b2b] mx-auto my-[100px] rounded-[25px]">
//         <form onSubmit={handleClick}>
//           <div className="w-[100%] flex flex-row justify-center items-center gap-[8%] p-[20px] font-bold box-border text-[20px]">
//             <button onClick={handleLogin} className="text-white cursor-pointer">
//               Login
//             </button>
//             <button
//               onClick={handleSignup}
//               className="text-white cursor-pointer"
//             >
//               Signup
//             </button>
//           </div>

// <div  className="pb-[30px] box-border">
//             {Login ? <LoginF handleChange={handleChange}/> : <SignupF handleChange={handleChange}/>}
//                       <button type="submit" className="bg-green-600 text-white py-[20px] px-[40px] box-border rounded-[20px] mx-auto my-[80px] w-[40%]  block">Submit</button>
// </div>

//         </form>
//       </div>
//     </>
//   );
// }


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

    <div className="bg-[#2b2b2b] w-[70%] p-[30px] box-border mx-auto my-[10%]">

<div className="bg-emerald-500 text-white w-[100%] p-[20px] box-border flex flex-row justify-between items-center" >

<button className="cursor-pointer text-3xl" onClick={loginHandle} >Login</button>
<button className="cursor-pointer text-3xl" onClick={signupHandle}>Signup</button>

</div>

<div className=""></div>

{Login?<LoginF/>:<SignupF/>}

    </div>
</>
  )
}
