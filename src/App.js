import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Code, Database, MessageSquare, User, Briefcase, GraduationCap, Phone, ExternalLink, ChevronRight, Sparkles } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
    backend: ['Java', 'Node.js', 'Express.js'],
    other: ['OpenAI API', 'Git', 'GitHub', 'RESTful APIs', 'Responsive Design', 'Firebase', 'SQL', 'MySQL', 'UI/UX-design (Figma)']
  };

  const projects = [
    {
      id: 1,
      title: "Treningssenter Webapplikasjon",
      description: "En moderne React-basert webapplikasjon utviklet for treningssentre, tilkoblet Firebase for sanntids database og autentisering. Systemet er designet for å håndtere medlemskap, treningsplaner og brukerinteraksjon gjennom et responsivt web-grensesnitt.",
      technologies: ["React", "JavaScript", "Firebase", "Firestore", "CSS", "React Router"],
      type: "Webapplikasjon",
      github: "https://github.com/Yazan-Alsayegh/TreningsCenter-Webapplikasjon",
      highlights: ["Firebase-autentisering og sikkerhet", "Medlemskapshåndtering og abonnementsplaner", "Responsive design for alle enheter", "Kontaktskjema og brukerinteraksjon", "Medlemsportal med profilhåndtering"],
      screenshots: [
        require('./assets/Treningssenter.png')
      ]
    },
    {
      id: 2,
      title: "OAP Transportsystem",
      description: "En Java-basert skrivebordsapplikasjon utviklet med Swing, tilkoblet en MySQL-database. Systemet er designet for å administrere kunder og transportdata gjennom et brukervennlig grensesnitt.",
      technologies: ["Java", "Swing", "MySQL", "Maven"],
      type: "Desktop App",
      github: "https://github.com/Yazan-Alsayegh/OAP-Transportsystem",
      highlights: ["CRUD-operasjoner for kunde- og transportdata", "MySQL-databaseintegrasjon", "Dynamisk temabytting", "Eksport av data", "JavaDoc-dokumentasjon inkludert"],
      screenshots: [
        require('./assets/OAP-Transportsystem 1.png'),
        require('./assets/OAP-Transportsystem 2.png'),
        require('./assets/OAP-Transportsystem 3.png')
      ]
    },
    {
      id: 3,
      title: "FitX-Treningssenter Bacheloroppgave",
      description: "Et moderne bookingsystem utviklet med React og Firebase, designet for å administrere treningsøkter, medlemskap og brukerinteraksjon. Systemet tilbyr sanntids booking, AI-chatbot assistanse og personaliserte treningsanbefalinger gjennom en responsiv webapplikasjon.",
      technologies: ["React", "Firebase" ,"Open AI" , "Chatbot" , "React Router" ,"Node.js", "Express.js", "JavaScript"],
      type: "Fullstack Webapplikasjon",
      github: "https://github.com/Yazan-Alsayegh/FitX-Treningssenter-Bacheloroppgave",
      highlights: ["React for frontend-utvikling", "Firebase Firestore for sanntids database", "Express.js for chatbot backend", "OpenAI API for AI-assistanse", "JavaScript (ES6+) for applikasjonslogikk", "Firebase Authentication for brukersikkerhet", "CSS for responsivt design", "Firebase OnSnapshot for sanntidsoppdateringer"],
      screenshots: [
        require('./assets/FitX-Treningssenter 1.png'),
        require('./assets/FitX-Treningssenter 2.png'),
        require('./assets/FitX-Treningssenter 3.png'),
        require('./assets/FitX-Treningssenter 4.png')
      ]
    }
  ];

  const NavButton = ({ section, icon: Icon, label }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`nav-button ${activeSection === section ? 'nav-button-active' : ''}`}
    >
      <div className="nav-button-content">
        <Icon size={18} />
        <span className="nav-button-label">{label}</span>
      </div>
      {activeSection === section && (
        <div className="nav-button-glow"></div>
      )}
    </button>
  );

  return (
    <div className="portfolio-container">
      {/* Animated background elements */}
      <div className="background-elements">
        <div 
          className="bg-element bg-element-1"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="bg-element bg-element-2"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <div className="header-brand">
              <div className="brand-icon">
                Y
              </div>
              <div className="brand-text">
                <h1 className="brand-name">
                  Yazan Alsayegh
                </h1>
                <p className="brand-subtitle">IT Graduate</p>
              </div>
            </div>
            <div className="header-social">
              <a href="mailto:yazanalsayegh@icloud.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/yazan-alsayegh-761baa2b1/" className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Yazan-Alsayegh" className="social-link" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-content">
            <NavButton section="hero" icon={Sparkles} label="Hjem" />
            <NavButton section="about" icon={User} label="Om Meg" />
            <NavButton section="skills" icon={Code} label="Ferdigheter" />
            <NavButton section="projects" icon={Briefcase} label="Prosjekter" />
            <NavButton section="education" icon={GraduationCap} label="Utdanning" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        {activeSection === 'hero' && (
          <section className="hero-section">
            <div className="hero-container">
              <div className="hero-avatar">
                <div className="avatar-wrapper">
                  <div className="avatar-circle">
                    <div className="avatar-content">
                      👨‍💻
                    </div>
                  </div>
                  <div className="avatar-glow"></div>
                </div>
              </div>
              
              <h1 className="hero-title">
                Yazan Alsayegh
              </h1>
              
              <h2 className="hero-subtitle">
                IT Graduate
              </h2>
              
              <p className="hero-description">
                Engasjert utvikler med erfaring i React og frontend-utvikling, kombinert med backend-prosjekter i Express.js og API-integrasjoner. Har også utviklet en Java-basert desktop-app for et transportselskap, og brenner for å skape brukervennlige og innovative løsninger.
              </p>
              
              <div className="hero-buttons">
                <button 
                  onClick={() => setActiveSection('projects')}
                  className="btn btn-primary"
                >
                  <Briefcase size={20} />
                  Se Mitt Arbeid
                  <ChevronRight size={20} className="btn-icon" />
                </button>
                <button 
                  onClick={() => setActiveSection('about')}
                  className="btn btn-secondary"
                >
                  <User size={20} />
                  Om Meg
                </button>
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="section">
            <div className="section-container">
              <div className="card">
                <h2 className="section-title">
                  Om Meg
                </h2>
                
                <div className="about-content">
                  <p>
                    Jeg er nyutdannet med bachelor i IT og ledelse, og har en sterk interesse for utvikling. Jeg brenner for å bygge brukervennlige løsninger med moderne teknologier som React på frontend og Express.js på backend, men jeg er også åpen og lærevillig når det gjelder andre IT-roller.
                  </p>
                  <p>
                 Gjennom studier og prosjekter har jeg fått solid erfaring med webutvikling, API-integrasjoner og programvareutvikling. I tillegg har jeg jobbet som IT Service Desk-medarbeider ved Melsom videregående skole, hvor jeg fikk praktisk erfaring med brukerstøtte, feilsøking, systemadministrasjon og kommunikasjon med både elever og ansatte.
                  </p>
                  <p>
                  Jeg ønsker nå å bidra i et profesjonelt miljø der jeg kan videreutvikle mine ferdigheter, lære nye teknologier og skape verdi gjennom engasjement, samarbeid og kontinuerlig læring.
                  </p>
                </div>
                
                {/* Contact Info */}
                <div className="contact-info">
                  <h3 className="contact-title">Kontakt Meg</h3>
                  <div className="contact-items">
                    <div className="contact-item">
                      <div className="contact-icon contact-icon-email">
                        <Mail size={20} />
                      </div>
                      <span>yazanalsayegh@icloud.com</span>
                    </div>
                    <div className="contact-item">
                      <div className="contact-icon contact-icon-phone">
                        <Phone size={20} />
                      </div>
                      <span>451 42 504</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="section">
            <div className="skills-container">
              <h2 className="section-title-center">
                Tekniske Ferdigheter
              </h2>
              
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-icon skill-icon-frontend">
                      <Code size={28} />
                    </div>
                    <h3 className="skill-title">Frontend</h3>
                  </div>
                  <div className="skill-tags">
                    {skills.frontend.map((skill, index) => (
                      <span key={index} className="skill-tag skill-tag-frontend">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-icon skill-icon-backend">
                      <Database size={28} />
                    </div>
                    <h3 className="skill-title">Backend</h3>
                  </div>
                  <div className="skill-tags">
                    {skills.backend.map((skill, index) => (
                      <span key={index} className="skill-tag skill-tag-backend">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="skill-card">
                  <div className="skill-header">
                    <div className="skill-icon skill-icon-other">
                      <MessageSquare size={28} />
                    </div>
                    <h3 className="skill-title">Annet</h3>
                  </div>
                  <div className="skill-tags">
                    {skills.other.map((skill, index) => (
                      <span key={index} className="skill-tag skill-tag-other">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="section">
            <div className="projects-container">
              <div className="projects-header">
                <h2 className="section-title-center">
                  Mine Prosjekter
                </h2>
                <p className="projects-description">
                  Her er noen av prosjektene jeg har jobbet med under mine universitetsstudier,
                  som viser mine ferdigheter innen front-end utvikling og API-integrasjon.
                </p>
              </div>
              
              <div className="projects-grid">
                {projects.map((project) => (
                  <div key={project.id} className="project-card">
                    <div className="project-header">
                      <h3 className="project-title">
                        {project.title}
                      </h3>
                      <span className="project-type">
                        {project.type}
                      </span>
                    </div>
                    
                    <p className="project-description">
                      {project.description}
                    </p>
                    
                    <div className="project-highlights">
                      <h4 className="highlights-title">Nøkkelfunksjoner:</h4>
                      <ul className="highlights-list">
                        {project.highlights.map((highlight, index) => (
                          <li key={index} className="highlight-item">
                            <div className="highlight-dot"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="project-technologies">
                      <div className="tech-tags">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Screenshots */}
                    {project.screenshots && project.screenshots.length > 0 && (
                      <button
                        className="gallery-btn"
                        onClick={() => {
                          setGalleryImages(project.screenshots);
                          setGalleryIndex(0);
                          setGalleryOpen(true);
                        }}
                      >
                        Åpne Galleri
                      </button>
                    )}
                    
                    <a 
                      href={project.github} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                      Kode
                      <ExternalLink size={16} className="project-link-icon" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <section className="section">
            <div className="section-container">
              <div className="card">
                <h2 className="section-title">
                  Utdanning
                </h2>
                
                <div className="education-timeline">
                  <div className="timeline-line"></div>
                  
                  <div className="education-item">
                    <div className="timeline-icon">
                      <GraduationCap size={16} />
                    </div>
                    
                    <div className="education-content">
                      <h3 className="education-title">
                        Bachelorgrad i IT og Ledelse
                      </h3>
                      <p className="education-institution">
                        Universitetet i Sørøst-Norge • 2022 - 2025
                      </p>
                      <p className="education-description">
                        Fokusert på frontend-utvikling, webteknologier og brukergrensesnitt.
                        Fullført prosjekter i React, med erfaring fra mindre prosjekter i Node.js og API-integrasjon, 
                        inkludert en chatbot-applikasjon ved bruk av OpenAI API.
                      </p>
                    </div>
                    
                    <div className="courses-section">
                      <h4 className="courses-title">Viktige Kurs:</h4>
                      <div className="courses-grid">
                        {[
                          "Webutvikling",
                          "Databasesystemer", 
                          "Programvareutvikling",
                          "Datastrukturer & Algoritmer",
                          "Systemanalyse & Design",
                          "API-utvikling"
                        ].map((course, index) => (
                          <div key={index} className="course-item">
                            <div className="course-dot"></div>
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-links">
            <a href="mailto:yazanalsayegh@icloud.com" className="footer-link" target="_blank" rel="noopener noreferrer">
              yazanalsayegh@icloud.com
            </a>
            <a href="https://github.com/Yazan-Alsayegh" className="footer-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yazan-alsayegh-761baa2b1/" className="footer-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="footer-divider"></div>
        </div>
      </footer>

      {/* Gallery Modal */}
      {galleryOpen && (
        <div className="gallery-modal">
          <div className="gallery-overlay" onClick={() => setGalleryOpen(false)}></div>
          <div className="gallery-content">
            <button className="gallery-close" onClick={() => setGalleryOpen(false)}>×</button>
            <button
              className="gallery-prev"
              onClick={() => setGalleryIndex((galleryIndex - 1 + galleryImages.length) % galleryImages.length)}
              disabled={galleryImages.length <= 1}
            >
              ‹
            </button>
            <img
              src={galleryImages[galleryIndex]}
              alt={`Gallery ${galleryIndex + 1}`}
              className="gallery-img"
            />
            <button
              className="gallery-next"
              onClick={() => setGalleryIndex((galleryIndex + 1) % galleryImages.length)}
              disabled={galleryImages.length <= 1}
            >
              ›
            </button>
            <div className="gallery-counter">
              {galleryIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;