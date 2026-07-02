import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import tiktok from '../assets/tiktok.png'
import hero from '../assets/hero.png'
import hi from '../assets/hi.png'
import CV from '../assets/CV.pdf'
import { DownloadIcon, Mail, Sparkles } from 'lucide-react'

const Hero = ({ darkMode }) => {
    const socialIcons = [
        { icon: instagram, alt: 'Instagram', href: 'https://www.instagram.com/frdnbcthr_?igsh=MTR2NzJ0MGx3dTY2Mw%3D%3D&utm_source=qr' },
        { icon: github, alt: 'GitHub', href: 'https://github.com/fardanbachtiar' },
        { icon: linkedin, alt: 'LinkedIn', href: '#' },
        { icon: tiktok, alt: 'TikTok', href: '#' },
    ];

    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: 'text-white border-2 border-purple-500 hover:bg-purple-600',
        blobA: 'bg-purple-600',
        blobB: 'bg-fuchsia-500',
        badgeBg: 'bg-white/5 border-white/10 text-purple-200',
        chipBg: 'bg-gray-900/90 border-purple-500/40 text-purple-200',
        gridColor: 'rgba(168,85,247,0.15)',
        socialBg: 'bg-white/5 hover:bg-white/10',
    };

    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-800',
        buttonSecondary: 'text-violet-500 border-2 border-purple-500 hover:bg-purple-500 hover:text-white',
        blobA: 'bg-purple-400',
        blobB: 'bg-fuchsia-300',
        badgeBg: 'bg-white/70 border-purple-200 text-purple-700',
        chipBg: 'bg-white/90 border-purple-300 text-violet-700',
        gridColor: 'rgba(139,92,246,0.12)',
        socialBg: 'bg-black/5 hover:bg-black/10',
    };

    const theme = darkMode ? darkTheme : lightTheme;

    return (
        <div className='relative overflow-hidden min-h-screen flex flex-col'>
            <div
                className='absolute inset-0 z-0'
                style={{
                    backgroundImage: `radial-gradient(${theme.gridColor} 1px, transparent 1px)`,
                    backgroundSize: '28px 28px',
                }}
            />

            {/* Layered animated gradient blobs */}
            <div className={`absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 ${theme.blobA} opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse hidden sm:block`} />
            <div className={`absolute top-1/3 -right-16 w-64 h-64 sm:w-80 sm:h-80 ${theme.blobB} opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000 hidden sm:block`} />

            <section
                id='home'
                data-aos='fade-up'
                data-aos-delay='250'
                className='body-font z-10'>
                <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14'>
                    <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>

                        {/* Status badge */}
                        <div
                            data-aos='fade-up'
                            data-aos-delay='300'
                            className={`inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border backdrop-blur-sm text-xs sm:text-sm font-medium ${theme.badgeBg}`}>
                            <span className='relative flex h-2 w-2'>
                                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75'></span>
                                <span className='relative inline-flex rounded-full h-2 w-2 bg-purple-500'></span>
                            </span>
                            Terbuka untuk kolaborasi
                            <Sparkles className='w-3.5 h-3.5' />
                        </div>

                        <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.alt}
                                    target='_blank'
                                    rel='noreferrer'
                                    data-aos='fade-up'
                                    data-aos-delay={`${400 + index * 100}`}
                                    className={`p-2.5 rounded-full ${theme.socialBg} transform hover:scale-110 hover:-translate-y-1 hover:rotate-6 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500`}>
                                    <img
                                        src={social.icon}
                                        alt={social.alt}
                                        className={`w-6 h-6 sm:w-7 sm:h-7 object-contain ${darkMode ? '' : 'filter brightness-75'}`}
                                    />
                                </a>
                            ))}
                        </div>

                        <h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary} flex flex-wrap items-center justify-center lg:justify-start gap-2`}
                            data-aos='fade-up'
                            data-aos-delay='500'>
                            Hi, Aku
                            <span className='bg-linear-to-r from-purple-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent'>
                                Fardan
                            </span>
                            <span className='inline-block w-0.75 h-8 sm:h-10 bg-purple-500 animate-pulse' />
                        </h1>

                        <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
                            data-aos='fade-up'
                            data-aos-delay='600'>
                            Hallo saya Fardan saya merupakan ini merupakan
                            website portofolio saya, yang saya buat sendiri. Terima kasih
                            semoga anda bisa menikmati tampilan dari UI/UX Desain yang saya buat.
                        </p>

                        <div className='w-full pt-4 sm:pt-6'>
                            <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
                                data-aos='fade-up'
                                data-aos-delay='700'
                            >
                                <a download className='w-full sm:w-auto group'>
                                    <button className='relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-purple-500 to-violet-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(138,43,226,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2'>
                                        <span className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/25 to-transparent' />
                                        <DownloadIcon className='w-4 h-4 sm:w-5 mr-2 relative group-hover:-translate-y-0.5 transition-transform duration-300' />
                                        <span className='relative'>Download CV</span>
                                    </button>
                                </a>
                                <a href="#contact" className='w-full sm:w-auto group'>
                                    <button className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecondary} justify-center border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(138,43,226,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2`}>
                                        <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300' />
                                        Contact Me
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center'
                        data-aos='fade-left'
                        data-aos-delay='400'
                    >
                        <div className='relative w-4/5 sm:w-3/4 lg:w-full'>

                            <div className='relative overflow-hidden rounded-4xl ring-1 ring-white/10'>
                                <img src={hero} alt="Foto profil Fardan" className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500' />
                            </div>

                            <img src={hi} alt="" className='absolute -top-6 sm:top-4 right-10 sm:right-10 w-20 h-20 sm:w-20 sm:h-20 lg:w-32 lg:h-32 object-contain animate-bounce opacity-90 z-10' />

                            {/* Floating code chip — signature element */}
                            <div className={`absolute -bottom-5 -left-4 sm:-left-8 px-4 py-2.5 rounded-xl border shadow-lg backdrop-blur-sm font-mono text-xs sm:text-sm ${theme.chipBg} animate-[bounce_4s_ease-in-out_infinite]`}>
                                <span className='text-purple-400'>const</span> dev = <span className='text-emerald-400'>"open to work"</span>;
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
