

import { useState, useEffect } from 'react'

export default function useScrollSpy(navItems) {
  const [activeSection, setActiveSection] = useState(navItems[0]?.id || 'home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.querySelector(item.href)
      }))

      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        if (section.element) {
          const offsetTop = section.element.offsetTop
          const offsetBottom = offsetTop + section.element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  return activeSection
}
