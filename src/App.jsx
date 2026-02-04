import React from 'react'
import Home from './files/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from './files/Search'
import Playlist from './files/Playlist'
import Liked from './files/Liked'
import Nav from './components/Nav'

function App() {
  return (
    <BrowserRouter>
    <Nav/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/playlist' element={<Playlist/>}/>
    <Route path='/liked' element={<Liked/>}/>
    
    </Routes> 
    </BrowserRouter>  
  )
}

export default App