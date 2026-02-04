import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { RiPlayListLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import {Link} from "react-router-dom"
function Nav() {
  return (
    <div className="w-full h-[60px] bg-black fixed bottom-0 md:top-0 text-white 
    flex justify-around md:justify-center items-center gap-[50px] p-[20px] z-30 rounded-t-[30px] ">
     <Link to={"/"}><AiFillHome className='w-[18px] h-[18px]' /></Link>
     <Link to={"/search"}><IoSearch className='w-[18px] h-[18px]' /></Link>
     <Link to={"/playlist"}><RiPlayListLine className='w-[18px] h-[18px]'/></Link> 
     <Link to={"/liked"}><FaHeart className='w-[18px] h-[18px]' /></Link>
      
      
      


    </div>
  )
}

export default Nav