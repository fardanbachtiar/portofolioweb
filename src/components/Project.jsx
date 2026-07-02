import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'

const Project = ({ darkMode }) => {
  const projects = [
    { id: 1, title: 'Desain Poster', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing', image: project1, tags: ['Adobe Photoshop', 'Canva', 'Gemini AI'] },
    { id: 2, title: 'UI/UX Klinik Gigi', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing', image: project2, tags: ['Adobe Photoshop', 'Figma', 'Gemini AI'] },
    { id: 3, title: 'Anime Website', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing', image: project3, tags: ['HTML', 'CSS', 'Javascript'] },
    { id: 4, title: 'E-commerce UMKM', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing', image: project4, tags: ['PHP', 'Laravel', 'HTML', 'CSS', 'Javascript'] },
  ]

  const tagColors = {
    'Adobe Photoshop': { bg: '#31A8FF20', text: '#31A8FF' },
    'Canva': { bg: '#7D2AE820', text: '#a855f7' },
    'Gemini AI': { bg: '#8E75FF20', text: '#8E75FF' },
    'Figma': { bg: '#F24E1E20', text: '#F24E1E' },
    'HTML': { bg: '#E34F2620', text: '#E34F26' },
    'CSS': { bg: '#1572B620', text: '#3b82f6' },
    'Javascript': { bg: '#F7DF1E20', text: '#eab308' },
    'PHP': { bg: '#777BB420', text: '#818cf8' },
    'Laravel': { bg: '#FF291620', text: '#f87171' },
  }
  
  const theme = darkMode
        ? {
            gridColor: 'rgba(168,85,247,0.15)',
        }
        : {
            gridColor: 'rgba(139,92,246,0.12)',
        };
        

  return (
    <section id="project" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${theme.gridColor} 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4 tracking-wide" style={{ backgroundColor: darkMode ? '#1f2937' : '#f3e8ff', color: darkMode ? '#c4b5fd' : '#7c3aed' }}>
            PORTFOLIO
          </span>

          <h2 className="sm:text-4xl text-3xl font-bold mb-4" style={{ color: darkMode ? 'white' : '#1f2937' }}>
            My{' '}
            <span style={{ background: 'linear-gradient(to right,#a855f7,#6366f1)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              Project
            </span>
          </h2>

          <p className="max-w-xl mx-auto" style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode ? 'linear-gradient(to bottom right, #1f2937, #111827)' : 'linear-gradient(to bottom right, #ffffff, #f9fafb)',
                borderColor: darkMode ? '#374151' : '#e5e7eb',
              }}
              className="group relative rounded-2xl border hover:border-transparent transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-orange-500 via-purple-500 to-indigo-500 opacity-20 blur-sm" />
              </div>

              <div className="relative h-52 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-gray-900 text-sm font-semibold translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <FaEye />
                    Quick View
                  </a>
                </div>

                <span className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold text-white bg-black/40 backdrop-blur-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="p-5">
                <h3
                  className="text-lg font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-orange-500 group-hover:to-purple-500 transition-all duration-300"
                  style={{ color: darkMode ? 'white' : '#1f2937' }}
                >
                  {project.title}
                </h3>

                <p className="text-sm mb-4 leading-relaxed" style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => {
                    const c = tagColors[tag] || { bg: darkMode ? '#374151' : '#f3f4f6', text: darkMode ? '#d1d5db' : '#4b5563' }
                    return (
                      <span key={i} className="px-3 py-1 rounded-full text-xs font-medium border transition-transform duration-300 hover:scale-105" style={{ backgroundColor: c.bg, color: c.text, borderColor: c.text + '30' }}>
                        {tag}
                      </span>
                    )
                  })}
                </div>

                <div className="flex gap-2">
                  <a href="#" style={{ backgroundColor: darkMode ? '#374151' : '#f3f4f6', color: darkMode ? 'white' : '#374151' }} className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm font-medium rounded-lg hover:opacity-80 transition-all duration-300" data-aos="zoom-in" data-aos-delay="300">
                    <FaGithub className="text-sm" />
                    <span>Source</span>
                  </a>

                  <a href="#" style={{ background: 'linear-gradient(to right, #f97316, #a855f7)' }} className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-orange-500/30 hover:scale-[1.03] transition-all duration-300" data-aos="zoom-in" data-aos-delay="400">
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" style={{ background: 'linear-gradient(to right, #f97316, #a855f7)' }} className="inline-flex items-center font-semibold gap-2 px-8 py-4 text-white text-sm rounded-full hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300" data-aos="zoom-in" data-aos-delay="400">
            <FaGithub />
            <span>Lihat Semua Project</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Project