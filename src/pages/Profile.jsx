import { BadgeCheck, BookOpen, CalendarDays, Flame, RotateCcw, Smartphone, UserPen, Zap } from 'lucide-react'
import Mascot from '../components/Mascot'
import { getTrackById } from '../data/challenges'
import { monthlyContent } from '../data/monthlyContent'
import { achievementCatalog, useGameStore } from '../store/useGameStore'

export default function Profile({ setScreen }) {
  const {
    userName,
    setUserName,
    xp,
    level,
    streak,
    selectedTrackId,
    achievements,
    resetProgress
  } = useGameStore()
  const currentTrack = getTrackById(selectedTrackId)
  const unlockedAchievements = achievementCatalog.filter((achievement) => achievements.includes(achievement.id))

  function editName() {
    const nextName = window.prompt('Como voce quer aparecer no coda-aí?', userName)
    if (nextName !== null) setUserName(nextName)
  }

  function confirmReset() {
    const ok = window.confirm('Resetar seu progresso? Seu nome sera mantido, mas XP, desafios e conquistas serao reiniciados.')
    if (ok) resetProgress()
  }

  return (
    <main className="screen-safe min-h-screen bg-gradient-to-b from-violet-50 via-pink-50 to-white px-5 text-slate-950">
      <header className="rounded-[1.75rem] bg-white p-5 text-center shadow-soft">
        <Mascot mood="happy" className="mx-auto w-36 drop-shadow-xl" />
        <h1 className="mt-2 text-3xl font-black">{userName}</h1>
        <p className="mt-1 text-sm font-bold text-violet-500">Nivel {level} • {xp} XP</p>
        <div className="mt-5 grid grid-cols-3 gap-3">
          <MiniStat icon={<Zap size={18} />} value={xp} label="XP" />
          <MiniStat icon={<Flame size={18} />} value={streak} label="Dias" />
          <MiniStat icon={<BookOpen size={18} />} value={currentTrack.title} label="Trilha" />
        </div>
      </header>

      <section className="mt-5 grid grid-cols-2 gap-3">
        <button type="button" onClick={editName} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-violet-600 px-3 py-4 font-black text-white shadow-soft">
          <UserPen size={19} />
          Editar nome
        </button>
        <button type="button" onClick={confirmReset} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-3 py-4 font-black text-rose-500 shadow-soft">
          <RotateCcw size={19} />
          Resetar
        </button>
      </section>

      <section className="mt-5 rounded-[1.75rem] bg-gradient-to-br from-violet-500 to-fuchsia-400 p-5 text-white shadow-soft">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/20">
            <Smartphone size={24} />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl font-black">Adicionar coda-aí à tela inicial</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-white/85">
              Instale como PWA para abrir em tela cheia, com icone proprio e experiencia parecida com app nativo.
            </p>
          </div>
        </div>
        <div className="mt-4 rounded-2xl bg-white/15 p-4 text-sm font-semibold leading-6 text-white/90">
          No Chrome, use o menu de tres pontos. No Safari do iPhone, use compartilhar e depois Adicionar à Tela de Inicio.
        </div>
      </section>

      <section className="mt-5 rounded-[1.75rem] bg-white p-5 shadow-soft">
        <div className="flex items-center gap-2 text-violet-600">
          <BadgeCheck size={20} />
          <h2 className="text-xl font-black">Conquistas</h2>
        </div>
        <div className="mt-4 grid gap-3">
          {achievementCatalog.map((achievement) => {
            const unlocked = unlockedAchievements.some((item) => item.id === achievement.id)
            return (
              <div key={achievement.id} className={`rounded-2xl p-4 ${unlocked ? 'bg-amber-50' : 'bg-slate-50 opacity-70'}`}>
                <p className={`font-black ${unlocked ? 'text-amber-700' : 'text-slate-500'}`}>{achievement.title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">{achievement.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mt-5 rounded-[1.75rem] bg-white p-5 shadow-soft">
        <h2 className="text-xl font-black">Sobre o coda-aí</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          O coda-aí e um app mobile-first para aprender programacao com desafios curtos, trilhas guiadas e progresso salvo no navegador.
        </p>
      </section>

      <section className="mt-5 rounded-[1.75rem] bg-white p-5 shadow-soft">
        <div className="flex items-center gap-2 text-violet-600">
          <CalendarDays size={20} />
          <h2 className="text-xl font-black">Atualizacoes mensais de conteudo</h2>
        </div>
        <div className="mt-4 space-y-3">
          {monthlyContent.map((item) => (
            <div key={`${item.month}-${item.year}`} className="rounded-2xl bg-violet-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-black">{item.month} {item.year}</p>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-violet-600">{item.status}</span>
              </div>
              <p className="mt-1 font-black text-slate-800">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => setScreen('home')} className="mt-4 min-h-14 w-full rounded-2xl bg-violet-50 py-4 font-black text-violet-600">
          Ver novidades na Home
        </button>
      </section>
    </main>
  )
}

function MiniStat({ icon, value, label }) {
  return (
    <div className="min-w-0 rounded-2xl bg-slate-50 p-3">
      <div className="mx-auto grid h-9 w-9 place-items-center rounded-xl bg-white text-violet-600 shadow-sm">{icon}</div>
      <p className="mt-2 truncate text-sm font-black">{value}</p>
      <p className="text-xs font-bold text-slate-400">{label}</p>
    </div>
  )
}
