

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function WheelSelector({ items, onSelect }) {
  const [selectedValue, setSelectedValue] = useState(items[0].value)

  const handleSelect = (value) => {
    setSelectedValue(value)
    onSelect?.(value)
  }

  const getAngle = (index, total) => {
    const baseAngle = 30
    const centerIndex = Math.floor(total / 2)
    return (index - centerIndex) * baseAngle
  }

  return (
    <div className="wheel-selector">
      <div className="hint-pop">TAP TO SPIN</div>
      <div className="radio-input">
        {items.map((item, index) => {
          const nextIndex = (index + 1) % items.length
          return (
            <label
              key={`trigger-${item.value}`}
              htmlFor={items[nextIndex].value}
              className="next-trigger"
              id={`trigger-for-${item.value}`}
            />
          )
        })}

        <div className="glass-overlay"></div>

        {items.map((item, index) => {
          const angle = getAngle(index, items.length)
          const isChecked = selectedValue === item.value

          return (
            <div key={item.value}>
              <input
                value={item.value}
                name="value-radio"
                id={item.value}
                type="radio"
                checked={isChecked}
                onChange={() => handleSelect(item.value)}
              />
              <motion.label
                className="wheel-label"
                htmlFor={item.value}
                style={{ '--angle': `${angle}deg` }}
                animate={{
                  opacity: isChecked ? 1 : 0.15,
                  filter: isChecked ? 'blur(0px)' : 'blur(2px)',
                }}
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              >
                <span className="num">{item.number}</span>
                <span className="label">{item.label}</span>
              </motion.label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
