import { useState, useEffect } from 'react'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import vercel from '../assets/vercel.png'
import { ArrowUp, Heart, Mail } from 'lucide-react'

const Footer = ({ darkMode }) => {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialIcons = [
    { icon: instagram, alt: 'Instagram', href: 'https://www.instagram.com/frdnbcthr_?igsh=MTR2NzJ0MGx3dTY2Mw%3D%3D&utm_source=qr' },
    { icon: github, alt: 'GitHub', href: 'https://github.com/fardanbachtiar' },
    { icon: linkedin, alt: 'LinkedIn', href: '#' },
    { icon: vercel, alt: 'vercel', href: 'https://vercel.com/fardanbachtiars-projects' },
  ]

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Tentang', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Project', href: '#project' },
    { label: 'Sertifikasi', href: '#sertifikasi' },
    { label: 'Kontak', href: '#contact' },
  ]

  const gridColor = darkMode ? 'rgba(168,85,247,0.15)' : 'rgba(139,92,246,0.12)'

  return (
    <footer style={{
                    backgroundImage: `radial-gradient(${gridColor} 1px, transparent 1px)`,
                    backgroundSize: "28px 28px",
                }}>
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-64 bg-purple-600 opacity-10 rounded-full blur-3xl" />

      <button
        onClick={scrollToTop}
        aria-label="Kembali ke atas"
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center bg-linear-to-r from-purple-500 to-violet-500 text-white shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300 hover:-translate-y-1 ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.08)' : '#e5e7eb' }}>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3">
              <span className="bg-linear-to-r from-purple-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
                Draf
              </span>
            </h3>
            <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0" style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
              Membangun pengalaman digital yang rapi, fungsional, dan enak dipandang, satu proyek dalam satu waktu.
            </p>

            <div className="flex justify-center md:justify-start gap-3 mt-5">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.href} aria-label={social.alt} target="_blank" rel="noreferrer" className="p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:rotate-6" style={{ backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                  <img src={social.icon} alt={social.alt} className={darkMode ? 'w-5 h-5 object-contain' : 'w-5 h-5 object-contain filter brightness-75'} />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: darkMode ? 'white' : '#1f2937' }}>
              Navigasi
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm inline-flex items-center gap-1.5 group transition-colors duration-300" style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                    <span className="w-0 group-hover:w-3 h-px bg-purple-500 transition-all duration-300" />
                    <span className="group-hover:text-purple-400 transition-colors duration-300">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: darkMode ? 'white' : '#1f2937' }}>
              Hubungi Saya
            </h4>
            <a href="mailto:fardan@example.com" className="inline-flex items-center gap-2 text-sm mb-4 hover:text-purple-400 transition-colors duration-300" style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
              <Mail className="w-4 h-4" />
              gantengnadragl@gmail.com
            </a>
            <div>
              <a href="#contact" className="inline-block group">
                <button className="relative overflow-hidden inline-flex items-center justify-center text-white bg-linear-to-r from-purple-500 to-violet-500 py-2.5 px-6 rounded-full text-sm font-semibold hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/25 to-transparent" />
                  <span className="relative">Mari Berkolaborasi</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-sm" style={{ color: darkMode ? '#6b7280' : '#9ca3af' }}>
          <p>&copy; {new Date().getFullYear()} Frdnbcthr. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Dibuat dengan <Heart className="w-3.5 h-3.5 text-purple-500 fill-purple-500 animate-pulse" /> menggunakan React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer