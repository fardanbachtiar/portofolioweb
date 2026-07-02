import { color, motion } from "framer-motion";
import { link, nav } from "framer-motion/client";
import { useState } from "react";
import { Sun, Moon, X, Menu, } from 'lucide-react'; // Ensure you have installed lucide-react via npm/yarn



const Navbar = ({darkMode, toggleDarkMode}) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Skills', link: '#skills' },
        { name: 'Project', link: '#project' },
        { name: 'Contact', link: '#contact' },
    ];

    const lightColors = {
        navBg: 'bg-white/80 border border-purple-400/40 backdrop-blur-xl shadow-lg shadow-purple-500/10',
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-800',
        textHover: 'text-purple-500',
        textActive: 'text-purple-600',
        indicator: 'from-orange-500 to-purple-500',
        button: 'from-orange-700 to-purple-500',
    };

    const darkColors = {
        navBg: 'bg-slate-900/70 border border-purple-500/40 backdrop-blur-xl',
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        textHover: 'text-purple-400',
        textActive: 'text-purple-400',
        indicator: 'from-orange-500 to-purple-500',
        button: 'from-orange-700 to-purple-500',
    };

    const colors = darkMode ? darkColors : lightColors;

    const handleNavClick = (itemName) => {
        setActiveSection(itemName.toLowerCase());
        setIsMenuOpen(false);
    };
  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
        <motion.nav
        initial={{ y: -100}}
        animate={{ y: 0}}
        transition={{duration: 0.5}}
        style={{
        boxShadow:
            "0 0 25px rgba(168,85,247,.15), inset 0 0 1px rgba(255,255,255,.08)"
        }}
        className={`flex items-center justify-center ${colors.navBg}
        backdrop-blur-lg rounded-3xl px-4 lg:px-8 py-2 shadow-[0_0_25px_rgba(168,85,247,0.18)`}>
            <div className="flex items-center justify-between
            w-full space-x-6 lg:space-x-8">
                {/* logo */}
                <motion.a
                href="/"
                whileHover={{ scale: 1.05}}
                className="flex items-center space-x-2">
                    <span 
            className={`text-xl font-bold ${colors.textPrimary}`}>
                        portofolio<span className="text-purple-500">.</span>
                    </span>
                </motion.a>
                {/* Navigation Itmes */}
                <div className="hidden lg:flex items-center
                space-x-6">
                    {navItems.map((item) => (
                        <a 
                        key={item.name}
                        href={item.link}
                        onClick={() => handleNavClick(item.name)}
                        className="relative"
                        >
                            <motion.span
                    className={`font-medium transitiion-colors duration-300
                    ${
                        activeSection === item.name.toLowerCase()
                        ? colors.textActive
                        : `${colors.textSecondary} hover:text-purple-500`
                    }`}
                    whileHover={{ scale: 1.05}}
                    whileTap={{ scale: 0.95}}>
                                {item.name}
                            </motion.span>
                            {activeSection === item.name.toLowerCase () && (
                                <motion.div 
                                layoutId="navbar-indicator"
                                className={`absolute-bottom-1 left-0
                                right-0 h-0.5 bg-linear-to-r rounded-full
                                ${colors.indicator}`}>
                                </motion.div>
                            )}
                        </a>
                    ))}
                </div>
                <div className="flex items-center space-x-2">
                    {/* Dark mode Toogle */}
                    <motion.button
                    whileHover={{ scale: 1.1}}
                    whileTap={{ scale: 0.9}}
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-xl border-2 transition-all duration-300 ${darkMode 
                        ? 'bg-purple-700 border-transparent'
                        :'bg-gray-200 border-purple-500'
                    } transition-colors`}
                    aria-label={darkMode ? 
                        'Switch to light mode'
                        : 'Switch to dark mode'
                    }>
                        {darkMode ? (
                            <Sun className="w-5 h-5 text-white-300" />
                        ) : (
                            <Moon className="w-5 h-5 text-purple-700" />
                        )}
                    </motion.button>
                    {/* Button */}
                    <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    className={`hidden lg:block ml-10 px-6 py-2 font-semibold
                    rounded-full bg-linear-to-r ${colors.button}
                    text-white shadow-md hover:shadow-lg transition-shadow`}>
                        Hire Me
                    </motion.a>
                </div>
                {/* Mobile Menu Button */}
                 <div className="flex lg:hidden items-center space-x-4 px-2">
                    <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`p-2 rounded-xl border-2 transition-all duration-300 lg:hidden ${darkMode ? 'bg-purple-700 border-purple-400 border-transparent text-white' : 'bg-gray-200 border-purple-500 text-gray-700'}`}>
                        {isMenuOpen ? (
                            <X className={`w-5 h-5 ${darkMode
                                ? 'text-white'
                                : 'text-purple-700 '
                            }`}/>
                        ) : (
                            <Menu className={`w-5 h-5 ${darkMode 
                                ? 'text-white'
                                : 'text-purple-700'
                            }`}/>    
                        )}
                    </motion.button>
                 </div>
            </div>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0}}
                    animate={{ opacity: 1, height: 'auto'}}
                    exit={{ opacity: 0, height: 0}}
                    transitiion={{duration: 0.3}}
                    className={`absolute top-full left-0 right-0 mt-2 lg:hidden
                    ${darkMode 
                        ? 'bg-gray-900/95'
                        : 'bg-white/95'
                    } backdrop-blur-lg rounded-xl shadow-lg border ${
                        darkMode ? 'border-gray-700' : 'border-gray-200'
                    }`}>
                        <div className="px-4 py-3 space-y-2">
                            {navItems.map((item) => (
                                <a 
                                key={item.name}
                                href={item.link}
                                onClick={() => handleNavClick(item.name)}
                                className="block">
                                    <motion.div
                                    whileHover={{ x:5 }}
                                    className={`py-3 px-4 rounded-lg text-center
                                    ${
                                    activeSection === item.name.toLowerCase()
                                    ? darkMode ? 'bg-gray-800' : 'bg-purple-50'
                                    : ''    
                                    }`}>
                                        <span
                                        className={`font-medium ${
                                            activeSection === item.name.toLowerCase()
                                            ? colors.textActive
                                            : colors.textSecondary
                                        }`}>
                                            {item.name}
                                        </span>
                                    </motion.div>

                                </a>
                            ))}
                            <motion.a
                            href="#contact"
                            onClick={() => setIsMenuOpen (false)}
                            whileTap={{ scale: 0.95}}
                            className={`block py-3 px-4 text-center font-semibold
                            rounded-lg bg-linear-to-r ${colors.button}
                            text-white shadow-md`}>
                                Hire Me
                            </motion.a>
                        </div>
                </motion.div>
            )}
        </motion.nav>
    </div>
  )
}

export default Navbar