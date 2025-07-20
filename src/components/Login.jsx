import React from "react";
import Input from "./Input";

export default function LoginF({ handleChange }) {
  return (
    <>
      <div>
        <h2 className="text-center m-[40px] text-3xl text-white">login</h2>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <Input
            className="bg-black text-white w-[50%] text-center rounded-[20px] p-[15px] box-border"
            type="email"
            placeholder="Enter your Email"
            name="name"
            onChange={handleChange}
          />
          <Input
            className="bg-black text-white w-[50%] text-center rounded-[20px] p-[15px] box-border"
            type="password"
            placeholder="Enter your password"
            name="lastName"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
