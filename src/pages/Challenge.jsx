import { useMemo, useState } from 'react'
import { ArrowLeft, Eraser, Lightbulb, Play, RotateCcw, Star } from 'lucide-react'
import Mascot from '../components/Mascot'
import { challenges, getChallengesByTrack, getTrackById } from '../data/challenges'
import { useGameStore } from '../store/useGameStore'
import { validateAnswer } from '../utils/validation'

export default function Challenge({ setScreen }) {
  const {
    xp,
    selectedTrackId,
    selectedChallengeId,
    currentChallengeIndexByTrack,
    completedChallenges,
    completeChallenge,
    recordAttempt
  } = useGameStore()
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [showHint, setShowHint] = useState(false)
  const [earned, setEarned] = useState(0)

  const track = getTrackById(selectedTrackId)
  const trackChallenges = getChallengesByTrack(track.id)
  const index = currentChallengeIndexByTrack[track.id] ?? 0
  const current = selectedChallengeId
    ? challenges.find((challenge) => challenge.id === selectedChallengeId) ?? trackChallenges[0]
    : trackChallenges[index % Math.max(trackChallenges.length, 1)] ?? challenges[0]
  const alreadyCompleted = completedChallenges.includes(current.id)
  const progress = useMemo(() => {
    const done = trackChallenges.filter((challenge) => completedChallenges.includes(challenge.id)).length
    return trackChallenges.length ? Math.round((done / trackChallenges.length) * 100) : 0
  }, [completedChallenges, trackChallenges])

  function testSolution() {
    const ok = validateAnswer(answer, current.answer)
    recordAttempt(ok)
    if (ok) {
      const reward = completeChallenge(current)
      setEarned(reward)
      setFeedback('success')
      return
    }
    setFeedback('error')
    setEarned(0)
  }

  if (feedback === 'success') {
    return <SuccessScreen setScreen={setScreen} earned={earned} challenge={current} alreadyCompleted={alreadyCompleted} />
  }

  return (
    <main className="screen-safe min-h-screen bg-gradient-to-b from-violet-50 via-pink-50 to-white px-5 text-slate-950">
      <header className="flex items-center justify-between gap-3">
        <button type="button" onClick={() => setScreen('challenges')} className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-violet-600 shadow-soft">
          <ArrowLeft />
        </button>
        <div className="min-w-0 flex-1 text-center">
          <p className="truncate text-sm font-black text-violet-500">{track.title}</p>
          <div className="mx-auto mt-2 h-2 w-40 overflow-hidden rounded-full bg-violet-100">
            <div className="h-full rounded-full bg-violet-600" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-violet-600 shadow-soft">XP {xp}</div>
      </header>

      <section className="mt-6 rounded-[1.75rem] bg-white p-5 shadow-soft">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-2xl bg-amber-50 px-3 py-2 text-sm font-black text-amber-600">
            <Star size={17} fill="currentColor" /> {alreadyCompleted ? 'Revisao' : 'Novo'}
          </span>
          <span className="rounded-2xl bg-violet-50 px-3 py-2 text-sm font-black text-violet-600">+{alreadyCompleted ? 0 : current.reward} XP</span>
        </div>
        <h1 className="text-3xl font-black tracking-tight">{current.title}</h1>
        <p className="mt-3 text-base leading-7 text-slate-600">{current.question}</p>

        {current.examples?.length > 0 && (
          <div className="mt-4 rounded-2xl bg-slate-50 p-4">
            <p className="font-black text-slate-700">Exemplos</p>
            <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-500">
              {current.examples.map((example) => <li key={example}>{example}</li>)}
            </ul>
          </div>
        )}

        {(showHint || feedback === 'error') && (
          <div className="mt-4 rounded-2xl bg-violet-50 p-4">
            <p className="font-black text-violet-600">Dica</p>
            <div className="mt-2 flex items-center gap-3">
              <Mascot mood="thinking" className="h-16 w-16" />
              <p className="text-sm leading-6 text-slate-600">{current.hint}</p>
            </div>
          </div>
        )}
      </section>

      <section className="mt-5 rounded-[1.75rem] bg-white p-5 shadow-soft">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="text-lg font-black text-violet-600">&lt;/&gt; Seu codigo</h2>
          <button
            type="button"
            onClick={() => setShowHint(true)}
            className="inline-flex items-center gap-2 rounded-2xl bg-violet-50 px-3 py-2 text-sm font-black text-violet-600"
          >
            <Lightbulb size={17} />
            Pedir dica
          </button>
        </div>
        <div className="overflow-hidden rounded-2xl bg-slate-950 shadow-inner">
          <textarea
            value={answer}
            onChange={(event) => {
              setAnswer(event.target.value)
              setFeedback(null)
            }}
            spellCheck="false"
            className="min-h-56 w-full resize-none bg-transparent p-4 font-mono text-sm leading-7 text-violet-100 outline-none placeholder:text-slate-500"
            placeholder={current.starterCode}
          />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => { setAnswer(''); setFeedback(null) }}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-50 py-4 font-black text-slate-600"
          >
            <RotateCcw size={19} /> Limpar
          </button>
          <button
            type="button"
            onClick={testSolution}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-500 py-4 font-black text-white shadow-soft"
          >
            <Play size={19} fill="currentColor" /> Testar
          </button>
        </div>
        {feedback === 'error' && (
          <p className="mt-4 rounded-2xl bg-rose-50 p-4 text-sm font-bold leading-6 text-rose-500">
            Ainda nao foi dessa. Compare sua resposta com a dica e tente de novo.
          </p>
        )}
      </section>
    </main>
  )
}

function SuccessScreen({ setScreen, earned, challenge, alreadyCompleted }) {
  const { xp, level } = useGameStore()
  return (
    <main className="screen-safe min-h-screen bg-gradient-to-b from-violet-50 via-pink-50 to-white px-5 text-center text-slate-950">
      <Mascot mood="happy" className="mx-auto w-56 drop-shadow-xl" />
      <h1 className="mt-2 text-4xl font-black">Muito bem!</h1>
      <p className="mt-3 text-base leading-7 text-slate-500">
        {alreadyCompleted ? 'Voce revisou um desafio ja concluido.' : 'Voce concluiu o desafio com sucesso.'}
      </p>
      <section className="mt-6 rounded-[1.75rem] bg-white p-6 shadow-soft">
        <p className="text-lg font-black text-violet-500">XP ganho</p>
        <h2 className="mt-2 text-6xl font-black text-violet-600">+{earned}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">{challenge.explanation}</p>
      </section>
      <section className="mt-5 rounded-[1.75rem] bg-gradient-to-r from-violet-600 to-fuchsia-500 p-5 text-white shadow-soft">
        <p className="text-lg font-black">Nivel {level}</p>
        <p className="mt-1 text-2xl font-black">{xp} XP total</p>
      </section>
      <button type="button" onClick={() => setScreen('challenge')} className="mt-5 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-500 py-4 text-lg font-black text-white shadow-soft">
        Proximo desafio
      </button>
      <button type="button" onClick={() => setScreen('challenges')} className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-4 text-lg font-black text-violet-600 shadow-soft">
        <Eraser size={19} />
        Ver desafios
      </button>
    </main>
  )
}
