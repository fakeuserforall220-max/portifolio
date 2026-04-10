import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Dharani Govardhan - Frontend Developer & AIML Student',
  description: 'Portfolio of Dharani Govardhan - Building modern, immersive web experiences with clean code and elegant design.',
  keywords: 'Frontend Developer, AIML Student, React, Next.js, Web Developer, Portfolio',
  authors: [{ name: 'Dharani Govardhan' }],
  openGraph: {
    title: 'Dharani Govardhan - Frontend Developer',
    description: 'Building modern, immersive web experiences',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-light-bg-primary dark:bg-dark-bg-primary text-light-text-primary dark:text-dark-text-primary transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}
