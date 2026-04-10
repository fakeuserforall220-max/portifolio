

import { motion } from 'framer-motion'
import { navItems } from '../utils/data'
import useScrollSpy from '../hooks/useScrollSpy'

const icons = {
  home: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" height="20" width="21">
      <path fill="inherit" d="M18.9999 6.01002L12.4499 0.770018C11.1699 -0.249982 9.16988 -0.259982 7.89988 0.760018L1.34988 6.01002C0.409885 6.76002 -0.160115 8.26002 0.0398848 9.44002L1.29988 16.98C1.58988 18.67 3.15988 20 4.86988 20H15.4699C17.1599 20 18.7599 18.64 19.0499 16.97L20.3099 9.43002C20.4899 8.26002 19.9199 6.76002 18.9999 6.01002ZM10.9199 16C10.9199 16.41 10.5799 16.75 10.1699 16.75C9.75988 16.75 9.41988 16.41 9.41988 16V13C9.41988 12.59 9.75988 12.25 10.1699 12.25C10.5799 12.25 10.9199 12.59 10.9199 13V16Z"/>
    </svg>
  ),
  projects: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20">
      <path fill="inherit" d="M21,7H3A1,1,0,0,0,2,8V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8A1,1,0,0,0,21,7ZM5,5H19a1,1,0,0,0,0-2H5A1,1,0,0,0,5,5ZM17,1H7A1,1,0,0,0,7,3H17a1,1,0,0,0,0-2Z"/>
    </svg>
  ),
  skills: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20">
      <path fill="inherit" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm0-14a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z"/>
    </svg>
  ),
  about: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20">
      <path fill="inherit" d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20ZM11,11h2v6H11Zm0-4h2V9H11Z"/>
    </svg>
  ),
  contact: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20">
      <path fill="inherit" d="M20,4H4A3,3,0,0,0,1,7V17a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V7A3,3,0,0,0,20,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L6.41,6ZM21,17a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L21,7.41Z"/>
    </svg>
  ),
}

export default function BottomNav() {
  const activeSection = useScrollSpy(navItems)

  const handleClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="bottom-nav-bar">
      {navItems.map((item) => (
        <label
          key={item.id}
          title={item.label}
          htmlFor={`bottom-nav-${item.id}`}
          className="nav-label"
        >
          <input
            type="radio"
            id={`bottom-nav-${item.id}`}
            name="bottom-nav"
            checked={activeSection === item.id}
            onChange={() => handleClick(item.href)}
            className="nav-input"
          />
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {icons[item.id]}
            {item.badge && (
              <span className="nav-badge">{item.badge}</span>
            )}
          </motion.div>
        </label>
      ))}
    </nav>
  )
}
