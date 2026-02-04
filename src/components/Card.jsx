import React, { useContext } from 'react'
import { songsData } from '../songs'
import { MdPlaylistAdd } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { datacontext } from '../context/UserContext';
import { useDispatch, useSelector } from 'react-redux';
import { AddSong, RemoveSong } from '../redux/PlaylistSlice';
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { AddLiked, RemoveLiked } from '../redux/LikedSlice';
import { GoHeartFill } from "react-icons/go";


function Card({name,image,singer,songIndex}) {
    let {playSong,index,setIndex}=useContext(datacontext)
    let dispatch=useDispatch()
    let gaana=useSelector(state=>state.playlist)
    const songExistInPlaylist=gaana.find((song)=>(song.songIndex==songIndex))
    let likedSong=useSelector(state=>state.liked)
    const songExistInLiked=likedSong.find((song)=>(song.songIndex==songIndex))

  return (
    <div className="w-[80%] h-[55px] md:h-[90px] bg-gray-800 rounded-md p-[4px] md:p-[8px] flex justify-center items-center hover:bg-gray-600 transition-all">
      <div className="flex justify-start items-center gap-[14px] w-[70%] h-[100%] cursor-pointer" onClick={()=>{
        setIndex(songIndex)
        playSong()
      }}>
        <div>
          <img src={image} alt="" className="w-[45px] max-h-[45px] md:max-h-[75px] md:w-[75px] rounded-md"/>
        </div>
        <div className='text-[10px] md:text-[15px]'>
            <div className='text-white text-[1.1em] font-semibold '>{name}</div>
            <div className='text-gray-400 text-[0.7em] font-semibold '>{singer}</div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[14px] w-[30%] h-[100%] text-[10px] md:text-[15px]">

        {!songExistInPlaylist && (<div onClick={()=>{
  dispatch(AddSong({name:name,image:image,singer:singer,songIndex:songIndex}))
}}>
<MdPlaylistAdd className='text-white text-[1.5em] cursor-pointer'/>
</div>)}


{songExistInPlaylist && (<div onClick={()=>{
dispatch(RemoveSong({songIndex}))
}}>
<MdOutlinePlaylistRemove className='text-white text-[1.5em] cursor-pointer'/>
</div>)}


{!songExistInLiked && (<div onClick={()=>{
  dispatch(AddLiked({name:name,image:image,singer:singer,songIndex:songIndex}))
}}>
<GoHeart className='text-white text-[1.3em] cursor-pointer '/>
</div>)}

{songExistInLiked && (<div onClick={()=>{
  dispatch(RemoveLiked({songIndex}))
}}>
<GoHeartFill className='text-white text-[1.3em] cursor-pointer '/>
</div>)}
      </div>
    </div>
  )
}

export default Card
