'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import WheelSelector from './WheelSelector'
import { skills } from '../utils/data'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const categories = [
    { value: 'frontend', label: 'FRONTEND', number: '01' },
    { value: 'tools', label: 'TOOLS', number: '02' },
    { value: 'aiml', label: 'AI/ML', number: '03' },
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Tech Stack & Skills</h2>
        </motion.div>

        <div className="skills-content">
          <WheelSelector
            items={categories}
            onSelect={setActiveCategory}
          />

          <motion.div
            className="skills-grid"
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {skills[activeCategory]?.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-chip"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
