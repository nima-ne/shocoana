import React from 'react';
import Input from './Input';  

export default function SignupF( {handleChange} ) {
  return (
    <>
      <div>
        <h2 className="text-center m-[40px] text-3xl text-white">Signup</h2>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <Input
            className="bg-black text-white w-[50%] text-center rounded-[20px] p-[15px] box-border"
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={handleChange}
          />
          <Input
            className="bg-black text-white w-[50%] text-center rounded-[20px] p-[15px] box-border"
            type="email"
            placeholder="Add your Email"
            name="lastName"
            onChange={handleChange}
          />
          <Input
            className="bg-black text-white w-[50%] text-center rounded-[20px] p-[15px] box-border"
            type="password"
            placeholder="your password"
            name="lastName"
            onChange={handleChange}
          />
          <Input
            className="bg-black text-white w-[50%] text-center rounded-[20px] p-[15px] box-border"
            type="password"
            placeholder="retype your password"
            name="lastName"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
