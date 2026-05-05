import { Braces, Brain, Cloud, Code2, Database, FileCode2, GitBranch } from 'lucide-react'

const iconMap = {
  logic: Brain,
  javascript: Braces,
  python: FileCode2,
  sql: Database,
  git: GitBranch,
  apis: Code2,
  aws: Cloud
}

export default function TrackIcon({ track, size = 24 }) {
  const Icon = iconMap[track.id] ?? Code2

  return <Icon size={size} strokeWidth={2.4} aria-hidden="true" />
}
