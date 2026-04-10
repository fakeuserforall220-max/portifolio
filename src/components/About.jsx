

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function About() {
  const stats = [
    { label: '1st Year AIML Student', value: '01' },
    { label: '6+ Live Websites', value: '06' },
    { label: 'Frontend Specialist', value: '02' },
    { label: 'UI/UX Enthusiast', value: '03' },
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Who I Am</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-main-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="profile-section">
              <div className="profile-avatar">
                <div className="avatar-circle">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="40" fill="url(#gradient1)"/>
                    <path d="M40 45c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zM40 50c-13.255 0-24 8.954-24 20h48c0-11.046-10.745-20-24-20z" fill="white" fillOpacity="0.9"/>
                    <defs>
                      <linearGradient id="gradient1" x1="0" y1="0" x2="80" y2="80">
                        <stop offset="0%" stopColor="#6366f1"/>
                        <stop offset="100%" stopColor="#8b5cf6"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="profile-text">
                <p className="about-paragraph">
                  I'm <span className="highlight">Dharani Govardhan</span>, a first-year AIML student with a deep passion for frontend development and modern web design.
                </p>
                <p className="about-paragraph">
                  I believe great websites should feel smooth, look beautiful, and solve real problems. I've built <span className="highlight">6+ live projects</span> focusing on clean UI, immersive interactions, and practical functionality.
                </p>
                <p className="about-paragraph">
                  When I'm not coding, I'm exploring <span className="highlight">AI/ML concepts</span>, studying design systems, or experimenting with new web technologies.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="stats-grid"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
