import { BarChart3, Code2, Home, UserRound } from 'lucide-react'

const items = [
  { id: 'home', label: 'Inicio', icon: Home },
  { id: 'challenges', label: 'Desafios', icon: Code2 },
  { id: 'progress', label: 'Progresso', icon: BarChart3 },
  { id: 'profile', label: 'Perfil', icon: UserRound }
]

export default function BottomNav({ screen, setScreen }) {
  const activeScreen = screen === 'challenge' ? 'challenges' : screen

  return (
    <nav className="bottom-nav-safe fixed left-1/2 z-50 grid w-[92%] max-w-md -translate-x-1/2 grid-cols-4 rounded-[1.75rem] border border-white/80 bg-white/95 px-2 py-2 shadow-soft backdrop-blur-xl">
      {items.map((item) => {
        const Icon = item.icon
        const active = activeScreen === item.id
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setScreen(item.id)}
            className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-[0.72rem] font-bold transition ${
              active ? 'bg-violet-50 text-violet-600' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
            }`}
            aria-current={active ? 'page' : undefined}
          >
            <Icon size={22} strokeWidth={active ? 2.8 : 2.2} />
            <span>{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
