

import { motion } from 'framer-motion'

export default function PremiumButton({ 
  children, 
  onClick, 
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = '' 
}) {
  return (
    <motion.button
      type={type}
      className={`premium-btn premium-btn-${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </motion.button>
  )
}
