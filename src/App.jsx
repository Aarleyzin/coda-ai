import { useEffect, useState } from 'react'
import BottomNav from './components/BottomNav'
import Challenge from './pages/Challenge'
import Challenges from './pages/Challenges'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Progress from './pages/Progress'
import { useGameStore } from './store/useGameStore'

export default function App() {
  const [screen, setScreen] = useState('home')
  const [showSplash, setShowSplash] = useState(true)
  const registerAccess = useGameStore((state) => state.registerAccess)

  useEffect(() => {
    registerAccess()
    const timer = setTimeout(() => setShowSplash(false), 700)
    return () => clearTimeout(timer)
  }, [registerAccess])

  if (showSplash) {
    return (
      <div className="grid min-h-screen place-items-center bg-gradient-to-b from-violet-400 via-pink-200 to-sky-100 p-8 text-center">
        <div>
          <img src={`${import.meta.env.BASE_URL}assets/icon/icon-1024.png`} alt="coda-aí" className="mx-auto h-36 w-36 rounded-[2rem] shadow-soft" />
          <h1 className="mt-6 text-5xl font-black text-white drop-shadow-sm">coda-aí</h1>
          <p className="mt-3 font-bold text-white/90">Aprenda. Pratique. Evolua.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app-shell mx-auto max-w-md bg-white shadow-2xl">
      {screen === 'home' && <Home setScreen={setScreen} />}
      {screen === 'challenges' && <Challenges setScreen={setScreen} />}
      {screen === 'challenge' && <Challenge setScreen={setScreen} />}
      {screen === 'progress' && <Progress />}
      {screen === 'profile' && <Profile setScreen={setScreen} />}
      <BottomNav screen={screen} setScreen={setScreen} />
    </div>
  )
}
