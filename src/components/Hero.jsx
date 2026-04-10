'use client'

import { motion } from 'framer-motion'
import PremiumButton from './PremiumButton'

export default function Hero() {
  const handleClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const roles = ['AIML Student', 'Frontend Developer', 'Creative Builder']

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <svg className="wave-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2C8.5 2 7.5 3 7.5 4.5C7.5 6 8.5 7 10 7C11.5 7 12.5 6 12.5 4.5C12.5 3 11.5 2 10 2Z" fill="currentColor"/>
              <path d="M10 8C7 8 4 10 4 13C4 16 7 18 10 18C13 18 16 16 16 13C16 10 13 8 10 8Z" fill="currentColor"/>
            </svg>
            Hi, I'm Dharani Govardhan
          </motion.div>

          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Crafting Immersive
            <br />
            <span className="gradient-text">Digital Experiences</span>
          </motion.h1>

          <motion.div
            className="hero-roles"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {roles.map((role, index) => (
              <span key={index} className="role-tag">
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            I design and build modern web experiences with cinematic UI, smooth interactions, and clean code. Currently exploring the intersection of AI/ML and creative frontend engineering.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <PremiumButton
              variant="primary"
              onClick={() => handleClick('#projects')}
            >
              View My Work
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </PremiumButton>
            
            <PremiumButton
              variant="secondary"
              onClick={() => handleClick('#contact')}
            >
              Get In Touch
            </PremiumButton>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="visual-container">
            <div className="floating-card card-1">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor"/>
                </svg>
              </div>
              <span className="card-text">6+ Projects</span>
            </div>

            <div className="floating-card card-2">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="currentColor"/>
                </svg>
              </div>
              <span className="card-text">AIML Focus</span>
            </div>

            <div className="tech-orbit">
              {['R', 'N', 'T', 'P'].map((tech, index) => (
                <div
                  key={index}
                  className="tech-icon"
                  style={{
                    transform: `rotate(${index * 90}deg) translateX(100px) rotate(-${index * 90}deg)`
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="center-glow"></div>
          </div>
        </motion.div>
      </div>

      <div className="hero-background">
        <div className="mesh-gradient"></div>
        <div className="grid-pattern"></div>
      </div>
    </section>
  )
}
