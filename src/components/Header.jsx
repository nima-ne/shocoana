import React from "react";
import Input from "./Input";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#7B3F00] sticky top-0 z-10 text-[#FFFDD0] shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-4">
    
        <div className="flex items-center gap-4 w-full md:w-auto mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold">
            Shocoana
          </Link>
          <Input
            className="bg-[#FFFDD0] text-gray-700 w-full md:w-[250px] px-4 py-2 rounded-full outline-none"
            type="text"
            placeholder="جستجو..."
          />
        </div>

     
        <nav className="flex gap-6 text-sm">
          <Link to="/FAQ" className="hover:text-yellow-200 transition">سوالات متداول</Link>
          <Link to="/login" className="hover:text-yellow-200 transition">ورود/عضویت</Link>
          <Link to="/contact" className="hover:text-yellow-200 transition">تماس با ما</Link>
        </nav>
      </div>
    </header>
  );
}
