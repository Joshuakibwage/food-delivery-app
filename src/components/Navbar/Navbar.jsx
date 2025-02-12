import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/frontend_assets/logoipsum-340.svg"
import basket from "../../assets/frontend_assets/basket_icon.png"
import Button from "../Button";

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  }
  
  return (
    <nav className="w-full">
        <div className="w-[90%] flex justify-between items-center mx-auto py-6">
            <div className="w-full flex justify-between items-center">
              <img 
                  src={logo} 
                  alt="logo" 
                  className=""
              />
              <ul className="md:flex gap-6 hidden">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">Menu</li>
                  <li className="cursor-pointer">Mobile App</li>
                  <li className="cursor-pointer">Contact Us</li>
              </ul>
              <div className="md:flex gap-8 items-center hidden">
                <CiSearch 
                  size={30}
                  className=""
                />
                <div className="relative">
                  <img 
                    src={basket} 
                    alt="basket" 
                    className="cursor-pointer"
                  />
                  <div className="absolute min-w-[10px] min-h-[10px] bg-red-400 rounded-full top-[-8px]
                  right-[-8px]"></div>
                </div>
                <Button 
                  label="Sign In"
                  className="border border-[#49557e] px-6 py-2 rounded-full cursor-pointer hover:bg-[#fff4f2]
                  transition delay-200 ease-in-out"
                />
              </div>
              <button className="flex md:hidden hover:cursor-pointer" onClick={toggleNav}>
                {nav ? (
                  <IoMdClose size={30} />
                ) : (
                  < MdMenu size={30} />
                )}
              </button>
            </div>
        </div>
        {/* mobile menu */}
        <div>
          {nav ? (
            <div className="flex flex-col md:hidden top-0 right-0 w-full h-screen items-center
            ">

              <ul className="flex flex-col gap-6 text-2xl ">
                  <li onClick={toggleNav} className="hover:cursor-pointer">Home</li>
                  <li onClick={toggleNav} className="hover:cursor-pointer">Menu</li>
                  <li onClick={toggleNav} className="hover:cursor-pointer">Mobile App</li>
                  <li onClick={toggleNav} className="hover:cursor-pointer">Contact Us</li>
              </ul>
              <div className="flex mt-16 gap-8 items-center md:hidden">
                <CiSearch 
                  size={30}
                  className="hover:cursor-pointer"
                  onClick={toggleNav}
                />
                <img 
                  src={basket} 
                  alt="basket" 
                  className="hover:cursor-pointer"
                  onClick={toggleNav}
                />
                <Button 
                  onClick={toggleNav}
                  label="Sign In"
                  className="border border-[#49557e] px-6 py-2 rounded-full cursor-pointer hover:bg-[#fff4f2]
                  transition delay-200 ease-in-out hover:cursor-pointer "
                />
              </div>
            </div>
          ) : null}
        </div>

    </nav>
  )
}

export default Navbar