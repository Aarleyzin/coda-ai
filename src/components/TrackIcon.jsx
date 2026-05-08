import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faGitAlt, faJs, faPython } from '@fortawesome/free-brands-svg-icons'
import { faBrain, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'

const iconMap = {
  logic: faBrain,
  javascript: faJs,
  python: faPython,
  sql: faDatabase,
  git: faGitAlt,
  apis: faCode,
  aws: faAws
}

export default function TrackIcon({ track, size = 'lg' }) {
  return (
    <FontAwesomeIcon
      icon={iconMap[track.id] ?? faCode}
      size={size}
      aria-hidden="true"
    />
  )
}
