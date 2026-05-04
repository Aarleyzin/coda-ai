export function normalizeAnswer(value) {
  return String(value)
    .trim()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, ' ')
    .replace(/\s+;/g, ';')
}

export function validateAnswer(userAnswer, expectedAnswer) {
  const user = normalizeAnswer(userAnswer).toLowerCase()
  const expected = normalizeAnswer(expectedAnswer).toLowerCase()
  return user === expected || user.includes(expected)
}
