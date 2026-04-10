'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)

  const gradients = {
    default: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    cyan: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
    orange: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
    purple: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
    pink: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
    green: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
  }

  return (
    <motion.div
      className="project-card-parent"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-card" style={{ background: gradients[project.gradient] }}>
        <div className="card-logo">
          <span className="circle circle1"></span>
          <span className="circle circle2"></span>
          <span className="circle circle3"></span>
          <span className="circle circle4"></span>
          <span className="circle circle5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="card-svg">
              <path fill="currentColor" d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
          </span>
        </div>

        <div className="card-glass"></div>

        <div className="card-content">
          <span className="card-title">{project.title}</span>
          <span className="card-text">{project.description}</span>
        </div>

        <div className="card-bottom">
          <div className="social-buttons-container">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <button
                key={idx}
                className={`social-button social-button-${idx + 1}`}
                title={tech}
              >
                <span className="tech-badge">{tech.charAt(0)}</span>
              </button>
            ))}
          </div>

          <div className="view-more">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="view-more-button"
            >
              View Live
            </a>
            <svg className="card-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
