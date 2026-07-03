import { useState, useRef } from 'react'
import kontakimg from '../assets/kontak.png'
import { Mail, Phone, MapPin, Send, Check, Copy, Loader2 } from 'lucide-react'

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [copied, setCopied] = useState(false)

  // State untuk efek 3D tilt pada gambar
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const imgWrapRef = useRef(null)

  const handleMouseMove = (e) => {
    const el = imgWrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 12
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 12
    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        setFormData({ name: '', email: '', message: '' })
      }, 2500)
    }, 1200)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gantengnadrag@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const gridColor = darkMode ? 'rgba(168,85,247,0.15)' : 'rgba(139,92,246,0.12)'

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'example@gmail.com', action: handleCopyEmail, hint: copied ? 'Tersalin!' : 'Klik untuk salin' },
    { icon: Phone, label: 'Telepon', value: '+62 857 1387 0469', href: 'tel:+6285713870469', hint: 'Klik untuk telepon' },
    { icon: MapPin, label: 'Lokasi', value: 'Daerah Istimewa Yogyakarta, Indonesia', href: 'https://maps.google.com/?q=Yogyakarta', hint: 'Klik untuk buka peta' },
  ]

  const isValid = formData.name.trim() && formData.email.trim() && formData.message.trim()

  return (
    <section
      id="contact"
      style={{
        backgroundImage: `radial-gradient(${gridColor} 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
      }}
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-14" data-aos="fade-up">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-sm text-xs sm:text-sm font-medium mb-4"
            style={{
              backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.7)',
              borderColor: darkMode ? 'rgba(255,255,255,0.1)' : '#e9d5ff',
              color: darkMode ? '#e9d5ff' : '#7c3aed',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
            </span>
            KONTAK
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3" style={{ color: darkMode ? 'white' : '#1f2937' }}>
            Get In{' '}
            <span className="bg-linear-to-r from-purple-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
            Mari berbicara denganku! Aku terbuka untuk kolaborasi dan proyek baru.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Kiri: Gambar 3D + info kontak */}
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <div
              className="flex justify-center mb-10"
              style={{ perspective: '1200px' }}
            >
              <div
                ref={imgWrapRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative max-w-xs sm:max-w-sm w-full cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.x || tilt.y ? 1.05 : 1})`,
                  transition: tilt.x || tilt.y ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.23,1,0.32,1)',
                }}
              >
                {/* Glow bayangan yang bergerak mengikuti tilt */}
                <div
                  className="absolute -inset-6 rounded-3xl blur-2xl opacity-40 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7, #ec4899, #6366f1)',
                    transform: `translate(${tilt.y * 1.5}px, ${-tilt.x * 1.5}px)`,
                    transition: 'transform 0.15s ease-out',
                  }}
                />

                {/* Lingkaran dekorasi berputar di belakang gambar */}
                <div
                  className="absolute -inset-4 rounded-full opacity-30 pointer-events-none"
                  style={{
                    background: 'conic-gradient(from 0deg, #a855f7, #ec4899, #6366f1, #a855f7)',
                    animation: 'spin 6s linear infinite',
                    transform: 'translateZ(-40px)',
                  }}
                />

                {/* Gambar utama dengan animasi mengambang */}
                <img
                  src={kontakimg}
                  alt="Kontak"
                  className="relative w-full h-auto drop-shadow-2xl"
                  style={{
                    transform: 'translateZ(60px)',
                    animation: 'float3d 4s ease-in-out infinite',
                  }}
                />

                {/* Partikel titik dekorasi mengambang */}
                <div
                  className="absolute top-6 right-2 w-3 h-3 rounded-full bg-purple-400 opacity-70 pointer-events-none"
                  style={{ transform: 'translateZ(90px)', animation: 'floatParticle 3s ease-in-out infinite' }}
                />
                <div
                  className="absolute bottom-10 left-0 w-2 h-2 rounded-full bg-fuchsia-400 opacity-70 pointer-events-none"
                  style={{ transform: 'translateZ(80px)', animation: 'floatParticle 3.5s ease-in-out infinite reverse' }}
                />
                <div
                  className="absolute top-1/3 -left-3 w-2.5 h-2.5 rounded-full bg-violet-400 opacity-70 pointer-events-none"
                  style={{ transform: 'translateZ(70px)', animation: 'floatParticle 2.8s ease-in-out infinite' }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                const CardWrapper = item.href ? 'a' : 'button'
                return (
                  <CardWrapper
                    key={i}
                    {...(item.href ? { href: item.href, target: '_blank', rel: 'noreferrer' } : { onClick: item.action, type: 'button' })}
                    className="group/card flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer text-left w-full"
                    style={{ backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.7)', borderColor: darkMode ? 'rgba(255,255,255,0.1)' : '#e9d5ff' }}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <div className="w-11 h-11 flex items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-violet-500 shrink-0 transition-transform duration-300 group-hover/card:scale-110 group-hover/card:rotate-6">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium" style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>{item.label}</p>
                      <p className="text-sm sm:text-base font-semibold truncate" style={{ color: darkMode ? 'white' : '#1f2937' }}>{item.value}</p>
                    </div>
                    <span className="text-xs opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center gap-1 shrink-0" style={{ color: darkMode ? '#c4b5fd' : '#7c3aed' }}>
                      {item.label === 'Email' && (copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />)}
                      {item.hint}
                    </span>
                  </CardWrapper>
                )
              })}
            </div>
          </div>

          {/* Kanan: Form kontak */}
          <div
            className="order-1 lg:order-2 p-6 sm:p-8 rounded-2xl border backdrop-blur-sm relative overflow-hidden"
            style={{
              background: darkMode ? 'linear-gradient(to bottom right, #1f2937, #111827)' : 'linear-gradient(to bottom right, #ffffff, #f9fafb)',
              borderColor: darkMode ? '#374151' : '#e5e7eb',
            }}
            data-aos="fade-left"
          >
            {status === 'sent' && (
              <div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 backdrop-blur-md"
                style={{ backgroundColor: darkMode ? 'rgba(17,24,39,0.9)' : 'rgba(255,255,255,0.9)' }}
              >
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <p className="font-semibold text-lg" style={{ color: darkMode ? 'white' : '#1f2937' }}>Pesan Terkirim!</p>
                <p className="text-sm" style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>Terima kasih, aku akan segera membalas.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  required
                  className="w-full px-4 pt-5 pb-2 rounded-lg border outline-none transition-all duration-300 text-sm sm:text-base"
                  style={{
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                    borderColor: focused === 'name' ? '#a855f7' : darkMode ? 'rgba(255,255,255,0.1)' : '#e5e7eb',
                    boxShadow: focused === 'name' ? '0 0 0 3px rgba(168,85,247,0.15)' : 'none',
                    color: darkMode ? 'white' : '#1f2937',
                  }}
                />
                <label
                  className="absolute left-4 transition-all duration-200 pointer-events-none"
                  style={{
                    top: formData.name || focused === 'name' ? '6px' : '14px',
                    fontSize: formData.name || focused === 'name' ? '11px' : '14px',
                    color: focused === 'name' ? '#a855f7' : darkMode ? '#9ca3af' : '#6b7280',
                  }}
                >
                  Nama
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  required
                  className="w-full px-4 pt-5 pb-2 rounded-lg border outline-none transition-all duration-300 text-sm sm:text-base"
                  style={{
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                    borderColor: focused === 'email' ? '#a855f7' : darkMode ? 'rgba(255,255,255,0.1)' : '#e5e7eb',
                    boxShadow: focused === 'email' ? '0 0 0 3px rgba(168,85,247,0.15)' : 'none',
                    color: darkMode ? 'white' : '#1f2937',
                  }}
                />
                <label
                  className="absolute left-4 transition-all duration-200 pointer-events-none"
                  style={{
                    top: formData.email || focused === 'email' ? '6px' : '14px',
                    fontSize: formData.email || focused === 'email' ? '11px' : '14px',
                    color: focused === 'email' ? '#a855f7' : darkMode ? '#9ca3af' : '#6b7280',
                  }}
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required
                  rows={5}
                  maxLength={300}
                  className="w-full px-4 pt-5 pb-2 rounded-lg border outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                  style={{
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                    borderColor: focused === 'message' ? '#a855f7' : darkMode ? 'rgba(255,255,255,0.1)' : '#e5e7eb',
                    boxShadow: focused === 'message' ? '0 0 0 3px rgba(168,85,247,0.15)' : 'none',
                    color: darkMode ? 'white' : '#1f2937',
                  }}
                />
                <label
                  className="absolute left-4 transition-all duration-200 pointer-events-none"
                  style={{
                    top: formData.message || focused === 'message' ? '6px' : '14px',
                    fontSize: formData.message || focused === 'message' ? '11px' : '14px',
                    color: focused === 'message' ? '#a855f7' : darkMode ? '#9ca3af' : '#6b7280',
                  }}
                >
                  Pesan
                </label>
                <span className="absolute bottom-2 right-3 text-[11px]" style={{ color: darkMode ? '#6b7280' : '#9ca3af' }}>
                  {formData.message.length}/300
                </span>
              </div>

              <button
                type="submit"
                disabled={!isValid || status === 'sending'}
                className="relative overflow-hidden group inline-flex items-center justify-center gap-2 text-white bg-linear-to-r from-purple-500 to-violet-500 py-3 px-6 rounded-full text-base font-semibold hover:shadow-[0_0_40px_rgb(138,43,226,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/25 to-transparent" />
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 relative animate-spin" />
                    <span className="relative">Mengirim...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 relative group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    <span className="relative">Kirim Pesan</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float3d {
          0%, 100% { transform: translateZ(60px) translateY(0px); }
          50% { transform: translateZ(60px) translateY(-14px); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateZ(80px) translateY(0px); }
          50% { transform: translateZ(80px) translateY(-10px); }
        }
        @keyframes spin {
          from { transform: translateZ(-40px) rotate(0deg); }
          to { transform: translateZ(-40px) rotate(360deg); }
        }
      `}</style>
    </section>
  )
}

export default Contact