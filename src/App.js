import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a href="#home" className="logo">Taha Hilal Bik</a>
          <ul className="nav-links">
            <li><a href="#about">À Propos</a></li>
            <li><a href="#experience">Expérience</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Taha Hilal Bik</h1>
            <h2>Ingénieur en Génie Informatique</h2>
            <p>Développeur Full Stack spécialisé en Java, Spring Boot et React</p>
            <a href="#contact" className="btn">Me Contacter</a>
          </div>
          <div className="hero-image">
            {/* Vous pouvez ajouter votre photo ici */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">À Propos de Moi</h2>
          <div className="about-content">
            <p>
              Étudiant en dernière année du cycle ingénieur en génie informatique, je possède une forte volonté de contribuer au développement de solutions logicielles innovantes. 
              Passionné par le développement web et mobile, je maîtrise les technologies modernes pour créer des applications performantes et intuitives.
            </p>
            <div className="education">
              <h3>Formation</h3>
              <ul>
                <li>
                  <strong>Cycle d'ingénierie en informatique et réseau</strong>
                  <span>EMSI (2022-2025)</span>
                </li>
                <li>
                  <strong>Années préparatoires</strong>
                  <span>EMSI (2020-2022)</span>
                </li>
                <li>
                  <strong>Baccalauréat physique chimie option français</strong>
                  <span>Mention Bien (2019-2020)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section dark-bg">
        <div className="container">
          <h2 className="section-title">Expérience Professionnelle</h2>
          
          <div className="experience-item">
            <h3>Stagiaire en Développement Web</h3>
            <h4>Royal Air Maroc (RAM) | Juillet 2024 - Août 2024</h4>
            <p>
              Développement d'une application web centralisant la gestion des pièces, maintenances et rapports.
            </p>
            <ul className="responsibilities">
              <li>Conception et modélisation UML du système</li>
              <li>Développement du frontend et backend de l'application</li>
              <li>Intégration des fonctionnalités de planification de maintenance</li>
            </ul>
            <div className="tech-stack">
              <span>Spring Boot</span>
              <span>Java</span>
              <span>Thymeleaf</span>
              <span>MySQL</span>
            </div>
          </div>

          <div className="experience-item">
            <h3>Stagiaire en Développement Web</h3>
            <h4>Safflait, Maroc | Août 2023 - Septembre 2023</h4>
            <p>
              Développement d'un site de vente en ligne pour le secteur agroalimentaire.
            </p>
            <ul className="responsibilities">
              <li>Modélisation des systèmes avec UML</li>
              <li>Développement du frontend et backend du site</li>
              <li>Gestion de la base de données pour le suivi des commandes</li>
            </ul>
            <div className="tech-stack">
              <span>PHP</span>
              <span>JavaScript</span>
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Mes Compétences</h2>
          <div className="skills-container">
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Langages de Programmation</h3>
                <ul>
                  <li>Java</li>
                  <li>Python</li>
                  <li>C/C++</li>
                  <li>C#</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3>Technologies Web</h3>
                <ul>
                  <li>Spring Boot</li>
                  <li>React JS</li>
                  <li>Angular</li>
                  <li>Thymeleaf</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3>Bases de Données</h3>
                <ul>
                  <li>MySQL</li>
                  <li>SQL Server</li>
                  <li>Oracle</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3>Outils & Méthodologies</h3>
                <ul>
                  <li>UML</li>
                  <li>Scrum</li>
                  <li>Git</li>
                  <li>Linux</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Soft Skills</h3>
                <ul>
                  <li>Esprit d'équipe</li>
                  <li>Rigueur</li>
                  <li>Communication</li>
                  <li>Résolution de problèmes</li>
                  <li>Adaptabilité</li>
                </ul>
              </div>
            </div>

            <div className="languages-section">
              <h3>Langues</h3>
              <div className="language-item">
                <span className="language-name">Arabe (Langue maternelle)</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{width: '100%'}}></div>
                </div>
              </div>
              <div className="language-item">
                <span className="language-name">Français (Bilingue)</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{width: '95%'}}></div>
                </div>
              </div>
              <div className="language-item">
                <span className="language-name">Anglais (Intermédiaire)</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section dark-bg">
        <div className="container">
          <h2 className="section-title">Mes Projets</h2>
          <div className="projects-grid">
            
            {/* Projet Smart Recruter */}
            <div className="project-card">
              <h3>Smart Recruter</h3>
              <p className="project-description">
                Plateforme de recrutement intelligent utilisant l'IA pour matcher 
                les compétences des candidats avec les offres d'emploi.
              </p>
              <div className="project-tech">
                <span>Angular</span>
                <span>Spring Boot</span>
                <span>MySQL</span>
                <span>Ollama (IA)</span>
                <span>NLP</span>
              </div>
              <a href="#" className="project-link">
                <span>Voir le projet</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            
            {/* Projet BookHub */}
            <div className="project-card">
              <h3>BookHub</h3>
              <p className="project-description">Plateforme Web de distribution et gestion d'E-Books</p>
              <div className="project-tech">
                <span>React</span>
                <span>Spring Boot</span>
                <span>MySQL</span>
              </div>
              <a href="#" className="project-link">
                <span>Voir le projet</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            
            {/* Projet QuizzApp */}
            <div className="project-card">
              <h3>QuizzApp</h3>
              <p className="project-description">Application mobile de quizz pour le permis de conduire</p>
              <div className="project-tech">
                <span>React Native</span>
                <span>Firebase</span>
              </div>
              <a href="#" className="project-link">
                <span>Voir le projet</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Contactez-moi</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Informations de Contact</h3>
              <ul>
                <li>
                  <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  hilalbiktaha@gmail.com
                </li>
                <li>
                  <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +212-691436399
                </li>
                <li>
                  <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Casablanca, Maroc
                </li>
              </ul>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/taha-hilalbik-8555b2246/" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://github.com/tahahb02" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Votre nom" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Votre email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Votre message" required></textarea>
              </div>
              <button type="submit" className="btn">Envoyer</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Taha Hilal Bik. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;