import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, ExternalLink, Code, Facebook, Award, Download, Eye ,Lightbulb, TrendingUp} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // YOUR REAL PROJECTS
  const projects = [
    {
      id: 1,
      title: "HK-SAMMS",
      description: "A comprehensive health monitoring and appointment system with admin dashboard, patient records, and real-time scheduling.",
      tech: ["React", "Node.js", "MongoDB", "Vercel"],
      liveUrl: "https://final-hksamms.vercel.app/",
      image: "/assets/hksamm.jpg"
    },
    {
      id: 2,
      title: "Smart Health Monitoring",
      description: "Web-based health testing platform with user registration, symptom checker, and medical record management.",
      tech: ["PHP", "MySQL", "JavaScript"],
      liveUrl: "http://health-testing.mywebcommunity.org/",
      image: "/assets/smarthealth.jpg"
    },
    {
      id: 3,
      title: "Clinic Appointment System",
      description: "A comprehensive clinic appointment system with patient management and scheduling features.",
      tech: ["React Native", "Firebase", "Expo"],
      liveUrl: null,
      image: "/assets/test.jpg"
    }
  ];

  // YOUR REAL ORACLE CERTIFICATES (2025)
  const certificates = [
    {
      id: 1,
      title: "Oracle Cloud Infrastructure Foundations",
      issuer: "Oracle",
      date: "2025",
      image: "/assets/eCertificate1.png",
      description:
        "Certified in Oracle Cloud Infrastructure fundamentals, including core services, networking, compute, storage, and security best practices.",
      skills: ["OCI", "Cloud Computing", "Networking", "Security", "IaC"]
    },
    {
      id: 2,
      title: "Oracle Database Administration",
      issuer: "Oracle",
      date: "2025",
      image: "/assets/eCertificate2.png",
      description:
        "Mastered Oracle Database installation, configuration, backup/recovery, performance tuning, and high-availability solutions.",
      skills: ["Oracle DB", "SQL", "PL/SQL", "Backup & Recovery", "Performance Tuning"]
    },
    {
      id: 3,
      title: "Oracle Cloud Data Management",
      issuer: "Oracle",
      date: "2025",
      image: "/assets/eCertificate_database-1.png",
      description:
        "Proficient in Oracle Autonomous Database, data migration, integration with OCI services, and building scalable data solutions.",
      skills: ["Autonomous DB", "Data Migration", "ETL", "OCI Integration", "Analytics"]
    },
    {
      id: 4,
      title: "Oracle Cloud Networking Professional",
      issuer: "Oracle",
      date: "2025",
      image: "/assets/eCertificate_networking-1.png",
      description:
        "Expertise in designing and implementing secure, high-performance network architectures using VCNs, Load Balancers, VPN, and FastConnect.",
      skills: ["VCN", "Load Balancing", "VPN", "FastConnect", "Network Security"]
    }
  ];

  const skills = [
    { name: "React & React Native", level: 75 },
    { name: "JavaScript/TypeScript", level: 80 },
    { name: "Node.js & Express", level: 70 },
    { name: "PHP & MySQL", level: 90 },
    { name: "UI/UX Design", level: 50 }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const openProject = (project) => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated cursor follower */}
      <motion.div
        className="fixed w-6 h-6 bg-red-600/30 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-red-900/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent"
          >
            PORTFOLIO
          </motion.div>

          <div className="hidden md:flex gap-8">
            {['home', 'projects', 'certificates', 'about', 'contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  activeSection === item 
                    ? 'text-red-500' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gradient-to-b from-black to-red-950/20 border-t border-red-900/20"
            >
              {['home', 'projects', 'certificates', 'about', 'contact'].map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-6 py-4 uppercase tracking-wider hover:bg-red-900/20 transition-colors"
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* HOME Section */}
      {activeSection === 'home' && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, 100, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 right-1/3 w-64 h-64 bg-red-700/10 rounded-full blur-3xl"
            />
          </div>

          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-500/30 rounded-full"
              initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
              animate={{ y: [null, Math.random() * -500], opacity: [0, 1, 0] }}
              transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, delay: Math.random() * 5 }}
            />
          ))}

          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ scale: 0, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
              className="mb-8"
            >
              <motion.div
                animate={{ rotateY: [0, 360], scale: [1, 1.05, 1] }}
                transition={{ rotateY: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity } }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src="/assets/profile.png"
                  alt="Francis Tonzo"
                  className="w-48 h-48 rounded-full mx-auto border-4 border-red-600 shadow-2xl shadow-red-600/50"
                />
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-red-600 bg-clip-text text-transparent"
            >
              <motion.span
                animate={{ textShadow: ["0 0 20px rgba(220, 38, 38, 0.5)", "0 0 40px rgba(220, 38, 38, 0.8)", "0 0 20px rgba(220, 38, 38, 0.5)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Francis Xaviery <br></br>Miguel Tonzo
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-400 mb-12"
            >
              <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }}>
                Full Stack Developer & Designer
              </motion.span>
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 justify-center flex-wrap"
            >
              <motion.button whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(220, 38, 38, 0.5)", rotate: [0, -2, 2, -2, 0] }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('projects')} className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-900 rounded-full font-semibold hover:from-red-700 hover:to-red-950 transition-all">
                View Projects
              </motion.button>
              <motion.button whileHover={{ scale: 1.1, rotate: [0, 2, -2, 2, 0] }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('certificates')} className="px-8 py-4 border-2 border-red-600 rounded-full font-semibold hover:bg-red-600/20 transition-all">
                Certificates
              </motion.button>
              <motion.button whileHover={{ scale: 1.1, rotate: [0, -2, 2, -2, 0] }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('contact')} className="px-8 py-4 border-2 border-red-600 rounded-full font-semibold hover:bg-red-600/20 transition-all">
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex gap-6 justify-center mt-12">
              <motion.a href="https://github.com/Xav0929" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 360, boxShadow: "0 0 20px rgba(220, 38, 38, 0.6)" }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 300 }} className="p-3 bg-red-900/20 rounded-full hover:bg-red-600/30 transition-colors">
                <Github size={24} />
              </motion.a>
              <motion.a href="https://www.facebook.com/francis.quiambao.125958" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 360, boxShadow: "0 0 20px rgba(220, 38, 38, 0.6)" }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 300 }} className="p-3 bg-red-900/20 rounded-full hover:bg-red-600/30 transition-colors">
                <Facebook size={24} />
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* PROJECTS Section */}
      {activeSection === 'projects' && (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl md:text-7xl font-bold mb-16 text-center bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
              MY PROJECTS
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ y: 50, opacity: 0, rotateX: -20 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ y: -10, rotateY: 5, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)" }}
                  onClick={() => openProject(project)}
                  className="bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 rounded-2xl overflow-hidden cursor-pointer group"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ duration: 0.5 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                    {project.liveUrl && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.1 }} className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        LIVE
                      </motion.div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <motion.span key={tech} whileHover={{ scale: 1.1 }} className="px-3 py-1 bg-red-900/30 text-red-400 rounded-full text-sm">
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* CERTIFICATES Section */}
      {activeSection === 'certificates' && (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-16">
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="inline-block mb-6">
                <Award size={64} className="text-red-600" />
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
                CERTIFICATES
              </h2>
              <p className="text-gray-400 mt-4 text-lg">My Professional Achievements</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {certificates.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 50, rotateY: -30 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -10, rotateY: 5, boxShadow: "0 25px 50px rgba(220, 38, 38, 0.4)" }}
                  className="bg-gradient-to-br from-red-950/30 to-black border-2 border-red-900/40 rounded-3xl overflow-hidden cursor-pointer group"
                  style={{ transformStyle: "preserve-3d" }}
                  onClick={() => setSelectedCertificate(cert)}
                >
                  <div className="relative overflow-hidden h-56">
                    <motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <motion.div animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-4 right-4">
                      <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">{cert.date}</div>
                    </motion.div>
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.1, type: "spring" }} className="absolute top-4 left-4 bg-green-600 text-white p-2 rounded-full">
                      <Award size={20} />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <motion.h3 className="text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors">{cert.title}</motion.h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-red-400 font-semibold">{cert.issuer}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400">{cert.date}</span>
                    </div>
                    <p className="text-gray-400 mb-4">{cert.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill) => (
                        <motion.span key={skill} whileHover={{ scale: 1.1, backgroundColor: "rgba(220, 38, 38, 0.3)" }} className="px-3 py-1 bg-red-900/20 text-red-400 rounded-full text-sm border border-red-900/30">
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                    <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2 text-red-500 font-semibold">
                      <Eye size={18} />
                      <span>View Certificate</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCertificate(null)} className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-6">
            <motion.div
              initial={{ scale: 0.5, rotateY: -90, opacity: 0 }}
              animate={{ scale: 1, rotateY: 0, opacity: 1 }}
              exit={{ scale: 0.5, rotateY: 90, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-red-950/60 to-black border-2 border-red-600 rounded-3xl max-w-4xl w-full relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={() => setSelectedCertificate(null)} className="absolute top-6 right-6 z-10 p-3 bg-red-600 rounded-full hover:bg-red-700 shadow-lg">
                <X size={24} />
              </motion.button>
              <div className="p-8">
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="mb-6 relative">
                  <img src={selectedCertificate.image} alt={selectedCertificate.title} className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
                </motion.div>
                <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">{selectedCertificate.title}</h3>
                      <div className="flex items-center gap-3 text-lg">
                        <span className="text-red-400 font-semibold">{selectedCertificate.issuer}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-400">{selectedCertificate.date}</span>
                      </div>
                    </div>
                    <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                      <Award size={48} className="text-red-600" />
                    </motion.div>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">{selectedCertificate.description}</p>
                  <div>
                    <h4 className="text-xl font-bold text-red-500 mb-3">Skills Acquired:</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedCertificate.skills.map((skill, i) => (
                        <motion.span key={skill} initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.4 + i * 0.1, type: "spring" }} whileHover={{ scale: 1.1, y: -5 }} className="px-4 py-2 bg-red-900/40 text-red-300 rounded-full font-semibold border border-red-600/50">
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && !selectedProject.liveUrl && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="bg-gradient-to-br from-red-950/40 to-black border-2 border-red-600 rounded-3xl max-w-2xl w-full p-8 relative">
              <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 p-2 bg-red-600 rounded-full hover:bg-red-700">
                <X size={24} />
              </motion.button>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-2xl mb-6" />
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-6 text-lg">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-red-900/40 text-red-300 rounded-full font-semibold">{tech}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ABOUT & CONTACT sections unchanged */}
      {activeSection === 'about' && (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl md:text-7xl font-bold mb-16 text-center bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
              ABOUT ME
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">I'm an aspiring full-stack developer from the Philippines, passionate about building meaningful web and mobile solutions in health tech and beyond.</p>
                <p className="text-xl text-gray-300 leading-relaxed">Currently developing a web and mobile application while exploring React, PHP, and cloud deployment. I’m constantly learning and improving to become a better developer every day.</p>
                <div className="grid grid-cols-3 gap-4 pt-8">
                  {[{ icon: Code, label: "50+ Projects" }, { icon: Lightbulb, label: "Creative Ideas" }, { icon: TrendingUp, label: "Continuous Growth" }].map((item, i) => (
                    <motion.div key={i} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 + i * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} className="text-center p-4 bg-red-900/20 rounded-xl border border-red-900/30">
                      <item.icon className="w-8 h-8 mx-auto mb-2 text-red-500" />
                      <p className="text-sm font-semibold">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="space-y-6">
                <h3 className="text-3xl font-bold mb-8 text-red-500">Skills & Expertise</h3>
                {skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-red-500">{skill.level}%</span>
                    </div>
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.5 + i * 0.1, duration: 1 }} className="h-3 bg-red-950/30 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ delay: 0.5 + i * 0.1, duration: 1 }} className="h-full bg-gradient-to-r from-red-600 to-red-900 rounded-full" />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}

      {activeSection === 'contact' && (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-32 px-6 flex items-center justify-center">
          <div className="max-w-4xl w-full">
            <motion.h2 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl md:text-7xl font-bold mb-16 text-center bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
              GET IN TOUCH
            </motion.h2>
            <motion.form initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.input whileFocus={{ scale: 1.02 }} type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-red-950/20 border border-red-900/30 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-white" />
                <motion.input whileFocus={{ scale: 1.02 }} type="email" placeholder="Your Email" className="w-full px-6 py-4 bg-red-950/20 border border-red-900/30 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-white" />
              </div>
              <motion.input whileFocus={{ scale: 1.02 }} type="text" placeholder="Subject" className="w-full px-6 py-4 bg-red-950/20 border border-red-900/30 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-white" />
              <motion.textarea whileFocus={{ scale: 1.02 }} placeholder="Your Message" rows={6} className="w-full px-6 py-4 bg-red-950/20 border border-red-900/30 rounded-xl focus:border-red-600 focus:outline-none transition-colors resize-none text-white" />
              <motion.button whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(220, 38, 38, 0.5)" }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-4 bg-gradient-to-r from-red-600 to-red-900 rounded-xl font-bold text-lg hover:from-red-700 hover:to-red-950 transition-all">
                Send Message
              </motion.button>
            </motion.form>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-12 flex justify-center gap-8">
              <motion.a href="https://github.com/Xav0929" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
                <Github size={20} />
                <span className="hidden md:inline text-sm">github.com/Xav0929</span>
              </motion.a>
              <motion.a href="https://www.facebook.com/francis.quiambao.125958" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
                <Facebook size={20} />
                <span className="hidden md:inline text-sm">francis.quiambao.125958</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      )}
    </div>
  );
}