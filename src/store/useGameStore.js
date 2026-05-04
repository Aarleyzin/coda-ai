import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { challenges, tracks } from '../data/challenges'

const todayKey = () => new Date().toISOString().slice(0, 10)

const defaultProgress = {
  userName: 'Dev',
  xp: 0,
  level: 1,
  streak: 1,
  completed: [],
  completedChallenges: [],
  selectedTrackId: 'logic',
  selectedChallengeId: null,
  currentChallengeIndexByTrack: {},
  achievements: [],
  attempts: { total: 0, correct: 0 },
  lastAccessDate: null
}

function unique(list) {
  return Array.from(new Set(Array.isArray(list) ? list : []))
}

function calculateLevel(xp) {
  return Math.floor((Number(xp) || 0) / 100) + 1
}

function buildTrackProgress(completedIds) {
  return tracks.reduce((acc, track) => {
    const done = track.lessons.filter((lesson) => completedIds.includes(lesson.id)).length
    acc[track.id] = {
      done,
      total: track.lessons.length,
      progress: track.lessons.length ? Math.round((done / track.lessons.length) * 100) : 0
    }
    return acc
  }, {})
}

function nextAchievements(state) {
  const earned = new Set(state.achievements)
  if (state.completedChallenges.length >= 1) earned.add('first-challenge')
  if (state.completedChallenges.length >= 5) earned.add('five-challenges')
  if (state.streak >= 3) earned.add('three-day-streak')
  if (state.xp >= 100) earned.add('level-two')
  return Array.from(earned)
}

function normalizePersistedState(persistedState) {
  const source = persistedState?.state ?? persistedState ?? {}
  const completed = unique(source.completedChallenges ?? source.completed ?? [])
  const xp = Number(source.xp) || 0
  const selectedTrackId = tracks.some((track) => track.id === source.selectedTrackId) ? source.selectedTrackId : 'logic'

  return {
    ...defaultProgress,
    ...source,
    userName: source.userName || source.name || defaultProgress.userName,
    xp,
    level: calculateLevel(xp),
    streak: Number(source.streak) || defaultProgress.streak,
    completed,
    completedChallenges: completed,
    selectedTrackId,
    selectedChallengeId: source.selectedChallengeId ?? null,
    currentChallengeIndexByTrack: source.currentChallengeIndexByTrack ?? {},
    achievements: unique(source.achievements),
    attempts: {
      total: Number(source.attempts?.total) || completed.length,
      correct: Number(source.attempts?.correct) || completed.length
    },
    lastAccessDate: source.lastAccessDate ?? null
  }
}

export const achievementCatalog = [
  { id: 'first-challenge', title: 'Primeiro passo', description: 'Concluiu seu primeiro desafio.' },
  { id: 'five-challenges', title: 'Pegando ritmo', description: 'Concluiu 5 desafios.' },
  { id: 'three-day-streak', title: 'Sequencia acesa', description: 'Manteve 3 dias de pratica.' },
  { id: 'level-two', title: 'Subiu de nivel', description: 'Chegou ao nivel 2.' }
]

export const useGameStore = create(
  persist(
    (set, get) => ({
      ...defaultProgress,
      trackProgress: buildTrackProgress(defaultProgress.completedChallenges),
      registerAccess: () => {
        const state = get()
        const today = todayKey()
        if (state.lastAccessDate === today) return

        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        const yesterdayKey = yesterday.toISOString().slice(0, 10)
        const streak = state.lastAccessDate === yesterdayKey ? state.streak + 1 : Math.max(1, state.streak)

        set((current) => {
          const nextState = { ...current, streak, lastAccessDate: today }
          return { ...nextState, achievements: nextAchievements(nextState) }
        })
      },
      setUserName: (userName) => set({ userName: userName?.trim() || defaultProgress.userName }),
      selectTrack: (trackId) => {
        const track = tracks.find((item) => item.id === trackId) ?? tracks[0]
        set({ selectedTrackId: track.id, selectedChallengeId: null })
      },
      selectChallenge: (challengeId) => {
        const challenge = challenges.find((item) => item.id === challengeId)
        if (!challenge) return
        set({ selectedTrackId: challenge.trackId, selectedChallengeId: challenge.id })
      },
      recordAttempt: (isCorrect) => set((state) => ({
        attempts: {
          total: state.attempts.total + 1,
          correct: state.attempts.correct + (isCorrect ? 1 : 0)
        }
      })),
      completeChallenge: (challenge) => {
        const state = get()
        const alreadyDone = state.completedChallenges.includes(challenge.id)
        const reward = alreadyDone ? 0 : challenge.reward
        const completedChallenges = alreadyDone
          ? state.completedChallenges
          : [...state.completedChallenges, challenge.id]
        const current = state.currentChallengeIndexByTrack[challenge.trackId] ?? 0
        const nextState = {
          xp: state.xp + reward,
          level: calculateLevel(state.xp + reward),
          completed: completedChallenges,
          completedChallenges,
          currentChallengeIndexByTrack: {
            ...state.currentChallengeIndexByTrack,
            [challenge.trackId]: current + 1
          },
          selectedChallengeId: null,
          trackProgress: buildTrackProgress(completedChallenges)
        }
        const withAchievements = { ...state, ...nextState }
        set({ ...nextState, achievements: nextAchievements(withAchievements) })
        return reward
      },
      resetProgress: () => set((state) => ({
        ...defaultProgress,
        userName: state.userName,
        lastAccessDate: todayKey(),
        trackProgress: buildTrackProgress([])
      }))
    }),
    {
      name: 'codaai-progress-v2',
      storage: createJSONStorage(() => localStorage),
      version: 3,
      migrate: normalizePersistedState,
      merge: (persistedState, currentState) => {
        const merged = normalizePersistedState(persistedState)
        return {
          ...currentState,
          ...merged,
          achievements: nextAchievements(merged),
          trackProgress: buildTrackProgress(merged.completedChallenges)
        }
      }
    }
  )
)
