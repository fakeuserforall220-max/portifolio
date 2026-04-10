'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PremiumCheckbox({ label, onChange, checked: controlledChecked, defaultChecked = false }) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const isControlled = controlledChecked !== undefined
  const isChecked = isControlled ? controlledChecked : internalChecked

  const handleChange = () => {
    const newValue = !isChecked
    if (!isControlled) {
      setInternalChecked(newValue)
    }
    onChange?.(newValue)
  }

  return (
    <label className="premium-checkbox-container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        aria-label={label}
      />
      <motion.div
        className="premium-checkmark"
        animate={{
          scale: isChecked ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  )
}
