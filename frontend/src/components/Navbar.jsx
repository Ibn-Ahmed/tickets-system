import { Link } from "react-router-dom"
import logo from "../assets/logo.jpg"
import { buttons } from "./ui/buttons"
import { useState } from "react"
export const Navbar = ()=>{
    const [isOpen,setIsOpen]=useState(false)
    return(
        <nav className="w-full flex justify-between flex-row items-center">
            <div className="w-full flex justify-between items-center h-16 ">
                <Link to="/" className=" w-6 h-6  flex-[0.4]">
                    <img src={logo} className="w-[10rem] h-[2.5rem] object-contain " />
                </Link>
                <div className="hidden md:block flex-[0.6]">
                    {buttons}
                </div>
            </div>
           
            <button className="md:hidden" onClick={()=>setIsOpen(!isOpen)}>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            {isOpen && (
                <div className="flex flex-col gap-y-2 md:hidden fixed right-0 top-[70px] border bg-slate-200 w-full transition duration-300">
                    {buttons}
                </div>
            )}
        </nav>
    )
}