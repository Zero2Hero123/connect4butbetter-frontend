import { createContext, useState } from 'react'
import './App.css'

import io, { SocketOptions } from 'socket.io-client'

import { Routes, Route } from 'react-router-dom'
import { Game } from './pages/Game'
import Home from './pages/Home'
import { Toaster } from './components/ui/toaster'

const backendUrl = import.meta.env.VITE_PROD_URL || 'ws://localhost:3000'
const socket = io(backendUrl)

export const socketCtx = createContext<typeof socket>(socket)
function App() {

  const [displayName, setName] = useState("")
  const [roomId,setRoom] = useState("")


  return <>
      <socketCtx.Provider value={socket}>
        <Routes>
          
          <Route path='/' element={<Home setName={setName} setRoom={setRoom} />} />
          <Route path='/game' element={<Game userName={displayName} roomId={roomId}/> } />

        </Routes>
      </socketCtx.Provider>
      <Toaster/>
  </>
}

export default App;