import { CheckCircle2, ChevronRight, Circle, Play } from 'lucide-react'
import TrackIcon from '../components/TrackIcon'
import { getChallengesByTrack, tracks } from '../data/challenges'
import { useGameStore } from '../store/useGameStore'

export default function Challenges({ setScreen }) {
  const {
    selectedTrackId,
    completedChallenges,
    selectTrack,
    selectChallenge,
    trackProgress
  } = useGameStore()
  const selectedTrack = tracks.find((track) => track.id === selectedTrackId) ?? tracks[0]
  const selectedChallenges = getChallengesByTrack(selectedTrack.id)
  const selectedProgress = trackProgress[selectedTrack.id]?.progress ?? 0

  function openChallenge(challengeId) {
    selectChallenge(challengeId)
    setScreen('challenge')
  }

  return (
    <main className="screen-safe min-h-screen bg-gradient-to-b from-violet-50 via-pink-50 to-white px-5 text-slate-950">
      <header>
        <p className="font-black text-violet-500">Escolha sua rota</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight">Desafios</h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">Selecione uma trilha e pratique em pequenas missões.</p>
      </header>

      <section className="mt-6 flex gap-3 overflow-x-auto pb-2">
        {tracks.map((track) => {
          const progress = trackProgress[track.id]?.progress ?? 0
          const active = selectedTrack.id === track.id
          return (
            <button
              key={track.id}
              type="button"
              onClick={() => selectTrack(track.id)}
              className={`min-w-40 rounded-[1.5rem] bg-white p-4 text-left shadow-soft ring-2 transition ${
                active ? 'ring-violet-300' : 'ring-transparent'
              }`}
            >
              <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${track.color} text-slate-800`}>
                <TrackIcon track={track} />
              </div>
              <h2 className="mt-3 font-black">{track.title}</h2>
              <p className="mt-1 text-xs font-bold text-slate-500">{track.difficulty}</p>
              <div className="mt-3 h-2 rounded-full bg-violet-100">
                <div className="h-2 rounded-full bg-violet-600" style={{ width: `${progress}%` }} />
              </div>
            </button>
          )
        })}
      </section>

      <section className="mt-5 rounded-[1.75rem] bg-white p-5 shadow-soft">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-black text-violet-500">{selectedTrack.difficulty}</p>
            <h2 className="mt-1 text-2xl font-black">{selectedTrack.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">{selectedTrack.description}</p>
          </div>
          <span className="rounded-2xl bg-violet-50 px-3 py-2 text-sm font-black text-violet-600">{selectedProgress}%</span>
        </div>
      </section>

      <section className="mt-5 space-y-3">
        {selectedChallenges.map((challenge, index) => {
          const done = completedChallenges.includes(challenge.id)
          return (
            <button
              key={challenge.id}
              type="button"
              onClick={() => openChallenge(challenge.id)}
              className="w-full rounded-[1.5rem] bg-white p-4 text-left shadow-soft"
            >
              <div className="flex items-center gap-4">
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${done ? 'bg-emerald-100 text-emerald-600' : 'bg-violet-50 text-violet-600'}`}>
                  {done ? <CheckCircle2 /> : <Circle />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-black uppercase tracking-wide text-slate-400">Desafio {index + 1}</p>
                  <h3 className="mt-1 font-black">{challenge.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">+{challenge.reward} XP</p>
                </div>
                {done ? <ChevronRight className="text-slate-300" /> : <Play className="text-violet-500" fill="currentColor" />}
              </div>
            </button>
          )
        })}
      </section>
    </main>
  )
}
