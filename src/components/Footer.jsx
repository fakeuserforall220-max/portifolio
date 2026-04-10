

import { motion } from 'framer-motion'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-logo">Dharani Govardhan</h3>
            <p className="footer-tagline">Building modern web experiences</p>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <div className="footer-nav">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleClick(link.href)}
                    className="footer-link"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Connect</h4>
              <SocialLinks />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Dharani Govardhan. All rights reserved.
          </p>
          <p className="footer-credit">
            Designed & Built with passion
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ display: 'inline', marginLeft: '4px' }}>
              <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748z"/>
            </svg>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
