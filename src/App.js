import React, { useState } from 'react';
import { Github, ExternalLink, Mail, Linkedin, Code, Database, MessageSquare, User, Briefcase, GraduationCap, Phone } from 'lucide-react';
import './Portfolio.css'; 

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
    backend: ['Node.js', 'Express.js'],
    other: ['OpenAI API', 'Git', 'GitHub', 'RESTful APIs']
  };

  const projects = [
    {
      id: 1,
      title: "AI Chatbot Applikasjon",
      description: "En full-stack chatbot-applikasjon bygget med React frontend og Node.js/Express backend, integrert med OpenAI API for intelligente samtaler.",
      technologies: ["React", "Node.js", "Express.js", "OpenAI API"],
      type: "Full Stack",
      github: "#",
      demo: "#",
      highlights: ["Sanntids chatgrensesnitt", "OpenAI API-integrasjon", "Responsivt design"]
    },
    {
      id: 2,
      title: "React Dashboard",
      description: "En responsiv dashboard-applikasjon som viser moderne React-utviklingspraksis med komponentbasert arkitektur.",
      technologies: ["React", "JavaScript", "CSS"],
      type: "Frontend",
      github: "#",
      demo: "#",
      highlights: ["Komponentbasert arkitektur", "Responsivt design", "Moderne UI/UX"]
    },
    {
      id: 3,
      title: "Express API Server",
      description: "En RESTful API-server bygget med Express.js og Node.js, med autentisering og dataadministrasjon.",
      technologies: ["Node.js", "Express.js", "JavaScript"],
      type: "Backend",
      github: "#",
      demo: "#",
      highlights: ["RESTful arkitektur", "Autentiseringssystem", "Feilhåndtering"]
    }
  ];

  const NavButton = ({ section, icon: Icon, label }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`nav-button ${activeSection === section ? 'active' : ''}`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  const SkillBadge = ({ skill }) => (
    <span className="skill-badge">{skill}</span>
  );

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="project-card-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-type">{project.type}</span>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-highlights">
          <h4 className="project-highlights-title">Nøkkelfunksjoner:</h4>
          <ul className="project-highlights-list">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="project-highlight-item">
                <div className="project-highlight-dot"></div>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="project-tech">{tech}</span>
          ))}
        </div>
        
        <div className="project-links">
          <a href={project.github} className="project-link github">
            <Github size={16} />
            Kode
          </a>
          <a href={project.demo} className="project-link demo">
            <ExternalLink size={16} />
            Demo
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-info">
            <h1>Yazan Alsayegh</h1>
            <p>IT-student & Full Stack Utvikler</p>
          </div>
          <div className="header-links">
            <a href="mailto:yazanalsayegh@icloud.com">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/yazan-alsayegh-761baa2b1/">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Yazan-Alsayegh">
              <Github size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-content">
          <div className="nav-buttons">
            <NavButton section="hero" icon={User} label="Hjem" />
            <NavButton section="about" icon={User} label="Om Meg" />
            <NavButton section="skills" icon={Code} label="Ferdigheter" />
            <NavButton section="projects" icon={Briefcase} label="Prosjekter" />
            <NavButton section="education" icon={GraduationCap} label="Utdanning" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'hero' && (
        <section className="hero-section fade-in">
          <div className="hero-content">
            <div className="profile-image">
              {/* Replace with your actual image */}
              <img 
                src="/api/placeholder/150/150" 
                alt="Profil" 
                style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{display: 'none', fontSize: '3rem'}}>👨‍💻</div>
            </div>
            <h1 className="hero-title">Yazan Alsayegh</h1>
            <h2 className="hero-subtitle">Full Stack Utvikler & IT-student</h2>
            <p className="hero-description">
              Lidenskapelig opptatt av å skape innovative webløsninger med moderne teknologier.
              Spesialiserer meg på React, Node.js og AI-integrasjon for å bygge applikasjoner som utgjør en forskjell.
            </p>
            <div className="hero-buttons">
              <button 
                className="hero-button primary"
                onClick={() => setActiveSection('projects')}
              >
                <Briefcase size={20} />
                Se Mitt Arbeid
              </button>
              <button 
                className="hero-button secondary"
                onClick={() => setActiveSection('about')}
              >
                <User size={20} />
                Om Meg
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="main-content">
        {/* About Section */}
        {activeSection === 'about' && (
          <section className="section fade-in">
            <h2 className="section-title">Om Meg</h2>
            <div>
              <p className="section-description">
                Jeg er en lidenskapelig IT-student med praktisk erfaring innen full-stack webutvikling.
                Under mine universitetsstudier har jeg jobbet med flere prosjekter som demonstrerer min
                evne til å bygge komplette webapplikasjoner fra frontend til backend.
              </p>
              <p className="section-description">
                Min ekspertise omfatter moderne webteknologier inkludert React for frontend-utvikling
                og Node.js med Express.js for backend-tjenester. Jeg har erfaring med integrering av
                tredjeparts API-er og bygging av responsive, brukervennlige applikasjoner.
              </p>
              <p className="section-description">
                Jeg søker aktivt muligheter for å anvende mine ferdigheter i et profesjonelt miljø
                og bidra til innovative prosjekter mens jeg fortsetter å lære og vokse som utvikler.
              </p>
              
              {/* Contact Info */}
              <div style={{marginTop: '2rem', padding: '1.5rem', background: '#f9fafb', borderRadius: '0.5rem'}}>
                <h3 style={{marginBottom: '1rem', color: '#111827'}}>Kontakt Meg</h3>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <Mail size={16} className="icon-blue" />
                    <span>yazanalsayegh@icloud.com</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <Phone size={16} className="icon-green" />
                    <span>45142504</span>
                  </div>
                 
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="section fade-in">
            <h2 className="section-title">Tekniske Ferdigheter</h2>
            
            <div className="skills-grid">
              <div className="skill-category">
                <div className="skill-category-header">
                  <Code className="icon-blue" size={24} />
                  <h3 className="skill-category-title">Frontend</h3>
                </div>
                <div className="skill-badges">
                  {skills.frontend.map((skill, index) => (
                    <SkillBadge key={index} skill={skill} />
                  ))}
                </div>
              </div>
              
              <div className="skill-category">
                <div className="skill-category-header">
                  <Database className="icon-green" size={24} />
                  <h3 className="skill-category-title">Backend</h3>
                </div>
                <div className="skill-badges">
                  {skills.backend.map((skill, index) => (
                    <SkillBadge key={index} skill={skill} />
                  ))}
                </div>
              </div>
              
              <div className="skill-category">
                <div className="skill-category-header">
                  <MessageSquare className="icon-purple" size={24} />
                  <h3 className="skill-category-title">Annet</h3>
                </div>
                <div className="skill-badges">
                  {skills.other.map((skill, index) => (
                    <SkillBadge key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="fade-in">
            <div className="projects-header">
              <h2 className="projects-header-title">Mine Prosjekter</h2>
              <p className="projects-header-description">
                Her er noen av prosjektene jeg har jobbet med under mine universitetsstudier,
                som viser mine ferdigheter innen full-stack utvikling.
              </p>
            </div>
            
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <section className="section fade-in">
            <h2 className="section-title">Utdanning</h2>
            
            <div className="education-timeline">
              <div className="education-item">
                <h3 className="education-title">Bachelorgrad i Informasjonsteknologi</h3>
                <p className="education-institution">Universitetsnavn • Forventet fullføring: År</p>
                <p className="education-description">
                  Fokusert på programvareutvikling, webteknologier og full-stack applikasjonsutvikling.
                  Fullført prosjekter i React, Node.js og API-integrasjon, inkludert en chatbot-applikasjon
                  ved bruk av OpenAI API.
                </p>
              </div>
              
              <div className="coursework-section">
                <h4 className="coursework-title">Viktige Kurs:</h4>
                <div className="coursework-grid">
                  <div className="coursework-item">• Webutvikling</div>
                  <div className="coursework-item">• Databasesystemer</div>
                  <div className="coursework-item">• Programvareutvikling</div>
                  <div className="coursework-item">• Datastrukturer & Algoritmer</div>
                  <div className="coursework-item">• Systemanalyse & Design</div>
                  <div className="coursework-item">• API-utvikling</div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">Klar til å bringe dine ideer til live med kode!</p>
          <div className="footer-links">
            <a href="mailto:yazanalsayegh@icloud.com" className="footer-link">
              yazanalsayegh@icloud.com
            </a>
            <a href="https://github.com/Yazan-Alsayegh" className="footer-link">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yazan-alsayegh-761baa2b1/" className="footer-link">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;