import { CalendarDays, Flame, Play, Sparkles, Trophy, Zap } from 'lucide-react'
import Mascot from '../components/Mascot'
import ProgressBar from '../components/ProgressBar'
import TrackIcon from '../components/TrackIcon'
import { tracks } from '../data/challenges'
import { monthlyContent } from '../data/monthlyContent'
import { useGameStore } from '../store/useGameStore'

export default function Home({ setScreen }) {
  const {
    userName,
    xp,
    level,
    streak,
    completedChallenges,
    selectedTrackId,
    selectTrack
  } = useGameStore()
  const xpToNextLevel = xp % 100
  const currentTrack = tracks.find((track) => track.id === selectedTrackId) ?? tracks[0]
  const latest = monthlyContent[0]

  function continueChallenge() {
    setScreen('challenge')
  }

  function openTrack(trackId) {
    selectTrack(trackId)
    setScreen('challenges')
  }

  return (
    <main className="screen-safe min-h-screen bg-gradient-to-b from-violet-50 via-pink-50 to-white px-5 text-slate-950">
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-base font-black text-violet-500">Olá, {userName}</p>
          <h1 className="mt-2 text-4xl font-black leading-tight tracking-tight">
            Aprenda programação jogando
          </h1>
          <p className="mt-3 max-w-64 text-sm leading-6 text-slate-500">
            Desafios curtos, progresso claro e trilhas pensadas para quem está começando.
          </p>
        </div>
        <div className="shrink-0 rounded-2xl bg-white/90 px-4 py-3 text-center font-black text-orange-500 shadow-soft">
          <Flame className="mx-auto" size={22} />
          <span className="text-sm">{streak} dias</span>
        </div>
      </header>

      <div className="-mt-2 flex items-end justify-between">
        <button
          type="button"
          onClick={continueChallenge}
          className="inline-flex min-h-14 items-center gap-2 rounded-2xl bg-violet-600 px-5 py-4 font-black text-white shadow-soft"
        >
          <Play size={19} fill="currentColor" />
          Continuar desafio
        </button>
        <Mascot mood="idle" className="w-36 drop-shadow-xl" />
      </div>

      <section className="mt-4 rounded-[1.75rem] bg-gradient-to-br from-violet-500 to-fuchsia-400 p-5 text-white shadow-soft">
        <div className="flex items-center gap-4">
          <div className="grid h-20 w-20 shrink-0 place-items-center rounded-[1.35rem] bg-white/20 text-4xl font-black">{level}</div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-white/85">Nível atual</p>
            <h2 className="mt-1 text-3xl font-black">{xp} XP</h2>
            <ProgressBar value={xpToNextLevel} className="mt-3" />
            <p className="mt-2 text-xs font-semibold text-white/85">Faltam {100 - xpToNextLevel} XP para o nível {level + 1}</p>
          </div>
        </div>
      </section>

      <section className="mt-5 grid grid-cols-3 gap-3">
        <Stat icon={<Trophy className="text-amber-500" />} value={completedChallenges.length} label="Concluídos" />
        <Stat icon={<Flame className="text-pink-500" />} value={streak} label="Sequência" />
        <Stat icon={<Zap className="text-emerald-500" />} value={xp} label="XP total" />
      </section>

      <section className="mt-7">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-2xl font-black">Trilhas disponíveis</h2>
          <button type="button" onClick={() => setScreen('challenges')} className="font-black text-violet-600">Ver todas</button>
        </div>
        <div className="grid gap-3">
          {tracks.map((track) => (
            <button
              key={track.id}
              type="button"
              onClick={() => openTrack(track.id)}
              className={`w-full rounded-[1.5rem] bg-white p-4 text-left shadow-soft ring-2 transition ${
                currentTrack.id === track.id ? 'ring-violet-200' : 'ring-transparent'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${track.color} text-slate-800`}>
                  <TrackIcon track={track} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-black">{track.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{track.difficulty} • {track.totalChallenges} desafios</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-[1.75rem] bg-white p-5 shadow-soft">
        <div className="flex items-center gap-2 text-violet-600">
          <CalendarDays size={20} />
          <h2 className="text-xl font-black">Novidades do mês</h2>
        </div>
        <div className="mt-4 rounded-2xl bg-violet-50 p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="font-black text-slate-900">{latest.title}</p>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">{latest.status}</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600">{latest.month} {latest.year} • {latest.description}</p>
        </div>
        <div className="mt-3 flex items-center gap-2 text-sm font-bold text-slate-500">
          <Sparkles size={16} className="text-amber-500" />
          Conteúdos novos entram mensalmente.
        </div>
      </section>
    </main>
  )
}

function Stat({ icon, value, label }) {
  return (
    <div className="rounded-2xl bg-white p-3 text-center shadow-soft">
      <div className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-slate-50">{icon}</div>
      <p className="mt-2 text-2xl font-black">{value}</p>
      <p className="text-xs font-semibold text-slate-500">{label}</p>
    </div>
  )
}
