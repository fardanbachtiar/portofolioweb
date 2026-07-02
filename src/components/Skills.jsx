import figma from '../assets/figma.png'
import photoshop from '../assets/photoshop.png'
import canva from '../assets/canva.png'
import reactjs from '../assets/reactjs.png'
import twinland from '../assets/twinland.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import php from '../assets/php.png'
import { Sparkles } from 'lucide-react'

const Skills = ({ darkMode }) => {

    const skills = [
        { name: 'Figma', icon: figma, level: 95, color: 'from-orange-500 to-purple-500', category: 'Design' },
        { name: 'Photoshop', icon: photoshop, level: 95, color: 'from-orange-500 to-purple-500', category: 'Design' },
        { name: 'Canva', icon: canva, level: 95, color: 'from-orange-500 to-purple-500', category: 'Design' },
        { name: 'React JS', icon: reactjs, level: 85, color: 'from-orange-500 to-purple-500', category: 'Development' },
        { name: 'Tailwind CSS', icon: twinland, level: 80, color: 'from-orange-500 to-purple-500', category: 'Development' },
        { name: 'HTML', icon: html, level: 85, color: 'from-orange-500 to-purple-500', category: 'Development' },
        { name: 'CSS', icon: css, level: 85, color: 'from-orange-500 to-purple-500', category: 'Development' },
        { name: 'PHP', icon: php, level: 70, color: 'from-orange-500 to-purple-500', category: 'Development' },
    ];

    const gridColor = darkMode ? "rgba(168,85,247,0.15)" : "rgba(139,92,246,0.12)";

    return (
        <section
            id="skills"
            className="py-14 relative overflow-hidden"
        >

            {/* Dot-grid backdrop, consistent with Hero & About */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `radial-gradient(${gridColor} 1px, transparent 1px)`,
                    backgroundSize: "28px 28px",
                }}
            />
            <div className="container px-5 py-14 mx-auto relative z-10">

                {/* Heading */}
                <div
                    className="text-center mb-16"
                    data-aos="fade-up"
                >

                    <h1
                        className="sm:text-4xl text-3xl font-bold mb-4"
                        style={{
                            color: darkMode ? "white" : "#1f2937"
                        }}
                    >
                        My{" "}
                        <span
                            style={{
                                background: "linear-gradient(to right,#a855f7,#6366f1)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent"
                            }}
                        >
                            Skills
                        </span>
                    </h1>

                    <p
                        className="text-lg max-w-2xl mx-auto leading-relaxed"
                        style={{
                            color: darkMode ? "#d1d5db" : "#4b5563"
                        }}
                    >
                        Kombinasi alat desain dan teknologi pengembangan yang saya pakai sehari-hari untuk mengubah ide menjadi produk digital yang siap pakai.
                    </p>
                </div>

                {/* Cards */}
                <div
                    className="flex flex-wrap -m-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    {skills.map((skill, index) => (

                        <div
                            key={index}
                            className="p-4 lg:w-1/4 md:w-1/2 w-full"
                            data-aos="fade-up"
                            data-aos-delay={300 + index * 100}
                        >

                            {/* Card */}
                            <div
                                style={{
                                    background: darkMode
                                        ? "linear-gradient(to bottom right,#a855f7,#6366f1)"
                                        : "linear-gradient(to bottom right,#ffffff,#f3f4f6)",
                                    borderColor: darkMode ? "#374151" : "#a855f7"
                                }}
                                className="group relative h-full p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.03] hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,.20)]"
                            >

                                {/* Category tag */}
                                <span
                                    className="absolute top-4 right-4 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full"
                                    style={{
                                        backgroundColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(168,85,247,0.08)",
                                        color: darkMode ? "#e9d5ff" : "#7c3aed"
                                    }}
                                >
                                    {skill.category}
                                </span>

                                {/* Icon */}
                                <div className="flex items-center mb-6">

                                    <div
                                        style={{
                                            background: darkMode
                                                ? "linear-gradient(to bottom right,#6d28d9,#4c1d95)"
                                                : "linear-gradient(to bottom right,#ede9fe,#ddd6fe)"
                                        }}
                                        className="w-16 h-16 rounded-xl p-3 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <h3
                                        className="text-2xl font-bold ml-4"
                                        style={{
                                            color: darkMode ? "white" : "#1f2937"
                                        }}
                                    >
                                        {skill.name}
                                    </h3>

                                </div>

                                {/* Text */}
                                <div className="mb-2 flex justify-between items-center">

                                    <span
                                        className="font-medium"
                                        style={{
                                            color: darkMode ? "#d1d5db" : "#6b7280"
                                        }}
                                    >
                                        Proficiency
                                    </span>

                                    <span
                                        className="font-bold"
                                        style={{
                                            background: "linear-gradient(to right,#f97316,#f59e0b)",
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            color: "transparent"
                                        }}
                                    >
                                        {skill.level}%
                                    </span>

                                </div>

                                {/* Progress */}
                                <div
                                    className="w-full rounded-full h-3 overflow-hidden"
                                    style={{
                                        backgroundColor: darkMode ? "#374151" : "#e5e7eb"
                                    }}
                                >

                                    <div
                                        className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                                        style={{
                                            width: `${skill.level}%`
                                        }}
                                    >
                                        <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </div>

                                </div>

                                {/* Bottom Line */}
                                <div
                                    className={`mt-6 pt-4 border-t ${
                                        darkMode
                                            ? "border-amber-500"
                                            : "border-gray-300"
                                    }`}
                                >

                                    <div
                                        className="h-1 w-1/3 rounded-full opacity-70 transition-all duration-500 group-hover:w-full"
                                        style={{
                                            background:
                                                "linear-gradient(to right,#f97316,#f59e0b)"
                                        }}/>

                                </div>

                            </div>

                        </div>

                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills
