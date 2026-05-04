import { Flame, Target, Trophy, Zap } from 'lucide-react'
import Mascot from '../components/Mascot'
import ProgressBar from '../components/ProgressBar'
import { tracks } from '../data/challenges'
import { achievementCatalog, useGameStore } from '../store/useGameStore'

export default function Progress() {
  const { xp, level, completedChallenges, streak, attempts, trackProgress, achievements } = useGameStore()
  const xpToNextLevel = xp % 100
  const successRate = attempts.total ? Math.round((attempts.correct / attempts.total) * 100) : 0
  const recentAchievements = achievementCatalog.filter((achievement) => achievements.includes(achievement.id)).slice(-3)

  return (
    <main className="screen-safe min-h-screen bg-gradient-to-b from-violet-50 via-pink-50 to-white px-5 text-slate-950">
      <header className="flex items-start justify-between gap-3">
        <div>
          <p className="font-black text-violet-500">Seu painel</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight">Progresso</h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">Acompanhe o que voce ja praticou.</p>
        </div>
        <Mascot mood="idle" className="w-28 drop-shadow-xl" />
      </header>

      <section className="mt-5 rounded-[1.75rem] bg-gradient-to-br from-violet-500 to-fuchsia-400 p-5 text-white shadow-soft">
        <div className="flex items-center gap-4">
          <div className="grid h-20 w-20 shrink-0 place-items-center rounded-[1.35rem] bg-white/20 text-4xl font-black">{level}</div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-white/85">Nivel atual</p>
            <h2 className="mt-1 text-3xl font-black">{xp} XP</h2>
            <ProgressBar value={xpToNextLevel} className="mt-3" />
            <p className="mt-2 text-xs font-semibold text-white/85">Faltam {100 - xpToNextLevel} XP para o nivel {level + 1}</p>
          </div>
        </div>
      </section>

      <section className="mt-5 grid grid-cols-2 gap-3">
        <Stat icon={<Zap className="text-violet-500" />} value={xp} label="XP total" />
        <Stat icon={<Trophy className="text-amber-500" />} value={completedChallenges.length} label="Desafios concluidos" />
        <Stat icon={<Flame className="text-pink-500" />} value={streak} label="Sequencia atual" />
        <Stat icon={<Target className="text-emerald-500" />} value={`${successRate}%`} label="Taxa de acertos" />
      </section>

      <section className="mt-5 rounded-[1.75rem] bg-white p-5 shadow-soft">
        <h2 className="text-xl font-black">Progresso por trilha</h2>
        <div className="mt-4 space-y-4">
          {tracks.map((track) => {
            const progress = trackProgress[track.id]?.progress ?? 0
            const done = trackProgress[track.id]?.done ?? 0
            return (
              <div key={track.id}>
                <div className="flex items-center justify-between gap-3 text-sm font-black">
                  <span>{track.title}</span>
                  <span className="text-violet-600">{done}/{track.totalChallenges}</span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-violet-100">
                  <div className="h-full rounded-full bg-violet-600" style={{ width: `${progress}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mt-5 rounded-[1.75rem] bg-white p-5 shadow-soft">
        <h2 className="text-xl font-black">Conquistas recentes</h2>
        <div className="mt-4 space-y-3">
          {recentAchievements.length ? recentAchievements.map((achievement) => (
            <div key={achievement.id} className="rounded-2xl bg-amber-50 p-4">
              <p className="font-black text-amber-700">{achievement.title}</p>
              <p className="mt-1 text-sm text-amber-700/75">{achievement.description}</p>
            </div>
          )) : (
            <p className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-500">Conclua seu primeiro desafio para desbloquear conquistas.</p>
          )}
        </div>
      </section>
    </main>
  )
}

function Stat({ icon, value, label }) {
  return (
    <div className="rounded-2xl bg-white p-4 text-center shadow-soft">
      <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-slate-50">{icon}</div>
      <p className="mt-3 text-3xl font-black">{value}</p>
      <p className="text-xs font-bold leading-5 text-slate-500">{label}</p>
    </div>
  )
}
