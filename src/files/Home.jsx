import React, { useContext, useEffect, useState , useRef} from 'react'
import { songsData } from '../songs'
import musicImg from '../assets/musicanim.webp'
import { CgPlayTrackPrev } from "react-icons/cg";
import { IoPlay } from "react-icons/io5";
import { CgPlayTrackNext } from "react-icons/cg";
import { datacontext } from '../context/UserContext';
import { MdOutlinePause } from "react-icons/md";
import Card from '../components/Card';
import { MdKeyboardArrowDown } from "react-icons/md";
import Player from '../components/Player';

function Home() {

  let {audioRef,playingSong,playSong,pauseSong,nextSong,prevSong,index,setIndex}=useContext(datacontext)
  let [range,setRange]=useState(0)
  let progress = useRef(null)
  let [arrow,setArrow]=useState(false)

  useEffect(()=>{
    const updateProgress=()=>{
        let duration=audioRef.current.duration || 0
        let currentTime=audioRef.current.currentTime || 0
        let progressPercentage=(currentTime/duration)*100 || 0
        setRange(progressPercentage)
        if(progress.current){
            progress.current.style.width=`${progressPercentage}%`
        }
    }

    audioRef.current.addEventListener("timeupdate",updateProgress)
  })

  function handleRange(e){
    let newrange=e.target.value
    setRange(newrange)
    let duration=audioRef.current.duration
    audioRef.current.currentTime=(duration*newrange)/100
  }
  
  return (
    <div className="w-full h-screen bg-black flex relative">
      <MdKeyboardArrowDown className='absolute text-white top-[20px] left-[10%] text-[20px] md:hidden'onClick={()=>setArrow(prev=>!prev)}/>

      {!arrow?<>{/* LEFT */}
      <div className='w-full md:w-[50%] h-full flex justify-start items-center pt-[50px] md:pt-[120px] flex-col gap-[50px] md:gap-[25px]'>
        <h1 className='text-white font-semibold text-[18px]'>Now Playing</h1>

        <div className='w-[70%] max-w-[200px] h-[180px] md:h-[200px] object-fill rounded-md overflow-hidden relative'>
          <img src={songsData[index].image} alt="" className='w-[100%] h-[100%]'/>

          {playingSong ?
            <div className='w-full h-full bg-black absolute top-0 opacity-[0.5] flex justify-center items-center'>
              <img src={musicImg} alt="" className='w-[50%]' />
            </div>
          : null}
        </div>

        <div>
          <div className='text-white text-[18px] md:text-[20px] font-bold text-center'>
            {songsData[index].name}
          </div>
          <div className='text-gray-400 text-[11px] md:text-[12px] text-center'>
            {songsData[index].singer}
          </div>
        </div>

        <div className='w-[60%] flex justify-center items-center relative rounded-md'>
          <input
            type='range'
            className='appearance-none w-[100%] bg-gray-600 h-[3px] rounded-md'
            id='range'
            value={range}
            onChange={handleRange}
          />
          <div className='bg-white h-[100%] absolute left-0 rounded-md' ref={progress}></div>
        </div>

        <div className='text-white flex justify-center items-center gap-[20px]'>
          <CgPlayTrackPrev className='w-[22px] h-[22px] hover:text-gray-600 transition-all cursor-pointer' onClick={()=>prevSong()} />

          {!playingSong ?
            <div className='w-[38px] h-[38px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer' onClick={()=>playSong()}>
              <IoPlay />
            </div>
          :
            <div className='w-[38px] h-[38px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer' onClick={()=>pauseSong()}>
              <MdOutlinePause />
            </div>
          }

          <CgPlayTrackNext className='w-[22px] h-[22px] hover:text-gray-600 transition-all cursor-pointer' onClick={()=>nextSong()} />
        </div>
      </div>

      {/* RIGHT */}
      <div className='w-[100%] md:w-[50%] h-full md:flex flex-col hidden gap-5 pt-[100px] justify-start overflow-auto pb-[20px]'>
        {songsData.map((song)=>(
            <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.id-1}/>
        ))}
      </div></>
      :
      <div className='w-[100%] md:w-[50%] h-[70%] justify-start items-center flex flex-col gap-5 mt-[60px] overflow-auto pb-[50px] relative'>
        <Player/>
        {songsData.map((song)=>(
            <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.id-1}/>
        ))}
      </div>}
      
      

    </div>
  )
}

export default Home
