import React from 'react'
import Player from '../components/Player'
import { useSelector } from 'react-redux'
import Card from '../components/Card'


function Playlist() {
  let songs=useSelector(state=>state.playlist)
  return (
    <div className='w-full h-[100vh] bg-black flex justify-start items-center flex-col pt-[20px] md:pt-[70px] gap-[20px]'>
      <Player/>
      <h1 className='text-white font-semibold text-[20px]'>Playlist</h1>

      <div className='w-full h-[60%] md:h-[100%] flex flex-col justify-start items-center gap-[20px] overflow-auto'>
        {songs.map((song)=>(
          <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.songIndex}/>
        ))}


      </div>
    </div>
  )
}

export default Playlist