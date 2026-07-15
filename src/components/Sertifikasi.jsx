import { useState } from "react";
import ser1 from "../assets/ser1.png";
import ser2 from "../assets/ser2.png";
import ser3 from "../assets/ser3.png";
import ser4 from "../assets/ser4.png";
import ser5 from "../assets/ser5.png";
import ser6 from "../assets/ser6.png";

const certificates = [
  {
    id: 1,
    title: "MSIB Angkatan 3 - UI/UX Design Mastery",
    issuer: "Kampus Merdeka x Skilvul (PT Impactbyte Teknologi Edukasi)",
    date: "Des 2022",
    image: ser1,
    credentialUrl: "https://drive.google.com/file/d/17bYkh4TIyz--NQ_EnDM3IbcV-VTAdJAa/view?usp=sharing",
    skills: ["UI/UX Design", "MSIB"],
  },
  {
    id: 2,
    title: "Anggota Litbangtek dan Event HIMTI",
    issuer: "Universitas Amikom Yogyakarta",
    date: "Des 2022",
    image: ser5,
    credentialUrl: "https://drive.google.com/file/d/1SRWBEi6ChfLXUH_HGCYHM5G-MJMuI4bs/view?usp=drive_link",
    skills: ["Organisasi", "Kepanitiaan"],
  },
  {
    id: 3,
    title: "Juara I Lomba Melukis Ekspresi",
    issuer: "HUT RI ke-80 - Griya Abhipraya Purbonegoro",
    date: "2025",
    image: ser6,
    credentialUrl: "https://drive.google.com/file/d/1ZL9jU04jiK2A5iqn8gUYKQ_-k9dNt9h-/view?usp=drive_link",
    skills: ["Seni & Kreativitas"],
  },
  {
    id: 4,
    title: "Program Pemagangan - Content Creator",
    issuer: "Colora Indonesia x Kemnaker",
    date: "Mei 2026",
    image: ser2,
    credentialUrl: "https://drive.google.com/file/d/1aQBd-vkp5CmsVUktd0A6X0X66gJpA0dx/view?usp=drive_link",
    skills: ["Desain Grafis", "Video Editing", "Videografer"],
  },
  {
    id: 5,
    title: "UI/UX Design Mastery",
    issuer: "Skilvul",
    date: "Nov 2022",
    image: ser3,
    credentialUrl:
      "https://skilvul.com/courses/uiux-design-mastery/student/cl5ozvr3q06mv01lq7yec4h2t/",
    skills: ["UI/UX Design", "Figma"],
  },
  {
    id: 6,
    title: "PasarPolis - Web Asuransi Kesehatan Pegawai",
    issuer: "Skilvul x PasarPolis",
    date: "Des 2022",
    image: ser4,
    credentialUrl:
      "https://drive.google.com/file/d/1D_DdI8SXjHQ_OPzPW8eI8dW3jb4TvacC/view?usp=drive_link",
    skills: ["UI/UX Design", "Case Study"],
  },
];

function CertificateCard({ cert, onPreview, index, darkMode }) {
  return (
    <div
      style={{
        background: darkMode
          ? "linear-gradient(to bottom right, #1f2937, #111827)"
          : "linear-gradient(to bottom right, #ffffff, #f9fafb)",
        borderColor: darkMode ? "#374151" : "#e5e7eb",
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
      data-aos="fade-up"
      data-aos-delay={index * 80}
    >
      {/* Overlay gradient yang muncul saat hover, sama seperti Project.jsx */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-orange-500 via-purple-500 to-indigo-500 opacity-20 blur-sm" />
      </div>

      <button
        onClick={() => onPreview(cert)}
        className="relative aspect-[4/3] w-full overflow-hidden bg-white"
      >
        <img
          src={cert.image}
          alt={`Sertifikat ${cert.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-[#0a0e1f]/0 opacity-0 transition-all duration-300 group-hover:bg-[#0a0e1f]/60 group-hover:opacity-100">
          <span className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/30">
            Lihat Sertifikat
          </span>
        </div>
      </button>

      <div className="relative flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3
            className="text-base font-semibold"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            {cert.title}
          </h3>
          <p
            className="mt-1 text-sm"
            style={{ color: darkMode ? "#9ca3af" : "#6b7280" }}
          >
            {cert.issuer} &middot; {cert.date}
          </p>
        </div>

        {cert.skills?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                style={{
                  backgroundColor: darkMode
                    ? "rgba(139,92,246,0.1)"
                    : "#f3e8ff",
                  borderColor: darkMode
                    ? "rgba(139,92,246,0.2)"
                    : "rgba(139,92,246,0.3)",
                  color: darkMode ? "#c4b5fd" : "#7c3aed",
                }}
                className="rounded-full border px-3 py-1 text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {cert.credentialUrl && cert.credentialUrl !== "#" && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: darkMode ? "#a78bfa" : "#7c3aed" }}
            className="mt-auto inline-flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80"
          >
            Lihat Kredensial
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

function PreviewModal({ cert, onClose, darkMode }) {
  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        style={{
          background: darkMode
            ? "linear-gradient(to bottom right, #1f2937, #111827)"
            : "linear-gradient(to bottom right, #ffffff, #f9fafb)",
          borderColor: darkMode ? "#374151" : "#e5e7eb",
        }}
        className="relative max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-2xl border shadow-2xl shadow-violet-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-violet-500/60"
        >
          &times;
        </button>
        <img
          src={cert.image}
          alt={`Sertifikat ${cert.title}`}
          className="max-h-[65vh] w-full object-contain bg-white"
        />
        <div className="p-5">
          <h3
            className="text-lg font-semibold"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            {cert.title}
          </h3>
          <p
            className="mt-1 text-sm"
            style={{ color: darkMode ? "#9ca3af" : "#6b7280" }}
          >
            {cert.issuer} &middot; {cert.date}
          </p>
        </div>
      </div>
    </div>
  );
}

const Certifications = ({ darkMode }) => {
  const [activeCert, setActiveCert] = useState(null);

  const theme = darkMode
    ? { gridColor: "rgba(168,85,247,0.15)" }
    : { gridColor: "rgba(139,92,246,0.12)" };

  return (
    <section
      id="sertifikasi"
      className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-20"
    >
      {/* Background titik-titik (dot grid), sama seperti section lain */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${theme.gridColor} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-14 text-center" data-aos="fade-up">
          <span
            className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{
              backgroundColor: darkMode ? "#1f2937" : "#f3e8ff",
              color: darkMode ? "#c4b5fd" : "#7c3aed",
            }}
          >
            Pencapaian
          </span>
          <h2
            className="mt-4 text-3xl font-bold sm:text-4xl"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            Serti
            <span
              style={{
                background: "linear-gradient(to right,#a855f7,#6366f1)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              fikasi
            </span>
          </h2>
          <p
            className="mx-auto mt-3 max-w-xl"
            style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
          >
            Kumpulan sertifikat dari program, pelatihan, dan pencapaian yang
            telah saya ikuti.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={i}
              darkMode={darkMode}
              onPreview={setActiveCert}
            />
          ))}
        </div>
      </div>

      <PreviewModal
        cert={activeCert}
        onClose={() => setActiveCert(null)}
        darkMode={darkMode}
      />
    </section>
  );
};

export default Certifications;