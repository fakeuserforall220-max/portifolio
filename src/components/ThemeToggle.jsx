'use client'

import useTheme from '@/hooks/useTheme'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <label className="day-night-switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      />
      <span className="slider">
        <span className="star star_1"></span>
        <span className="star star_2"></span>
        <span className="star star_3"></span>
        
        <svg className="cloud" viewBox="0 0 60 32" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="#fff" 
            d="M50,16c0-5.5-4.5-10-10-10c-1.4,0-2.7,0.3-3.9,0.8C34.4,3.3,30.6,1,26.3,1C20.3,1,15.3,5.6,14.5,11.4
            C9.8,12.5,6,16.5,6,21.5C6,27.3,10.7,32,16.5,32h31c4.7,0,8.5-3.8,8.5-8.5C56,19.1,53.4,16.3,50,16z"
          />
        </svg>
      </span>
    </label>
  )
}
