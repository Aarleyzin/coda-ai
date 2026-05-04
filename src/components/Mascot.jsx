import { motion } from 'framer-motion'

const mascotMap = {
  idle: `${import.meta.env.BASE_URL}assets/mascot/default.png`,
  focus: `${import.meta.env.BASE_URL}assets/mascot/focus.png`,
  happy: `${import.meta.env.BASE_URL}assets/mascot/default.png`,
  thinking: `${import.meta.env.BASE_URL}assets/mascot/focus.png`
}

export default function Mascot({ mood = 'idle', className = 'w-32' }) {
  return (
    <motion.img
      key={mood}
      src={mascotMap[mood]}
      alt="Mascote codaaí"
      className={`${className} block bg-transparent object-contain`}
      initial={{ opacity: 0, scale: 0.94, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    />
  )
}
