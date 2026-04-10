

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import HamburgerMenu from './HamburgerMenu'
import PremiumButton from './PremiumButton'
import { navItems } from '../utils/data'
import useScrollSpy from '../hooks/useScrollSpy'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useScrollSpy(navItems)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <div className="navbar-logo">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="logo-text"
            onClick={() => handleClick('#home')}
          >
            Dharani.
          </motion.h1>
        </div>

        <div className="gliding-tabs-wrapper">
          <div className="gliding-tabs">
            {navItems.map((item) => (
              <div key={item.id} className="tab-wrapper">
                <input
                  type="radio"
                  id={`nav-${item.id}`}
                  name="nav-tabs"
                  checked={activeSection === item.id}
                  onChange={() => handleClick(item.href)}
                  className="tab-input"
                />
                <label
                  htmlFor={`nav-${item.id}`}
                  className="tab-label"
                  onClick={() => handleClick(item.href)}
                >
                  {item.label}
                  {item.badge && (
                    <span className="tab-badge">{item.badge}</span>
                  )}
                </label>
              </div>
            ))}
            <motion.span
              className="tab-glider"
              animate={{
                x: `${navItems.findIndex(item => item.id === activeSection) * 100}%`
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        <div className="navbar-actions">
          <ThemeToggle />
          <PremiumButton
            variant="primary"
            className="nav-cta"
            onClick={() => handleClick('#contact')}
          >
            Let's Talk
          </PremiumButton>
        </div>

        <HamburgerMenu navItems={navItems} />
      </div>
    </motion.nav>
  )
}
