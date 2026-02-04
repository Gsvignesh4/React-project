import React, { useContext } from 'react'
import { songsData } from '../songs'
import { datacontext } from '../context/UserContext'
import { IoPlay } from "react-icons/io5";
import { MdOutlinePause } from "react-icons/md";


function Player() {
    let {playingSong,playSong,pauseSong,index}= useContext(datacontext)
  return (
    <div className='w-[100%] md:w-[60%] h-[80px] bg-white fixed bottom-[40px] md:bottom-0 
    rounded-t-[30px] shadow-lg flex pt-[10px] md:items-center  md:p-[15px]'>
        <div className="flex justify-start items-start gap-[14px] w-[70%] h-[100%] cursor-pointer pl-[30px] " >
        <div>
          <img src={songsData[index].image} alt="" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-lg object-cover"/>
        </div>
        <div className='text-[10px] md:text-[15px]'>
            <div className='text-black text-[1.5em] font-semibold '>{songsData[index].name}</div>
            <div className='text-gray-700 text-[0.9em] font-semibold '>{songsData[index].singer}</div>
        </div>
    </div>

    <div className='w-[20%] h-[100%] md:flex justify-center items-center'>
    {
    !playingSong ?
        <div className='w-[38px] h-[38px] rounded-full bg-black text-white flex 
        justify-center items-center hover:bg-gray-600 transition-all cursor-pointer' onClick={()=>playSong()}><IoPlay /></div>
        :
        <div className='w-[38px] h-[38px] rounded-full bg-black text-white flex justify-center 
        items-center hover:bg-gray-600 transition-all cursor-pointer' onClick={()=>pauseSong()}><MdOutlinePause /></div>
    }
    </div>
    </div>
  )
}

export default Player   