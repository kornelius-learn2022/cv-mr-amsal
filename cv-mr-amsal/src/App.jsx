import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import React from "react";

const CV_DATA = {
  profile: {
    name: "Amsal Dwi Nugroho",
    role: "Teacher",
    about:
      "I am a dedicated educator with experience in Mathematics, Science, and Bahasa Indonesia under IB and Cambridge curricula. A Guru Penggerak (Cohort 8) graduate, I apply inquiry-based learning to foster student engagement. Beyond teaching, I have served as a homeroom teacher, project-based learning coordinator, and content creator.",
  },
  skills: {
    hard_skills: [
      "Teaching & Curriculum Development (IB & Cambridge)",
      "Inquiry-Based & Deep Learning Methods",
      "Mathematics & Science Instruction",
      "Project-Based Learning (PBL) Coordination",
      "Lesson Planning & Assessment",
      "Educational Content Creation",
      "Library & Resource Management",
    ],
    soft_skills: [
      "Leadership & Classroom Management",
      "Critical Thinking & Problem-Solving",
      "Effective Communication & Public Speaking",
      "Collaboration & Teamwork",
      "Creativity & Innovation",
      "Adaptability",
    ],
  },
  experience: [
    {
      position: "Class Teacher",
      institution: "Cita Hati Elementary School",
      period: "July 2024 - June 2026",
      task_discription: "",
      tasks: [
        "Guiding Grade 4 students in project-based learning (Market Day), where they develop entrepreneurship and marketing strategies.",
        "Teaching Bahasa Indonesia, Budaya Daerah, Mathematics, and UOI  (Social & Science) in the PYP",
        "Teaching IT Lesson for Grade 1 and 2",
      ],
    },
    {
      position: "Teacher",
      institution: "Dharma Mulya Junior High School",
      period: "July 2017 - June 2024",
      task_discription:
        "I served as a Mathematics and Physics teacher, fostering students' analytical and problem-solving skills. In addition to my teaching role, I took on various responsibilities, including :",
      tasks: [
        "Homeroom Teacher – Providing academic and personal guidance to studentsr",
        "Project-Based Learning & Yearbook Coordinator, leading the creation of the school yearbook and organizing project-based learning activities.",
        "Content Creator – Managing and producing content for the school's social media platforms to enhance engagement.",

        "Content Creator for school's social media",
        "Library Staff supporting literacy and research",
      ],
    },
    {
      position: "Teacher",
      institution: "Elyon Junior High School",
      period: "July 2016 - June 2017",
      task_discription:
        "I worked as a Mathematics and Science teacher, helping students develop critical thinking and problem-solving skills. I also served as a Grade 8 Homeroom Teacher, providing academic and personal guidance to students. Through these roles, I contributed to both academic instruction and student development, fostering a supportive and engaging learning environment.",
      tasks: [],
    },
  ],
  education: [
    {
      year: "2024",
      title: "IB Professional Development",
      detail: "PYP Making the PYP happen: Implementing agency Cat 1",
    },
    {
      year: "2023",
      title: "Pendidikan Guru Penggerak",
      detail:
        "Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi - Pendidikan Guru Penggerak Angkatan ke 8",
    },
    {
      year: "2016",
      title: "Bachelor's Degree",
      detail:
        "Bachelor’s Degree in Industrial Engineering, Faculty of Engineering, Widya Mandala Catholic University Surabaya.",
    },
  ],
  awards: [
    {
      year: "2024",

      discription:
        "Certificate of Appreciation from the Mayor of Surabaya (2024)",
    },
    {
      year: "2023",
      discription:
        "Finalist in the Innovative Teacher of Surabaya competition (2023)",
    },
  ],
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeLoading, setFadeLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [navMenu, setNavMenu] = useState(true);
  const [showSide, setshowSide] = useState(false);

  //sidebar
  (useEffect(() => {
    const handleResize = () => {
      // 768px biasanya menjadi batas standar untuk tablet/HP (mirip 'md' di Tailwind)
      if (window.innerWidth < 700) {
        setshowSide(true);
      } else {
        setshowSide(false);
      }
    };
    handleResize();

    // Pasang "pendengar" (event listener) untuk setiap perubahan ukuran layar
    window.addEventListener("resize", handleResize);

    // Proses pembersihan (Cleanup function)
    // Sangat penting agar tidak terjadi memory leak saat komponen dihapus
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }),
    []);

  // Fungsi toggle tema
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Menambahkan/menghapus kelas 'dark' pada elemen html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }, // Muncul jika 20% bagian sudah terlihat di layar
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Mulai animasi transisi menghilang (fade-out) pada detik ke 2
    const fadeTimer = setTimeout(() => {
      setFadeLoading(true);
    }, 2000);

    // Hapus total layar loading dari halaman pada detik ke 2.5
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const navLinks = [
    { name: "About Me", href: "#about" },
    { name: "Skill", href: "#skill" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Awards", href: "#awards" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      {isLoading && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-slate-900 transition-opacity duration-500 ${
            fadeLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Kontainer Logo & Spinner */}
          <div className="relative flex items-center justify-center w-32 h-32 mb-8">
            {/* Cincin Loading berputar */}
            <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
            <div className="absolute inset-0 rounded-full border-t-4 border-blue-500 animate-spin"></div>

            {/* Inisial Nama (Logo) */}
            <div className="text-5xl font-black text-blue-500 tracking-tighter shadow-blue-500/50">
              AD
            </div>
          </div>

          {/* Teks Loading */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-blue-500 font-bold uppercase tracking-[0.4em] text-sm animate-pulse">
              Amsal Dwi Nugroho
            </p>
            <div className="flex gap-1">
              <span
                className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              ></span>
              <span
                className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></span>
              <span
                className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></span>
            </div>
          </div>
        </div>
      )}
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Kiri: Nama Disingkat */}
          <div className="text-2xl font-black text-blue-600 dark:text-blue-400 tracking-tighter">
            AD
          </div>

          {/* Tengah: Menu Navigasi */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div>
            <button onClick={toggleDarkMode}>
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
            {showSide &&
              (navMenu ? (
                <button
                  className="ml-2 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:ring-2 ring-blue-400 transition-all"
                  onClick={() => setNavMenu(false)}
                >
                  ☰
                </button>
              ) : (
                <button
                  className="ml-2 py-3 px-3.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:ring-2 ring-blue-400 transition-all"
                  onClick={() => setNavMenu(true)}
                >
                  X
                </button>
              ))}
          </div>
          {/* Kanan: Dark Mode Toggle */}
        </div>
        {!navMenu && (
          // Menggunakan 'absolute' atau 'fixed' dengan z-index tinggi agar menu melayang di atas konten web
          // bg-transparent memastikan sisa layar di bawah menu tidak tertutup warna apapun
          <div className="absolute left-0 w-full z-50 bg-transparent transition-colors duration-300">
            {/* Container menu: Background putih, bayangan di bawah (shadow-md), dan ujung bawah melengkung */}
            <div className="w-full bg-white flex flex-col shadow-md rounded-b-xl overflow-hidden pb-4 pt-2">
              {/* Item 1 */}
              {/* hover:bg-gray-50 dan hover:text-blue-600 memberikan efek saat disentuh */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-blue-500 transition-colors"
                >
                  <div className="py-3 px-6 text-gray-500 hover:bg-gray-50 hover:text-blue-600 cursor-pointer transition-all duration-200 flex justify-between items-center">
                    <h2 className="text-[17px] font-light">{link.name}</h2>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Konten dummy untuk testing scroll */}
      <main className="p-10 space-y-20">
        <section
          id="about"
          ref={sectionRef}
          className="relative min-h-screen flex items-center bg-white dark:bg-slate-900 overflow-hidden py-20 px-6"
        >
          {/* Dekorasi Background Abstrak */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>

          <div
            className={`max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center ${isVisible ? "reveal-anim" : "opacity-0"}`}
          >
            {/* SISI KIRI: Teks & Profil */}
            <div className="order-2 md:order-1 space-y-6">
              <div className="space-y-2">
                <h3 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm">
                  Explore My Journey
                </h3>
                <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-none tracking-tighter">
                  Hey, I'm <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Amsal Dwi
                  </span>
                </h1>
                <p className="text-lg font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em]">
                  Professional Teacher
                </p>
              </div>

              <div className="relative group">
                {/* Garis Aksen Vertikal */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 to-transparent rounded-full"></div>
                <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed pl-8 font-medium">
                  "{CV_DATA.profile.about}"
                </p>
              </div>

              <button className="mt-4 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-blue-500/20">
                <a href="mailto:amsalnugroho63@guru.smp.belajar.id">
                  Let's Collaborate
                </a>
              </button>
            </div>

            {/* SISI KANAN: Foto Borderless */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                {/* Overlay Gradient halus di bagian bawah foto agar menyatu */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10"></div>

                <img
                  src="foto-mr-amsal-ai.png"
                  alt="Amsal Dwi Nugroho"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tambahkan section lainnya di sini */}
        <section
          id="skill"
          className="py-20 bg-slate-50 dark:bg-slate-900/50 px-6"
        >
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="mb-16">
              <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mb-2">
                Expertise
              </h2>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                Skills & Competencies
              </h3>
              <div className="w-12 h-1 bg-blue-500 mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* HARD SKILLS */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <span className="p-2 bg-blue-600 rounded-lg text-white font-bold text-xs uppercase">
                    Core
                  </span>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    Hard Skills
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {CV_DATA.skills.hard_skills.map((skill, index) => (
                    <div
                      key={index}
                      className="skill-card flex items-center gap-4"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SOFT SKILLS */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <span className="p-2 bg-cyan-500 rounded-lg text-white font-bold text-xs uppercase">
                    Inter
                  </span>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    Soft Skills
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {CV_DATA.skills.soft_skills.map((skill, index) => (
                    <div
                      key={index}
                      className="skill-card flex items-center gap-4"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="py-20 px-6 bg-slate-50 dark:bg-slate-950/50 transition-colors"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase mb-12 border-b-4 border-blue-500 inline-block">
              Experience
            </h2>
            <div className="space-y-12">
              {CV_DATA.experience.map((exp, index) => (
                <div
                  key={index}
                  className="mb-10 relative pl-8 border-l-2 border-blue-200"
                >
                  {/* Titik Indikator Timeline */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  {/* Judul dan Institusi */}
                  <h4 className="text-2xl font-bold text-slate-800">
                    {exp.position}
                  </h4>
                  <p className="text-blue-600 font-bold uppercase text-xs mb-2">
                    {exp.institution} | {exp.period}
                  </p>
                  {/* POSISI BARU: Deskripsi diletakkan di luar <ul> agar rata kiri */}
                  {exp.task_discription && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {exp.task_discription}
                    </p>
                  )}
                  {/* Daftar Tugas dengan Bullet */}
                  <ul className="space-y-2">
                    {exp.tasks.map((task, j) => (
                      <li
                        key={j}
                        className="text-slate-600 dark:text-slate-400 text-sm flex gap-2"
                      >
                        <span className="text-blue-500">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="education"
          className="py-20 px-6 bg-slate-50 dark:bg-slate-950/50 transition-colors"
        >
          <div className="max-w-4xl mx-auto">
            {/* Judul Section */}
            <div className="mb-12">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                Education
              </h2>
              <div className="w-16 h-1.5 bg-blue-600 mt-2"></div>
            </div>

            <div className="grid gap-6">
              {CV_DATA.education.map((edu, index) => (
                <div
                  key={index}
                  className="group flex flex-col md:flex-row gap-6 bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all"
                >
                  {/* Sisi Kiri: Tahun */}
                  <div className="md:w-1/4">
                    <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-2xl text-lg font-black tracking-tighter">
                      {edu.year}
                    </span>
                  </div>

                  {/* Sisi Kanan: Detail Pendidikan */}
                  <div className="md:w-3/4 space-y-2">
                    <h4 className="text-2xl font-bold text-slate-800 dark:text-white leading-tight group-hover:text-blue-600 transition-colors">
                      {edu.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                      {edu.detail}
                    </p>

                    {/* Aksen dekoratif tipis di bawah */}
                    <div className="w-0 group-hover:w-full h-0.5 bg-blue-500/20 transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="awards"
          className="py-20 px-6 bg-slate-50 dark:bg-slate-950/50 transition-colors"
        >
          <div className="max-w-4xl mx-auto">
            {/* Judul Section */}
            <div className="mb-12">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                Awards
              </h2>
              <div className="w-16 h-1.5 bg-blue-600 mt-2"></div>
            </div>

            <div className="grid gap-6">
              {CV_DATA.awards.map((awd, index) => (
                <div
                  key={index}
                  className="group flex flex-col md:flex-row gap-6 bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all"
                >
                  {/* Sisi Kiri: Tahun */}
                  <div className="md:w-1/4">
                    <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-2xl text-lg font-black tracking-tighter">
                      {awd.year}
                    </span>
                  </div>

                  {/* Sisi Kanan: Detail Pendidikan */}
                  <div className="md:w-3/4 space-y-2">
                    <h4 className="text-2xl font-bold text-slate-800 dark:text-white leading-tight group-hover:text-blue-600 transition-colors">
                      {awd.discription}
                    </h4>
                    {/* Aksen dekoratif tipis di bawah */}
                    <div className="w-0 group-hover:w-full h-0.5 bg-blue-500/20 transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* CONTACT & FOOTER SECTION */}
      <footer
        id="contact"
        className="bg-slate-900 text-white pt-20 pb-8 px-6 transition-colors mt-20"
      >
        <div className="max-w-5xl mx-auto">
          {/* Judul Section */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white">
              Contact
            </h2>
            <div className="w-16 h-1.5 bg-blue-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-400 mt-4 text-sm max-w-md mx-auto">
              Feel free to reach out for collaborations or any inquiries.
            </p>
          </div>

          {/* Grid Informasi Kontak */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* 1. Phone */}
            <div className="flex flex-col items-center text-center p-6 bg-slate-800/50 rounded-3xl border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500 transition-all duration-300 group">
              <div className="p-4 bg-blue-600/20 text-blue-400 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {/* Ikon Telepon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2">
                Phone
              </p>

              <p className="font-medium text-slate-200">
                {" "}
                <a href="https://wa.me/+6285731353511">+6285731353511</a>
              </p>
            </div>

            {/* 2. Email */}
            <div className="flex flex-col items-center text-center p-6 bg-slate-800/50 rounded-3xl border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500 transition-all duration-300 group">
              <div className="p-4 bg-blue-600/20 text-blue-400 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {/* Ikon Email */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2">
                Email
              </p>
              <a
                href="mailto:amsalnugroho63@guru.smp.belajar.id"
                className="font-medium text-slate-200 hover:text-white break-all text-sm"
              >
                amsalnugroho63
                <br />
                @guru.smp.belajar.id
              </a>
            </div>

            {/* 3. Instagram */}
            <div className="flex flex-col items-center text-center p-6 bg-slate-800/50 rounded-3xl border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500 transition-all duration-300 group">
              <div className="p-4 bg-blue-600/20 text-blue-400 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {/* Ikon Instagram */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    strokeWidth={2}
                  ></rect>
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                    strokeWidth={2}
                  ></path>
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                    strokeWidth={2}
                  ></line>
                </svg>
              </div>
              <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2">
                Instagram
              </p>
              <a
                href="https://instagram.com/amsaldwi"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-slate-200 hover:text-white"
              >
                @amsaldwi
              </a>
            </div>

            {/* 4. Address */}
          </div>

          {/* Garis Pemisah & Footprint Kornelius */}
          <div className="border-t border-slate-800 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-slate-500">
              &copy; {new Date().getFullYear()} CV Amsal Dwi Nugroho. All rights
              reserved.
            </p>

            {/* Footprint / Credit */}
            <p className="text-slate-400 flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
              <span className="text-slate-500">Dibuat oleh</span>
              <span className="text-blue-400 font-bold tracking-wide">
                Kornelius Putra A.
              </span>
              <span className="text-red-500 animate-pulse">❤️</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
