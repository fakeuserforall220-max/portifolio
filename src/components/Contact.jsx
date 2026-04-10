'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import PremiumButton from './PremiumButton'
import PremiumCheckbox from './PremiumCheckbox'
import SocialLinks from './SocialLinks'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '', consent: false })
    
    setTimeout(() => setSubmitStatus(null), 3000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Let's Build Something Great</h2>
          <p className="section-subtitle">Have a project in mind? Want to collaborate? Drop me a message.</p>
        </motion.div>

        <div className="contact-content">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder=" "
              />
              <label className="form-label">Your Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder=" "
              />
              <label className="form-label">Your Email</label>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-input"
                placeholder=" "
              />
              <label className="form-label">Your Message</label>
            </div>

            <div className="form-consent">
              <PremiumCheckbox
                label="I agree to be contacted via email"
                checked={formData.consent}
                onChange={(checked) => setFormData(prev => ({ ...prev, consent: checked }))}
              />
            </div>

            <PremiumButton
              type="submit"
              variant="accent"
              disabled={isSubmitting || !formData.consent}
              className="submit-button"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2 10h16m-8-8l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </PremiumButton>

            {submitStatus === 'success' && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully!
              </motion.div>
            )}
          </motion.form>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Get in touch</h3>
            <p className="contact-email">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 4h14a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2"/>
                <path d="M19 6l-9 6-9-6" stroke="currentColor" strokeWidth="2"/>
              </svg>
              dharani@example.com
            </p>
            <SocialLinks />
          </motion.div>
        </div>
      </div>

      <div className="contact-background">
        <div className="contact-glow"></div>
      </div>
    </section>
  )
}
