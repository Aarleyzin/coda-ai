export const monthlyContent = [
  {
    month: 'Maio',
    year: 2026,
    title: 'Fundamentos para começar bem',
    description: 'Primeira leva de desafios curtos para lógica, JavaScript, Python, SQL, Git, APIs e AWS.',
    newLessons: ['Primeiro algoritmo', 'Variáveis em JavaScript', 'SELECT básico', 'Cloud Computing'],
    newTracksOrChallenges: ['Trilha Lógica de programação', 'Trilha APIs', 'Trilha AWS Básico'],
    status: 'publicado'
  },
  {
    month: 'Junho',
    year: 2026,
    title: 'Mais prática com código real',
    description: 'Novos desafios de arrays, funções, filtros SQL e comandos Git do dia a dia.',
    newLessons: ['Arrays em JavaScript', 'Listas em Python', 'GROUP BY no SQL'],
    newTracksOrChallenges: ['Mini-projeto de API', 'Checklist GitHub para iniciantes'],
    status: 'em breve'
  }
]

export function getPublishedMonthlyContent() {
  return monthlyContent.filter((item) => item.status === 'publicado')
}
