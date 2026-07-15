import about from '../assets/about.png'
import { ArrowRight, GraduationCap, Briefcase, FolderGit2 } from 'lucide-react'

const About = ({ darkMode }) => {
    const stats = [
        { value: '5+', label: 'Pendidikan', icon: GraduationCap },
        { value: '1+', label: 'Years Experience', icon: Briefcase },
        { value: '9', label: 'Project', icon: FolderGit2 },
    ];

    const theme = darkMode
        ? {
            text: 'text-gray-300',
            statLabel: 'text-gray-300',
            statCard: 'bg-white/5 border-white/10 hover:bg-white/10',
            button: 'text-white bg-purple-500/10 border-purple-500',
            gridColor: 'rgba(168,85,247,0.15)',
            chipBg: 'bg-gray-900/90 border-purple-500/40 text-purple-200',
        }
        : {
            text: 'text-gray-700',
            statLabel: 'text-gray-600',
            statCard: 'bg-white/70 border-purple-200 hover:bg-white',
            button: 'text-gray-800 bg-white/90 border-purple-500',
            gridColor: 'rgba(139,92,246,0.12)',
            chipBg: 'bg-white/90 border-purple-300 text-violet-700',
        };

    return (
        <section id='about' className='relative min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 py-16'>
            <div
                className='absolute inset-0 z-0'
                style={{
                    backgroundImage: `radial-gradient(${theme.gridColor} 1px, transparent 1px)`,
                    backgroundSize: '28px 28px',
                }}
            />
            <div className='relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
                <figure
                    data-aos='fade-up'
                    data-aos-delay='300'
                    className='flex flex-wrap justify-center gap-4 relative order-2 lg:order-1'
                >
                    <div className='relative w-72 h-72 lg:w-72 lg:h-72'>
                        <div
                            className='absolute -inset-4 lg:-inset-20 bg-linear-to-r from-[#ec4899] via-[#a855f7] to-[#22d3ee] rotate-45 star-shape z-0 animate-[spin_16s_linear_infinite]'
                            data-aos='zoom-in'
                            data-aos-delay='600'
                        ></div>
                        <img
                            src={about}
                            alt="Foto tentang saya"
                            className='absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl transition-all duration-300 hover:scale-105'
                            data-aos='zoom-in'
                            data-aos-delay='400'
                        />

                        {/* Floating chip, consistent signature element with Hero */}
                        <div className={`absolute -bottom-5 -right-4 sm:-right-8 px-4 py-2.5 rounded-xl border shadow-lg backdrop-blur-sm font-mono text-xs sm:text-sm ${theme.chipBg} animate-[bounce_4s_ease-in-out_infinite] z-10`}>
                            <span className='text-purple-400'>&lt;/&gt;</span> since 2020
                        </div>
                    </div>
                </figure>

                <article
                    data-aos='fade-left'
                    data-aos-delay='300'
                    className='text-center lg:text-left relative order-1 lg:order-2'
                >
                    <header>
                        <h1
                            className='text-3xl sm:text-4xl lg:text-4xl xl:text-5xl leading-tight font-bold mb-4 sm:mb-4 text-transparent bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text'
                            data-aos='fade-up'
                            data-aos-delay='400'
                        >
                            Tentang Saya
                        </h1>
                    </header>
                    <p
                        className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed bg-linear-to-r from-purple-900/10 to-purple-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-purple-500/10 ${theme.text}`}
                        data-aos='fade-up'
                        data-aos-delay='500'
                    >
                        Saya merupakan seorang fresh graduate lulusan Universitas Amikom Yogyakarta dengan jurusan yang saya tempuh yaitu D3 Teknik Informatika, saya lulus dengan nilai IPK 3,86.  saya sekarang tinggal di Yogyakarta bersama kedua orang tua saya dan adik saya laki-laki.
                    </p>

                    <div className='flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 mb-6 sm:mb-8'>
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={stat.label}
                                    data-aos='zoom-in'
                                    data-aos-delay={`${600 + index * 50}`}
                                    className={`flex flex-col items-center lg:items-start gap-1 px-4 py-3 sm:px-5 sm:py-4 rounded-xl border transition-all duration-300 ${theme.statCard}`}
                                >
                                    <Icon className='w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mb-1' />
                                    <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400'>{stat.value}</div>
                                    <div className={`text-xs sm:text-sm lg:text-base ${theme.statLabel}`}>{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default About
