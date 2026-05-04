export const monthlyContent = [
  {
    month: 'Maio',
    year: 2026,
    title: 'Fundamentos para comecar bem',
    description: 'Primeira leva de desafios curtos para logica, JavaScript, Python, SQL, Git, APIs e AWS.',
    newLessons: ['Primeiro algoritmo', 'Variaveis em JavaScript', 'SELECT basico', 'Cloud Computing'],
    newTracksOrChallenges: ['Trilha Logica de programacao', 'Trilha APIs', 'Trilha AWS Basico'],
    status: 'publicado'
  },
  {
    month: 'Junho',
    year: 2026,
    title: 'Mais pratica com codigo real',
    description: 'Novos desafios de arrays, funcoes, filtros SQL e comandos Git do dia a dia.',
    newLessons: ['Arrays em JavaScript', 'Listas em Python', 'GROUP BY no SQL'],
    newTracksOrChallenges: ['Mini-projeto de API', 'Checklist GitHub para iniciantes'],
    status: 'em breve'
  }
]

export function getPublishedMonthlyContent() {
  return monthlyContent.filter((item) => item.status === 'publicado')
}
