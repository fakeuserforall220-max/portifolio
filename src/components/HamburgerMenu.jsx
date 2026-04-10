

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function HamburgerMenu({ navItems }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <div className="hamburger-menu-wrapper">
      <input
        type="checkbox"
        className="hamburger-check"
        id="hamburger-check"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <label htmlFor="hamburger-check" className="hamburger-button">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </label>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <nav className="mobile-nav">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  className="mobile-nav-link"
                  onClick={() => handleClick(item.href)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                  {item.badge && (
                    <span className="mobile-badge">{item.badge}</span>
                  )}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
