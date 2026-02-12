import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import des images
import webDevImage from './images/web-development.jpg';
import mobileDevImage from './images/mobile-development.jpg';
import aiImage from './images/ai.jpg';
import profileImage from './images/profile1.jpg';
import javaCert from './images/java-cert.jpg.png';
import pythonCert from './images/python-cert.jpg.png';
import reactCert from './images/react-cert.jpg.png';
import umlCert from './images/uml-cert.jpg.png';
import agileCert from './images/agile-cert.jpg.png';
import frenchCert from './images/french-cert.jpg.png';

// URLs des drapeaux
const flagUrls = {
  fr: 'https://flagcdn.com/w320/fr.png',
  en: 'https://flagcdn.com/w320/gb.png',
  de: 'https://flagcdn.com/w320/de.png'
};

// Liens des certifications (dans l'ordre)
const certLinks = [
  "https://coursera.org/verify/E2G6LQ6RPKF9", // Java
  "https://coursera.org/verify/specialization/YK2QFQMJJWM7", // Python
  "https://coursera.org/verify/WDJRQJ5NBEKQ", // React
  "https://coursera.org/verify/HR2PPS34TLCD", // UML
  "https://coursera.org/verify/GJH6FXZ4ETZH", // Agile
  "https://coursera.org/verify/C3ZB2U66SMKY"  // French
];

// Fichier de traductions
const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      experience: "Expérience",
      skills: "Compétences",
      projects: "Projets",
      certifications: "Certifications",
      contact: "Contact"
    },
    hero: {
      title: "Taha Hilal Bik",
      subtitle: "Ingénieur d'État en Génie Informatique et Réseaux - MIAGE",
      description: "Spécialiste en développement full-stack avec Java Spring Boot et React, passionné par l'architecture logicielle et l'intégration de l'IA",
      contact: "Me Contacter",
      viewCV: "Visualiser CV",
      downloadCV: "Télécharger CV"
    },
    about: {
      title: "À Propos de Moi",
      description1: "Ingénieur d'État en Génie Informatique et Réseaux, option MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises).",
      description2: "Spécialisé en développement full-stack avec Java Spring Boot et React, je possède une forte volonté de contribuer au développement de solutions logicielles innovantes dans des secteurs exigeants comme l'aéronautique et l'agroalimentaire.",
      description3: "Passionné par le développement web, mobile et l'architecture logicielle, je maîtrise les technologies modernes pour créer des applications performantes et intuitives.",
      education: "Formation",
      educationItems: [
        {
          title: "Ingénieur d'État en Génie Informatique et Réseaux",
          subtitle: "Option MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises)",
          date: "EMSI (2022-2025)"
        },
        {
          title: "Années préparatoires",
          subtitle: "",
          date: "EMSI (2020-2022)"
        },
        {
          title: "Baccalauréat physique chimie option français",
          subtitle: "Mention Bien",
          date: "(2019-2020)"
        }
      ],
      imageCaptions: ["Développement Full-Stack", "Architecture Logicielle", "Intelligence Artificielle"]
    },
    experience: {
      title: "Expérience Professionnelle",
      experiences: [
        {
          title: "Stagiaire Développeur Full Stack – PFE",
          company: "Web4Jobs",
          period: "Mars 2025 – Août 2025 | Casablanca, Maroc",
          description: "Développement d'une plateforme de gestion des patrimoines pour les centres de coding de l'entreprise au Maroc et en Afrique.",
          responsibilities: [
            "Analyse des besoins et modélisation UML du système",
            "Développement Front-End avec ReactJS et Back-End avec Java Spring Boot",
            "Intégration d'un module IA (Ollama LLM) pour la maintenance prédictive",
            "Mise en place des API REST et gestion de la base de données MySQL"
          ],
          tech: ["Java", "Spring Boot", "React JS", "MySQL", "Ollama LLM", "REST API", "Git"]
        },
        {
          title: "Stagiaire Développeur Web",
          company: "Royal Air Maroc (RAM)",
          period: "Juillet 2024 – Août 2024 | Casablanca, Maroc",
          description: "Développement d'une application de gestion centralisée des pièces et maintenances pour le secteur aéronautique.",
          responsibilities: [
            "Conception et modélisation UML du système",
            "Développement du frontend avec Thymeleaf et backend avec Spring Boot",
            "Intégration des fonctionnalités de planification de maintenance",
            "Gestion de la base de données MySQL"
          ],
          tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Git"]
        },
        {
          title: "Stagiaire Développeur Web",
          company: "Safflait (Groupe Bel)",
          period: "Août 2023 – Septembre 2023 | Casablanca, Maroc",
          description: "Développement d'un site e-commerce dédié au secteur agroalimentaire.",
          responsibilities: [
            "Modélisation des systèmes avec UML",
            "Développement du frontend avec HTML/CSS/JavaScript et backend avec PHP",
            "Gestion de la base de données MySQL pour le suivi des commandes",
            "Intégration des fonctionnalités de paiement et gestion de stock"
          ],
          tech: ["PHP", "JavaScript", "HTML/CSS", "MySQL"]
        }
      ]
    },
    skills: {
      title: "Mes Compétences",
      categories: [
        {
          title: "Langages de Programmation",
          items: ["Java", "Python", "C/C++", "C#", "JavaScript", "PHP"]
        },
        {
          title: "Technologies & Frameworks",
          items: ["Spring Boot", "React JS", "Angular", "Thymeleaf", "Django", "REST API"]
        },
        {
          title: "Bases de Données",
          items: ["MySQL", "PostgreSQL", "SQL Server", "Oracle"]
        },
        {
          title: "Outils & Méthodologies",
          items: ["Git / GitHub", "Agile / Scrum", "UML", "CI/CD", "Jira", "IntelliJ / VS Code"]
        },
        {
          title: "Soft Skills",
          items: ["Esprit d'équipe", "Rigueur et autonomie", "Curiosité technique", "Gestion des priorités", "Résolution de problèmes complexes", "Communication efficace"]
        }
      ],
      languages: {
        title: "Langues",
        items: [
          { name: "Arabe (Langue maternelle)", level: 100 },
          { name: "Français (Bilingue)", level: 95 },
          { name: "Anglais (Opérationnel)", level: 75 },
          { name: "Allemand (Intermédiaire niveau B1)", level: 60 }
        ]
      }
    },
    projects: {
      title: "Mes Projets",
      projects: [
        {
          title: "Smart Recruiter",
          description: "Plateforme de recrutement intelligent utilisant l'IA (LLM Ollama) pour matcher automatiquement les compétences des candidats avec les offres d'emploi.",
          tech: ["React JS", "Spring Boot", "MySQL", "Ollama LLM", "NLP", "REST API"],
          viewProject: "Voir mes projets",
        },
        {
          title: "BookHub",
          description: "Plateforme complète de gestion et distribution d'E-Books avec système de recommandation et gestion des droits d'auteur.",
          tech: ["React JS", "Spring Boot", "MySQL", "JWT", "Microservices"],
          viewProject: "Voir mes projets",
        },
        {
          title: "Car Rental System",
          description: "Application web complète de location de voiture en ligne avec réservation, gestion des véhicules, authentification et paiement.",
          tech: ["Spring Boot", "Thymeleaf", "MySQL", "Spring Security", "Bootstrap"],
          viewProject: "Voir mes projets",
        },
        {
          title: "QuizzApp",
          description: "Application mobile de quiz interactif pour la préparation au permis de conduire avec suivi des progrès et statistiques détaillées.",
          tech: ["Android (Java)", "Firebase", "SQLite", "Material Design"],
          viewProject: "Voir mes projets",
        },
        {
          title: "FiTTrack Web App",
          description: "Application web de calcul de calories et suivi nutritionnel avec recommandations personnalisées et suivi des objectifs de santé.",
          tech: ["Django", "React JS", "MySQL", "Chart.js", "JWT Auth", "REST API"],
          viewProject: "Voir mes projets",
        }
      ]
    },
    certifications: {
      title: "Mes Certifications",
      viewCert: "Voir la certification",
      viewOnCoursera: "Voir sur Coursera",
      close: "Fermer",
      certifications: [
        {
          title: "Introduction to Java and Object-Oriented Programming",
          issuer: "Coursera",
          image: javaCert,
          link: "https://coursera.org/verify/E2G6LQ6RPKF9"
        },
        {
          title: "Python for Everybody",
          issuer: "Coursera",
          image: pythonCert,
          link: "https://coursera.org/verify/specialization/YK2QFQMJJWM7"
        },
        {
          title: "React Basics",
          issuer: "Coursera",
          image: reactCert,
          link: "https://coursera.org/verify/WDJRQJ5NBEKQ"
        },
        {
          title: "Software Engineering: Modeling Software Systems using UML",
          issuer: "Coursera",
          image: umlCert,
          link: "https://coursera.org/verify/HR2PPS34TLCD"
        },
        {
          title: "Agile with Atlassian Jira",
          issuer: "Coursera",
          image: agileCert,
          link: "https://coursera.org/verify/GJH6FXZ4ETZH"
        },
        {
          title: "French Intermediate course B1-B2",
          issuer: "Coursera",
          image: frenchCert,
          link: "https://coursera.org/verify/C3ZB2U66SMKY"
        }
      ]
    },
    contact: {
      title: "Contactez-moi",
      info: "Informations de Contact",
      email: "hilalbiktaha@gmail.com",
      phone: "+212-691436399",
      location: "Casablanca, Maroc",
      form: {
        name: "Votre nom",
        email: "Votre email",
        message: "Votre message",
        send: "Envoyer"
      },
      social: {
        linkedin: "LinkedIn",
        github: "GitHub"
      }
    },
    footer: {
      copyright: "Taha Hilal Bik. Tous droits réservés.",
      subtitle: "Ingénieur d'État en Génie Informatique et Réseaux - MIAGE"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact"
    },
    hero: {
      title: "Taha Hilal Bik",
      subtitle: "State Engineer in Computer Science and Networks - MIAGE",
      description: "Full-stack development specialist with Java Spring Boot and React, passionate about software architecture and AI integration",
      contact: "Contact Me",
      viewCV: "View CV",
      downloadCV: "Download CV"
    },
    about: {
      title: "About Me",
      description1: "State Engineer in Computer Science and Networks, MIAGE option (Computer Methods Applied to Business Management).",
      description2: "Specialized in full-stack development with Java Spring Boot and React, I have a strong desire to contribute to the development of innovative software solutions in demanding sectors such as aeronautics and agri-food.",
      description3: "Passionate about web development, mobile development and software architecture, I master modern technologies to create performant and intuitive applications.",
      education: "Education",
      educationItems: [
        {
          title: "State Engineer in Computer Science and Networks",
          subtitle: "MIAGE option (Computer Methods Applied to Business Management)",
          date: "EMSI (2022-2025)"
        },
        {
          title: "Preparatory years",
          subtitle: "",
          date: "EMSI (2020-2022)"
        },
        {
          title: "Baccalaureate in Physics-Chemistry with French option",
          subtitle: "With Honors",
          date: "(2019-2020)"
        }
      ],
      imageCaptions: ["Full-Stack Development", "Software Architecture", "Artificial Intelligence"]
    },
    experience: {
      title: "Professional Experience",
      experiences: [
        {
          title: "Full Stack Developer Intern – Final Year Project",
          company: "Web4Jobs",
          period: "March 2025 – August 2025 | Casablanca, Morocco",
          description: "Development of an asset management platform for the company's coding centers in Morocco and Africa.",
          responsibilities: [
            "Needs analysis and UML system modeling",
            "Front-End development with ReactJS and Back-End with Java Spring Boot",
            "Integration of an AI module (Ollama LLM) for predictive maintenance",
            "Implementation of REST APIs and MySQL database management"
          ],
          tech: ["Java", "Spring Boot", "React JS", "MySQL", "Ollama LLM", "REST API", "Git"]
        },
        {
          title: "Web Developer Intern",
          company: "Royal Air Maroc (RAM)",
          period: "July 2024 – August 2024 | Casablanca, Morocco",
          description: "Development of a centralized parts and maintenance management application for the aeronautical sector.",
          responsibilities: [
            "System design and UML modeling",
            "Frontend development with Thymeleaf and backend with Spring Boot",
            "Integration of maintenance scheduling functionalities",
            "MySQL database management"
          ],
          tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Git"]
        },
        {
          title: "Web Developer Intern",
          company: "Safflait (Bel Group)",
          period: "August 2023 – September 2023 | Casablanca, Morocco",
          description: "Development of an e-commerce website dedicated to the agri-food sector.",
          responsibilities: [
            "System modeling with UML",
            "Frontend development with HTML/CSS/JavaScript and backend with PHP",
            "MySQL database management for order tracking",
            "Integration of payment and stock management functionalities"
          ],
          tech: ["PHP", "JavaScript", "HTML/CSS", "MySQL"]
        }
      ]
    },
    skills: {
      title: "My Skills",
      categories: [
        {
          title: "Programming Languages",
          items: ["Java", "Python", "C/C++", "C#", "JavaScript", "PHP"]
        },
        {
          title: "Technologies & Frameworks",
          items: ["Spring Boot", "React JS", "Angular", "Thymeleaf", "Django", "REST API"]
        },
        {
          title: "Databases",
          items: ["MySQL", "PostgreSQL", "SQL Server", "Oracle"]
        },
        {
          title: "Tools & Methodologies",
          items: ["Git / GitHub", "Agile / Scrum", "UML", "CI/CD", "Jira", "IntelliJ / VS Code"]
        },
        {
          title: "Soft Skills",
          items: ["Team spirit", "Rigor and autonomy", "Technical curiosity", "Priority management", "Complex problem solving", "Effective communication"]
        }
      ],
      languages: {
        title: "Languages",
        items: [
          { name: "Arabic (Native)", level: 100 },
          { name: "French (Bilingual)", level: 95 },
          { name: "English (Operational)", level: 75 },
          { name: "German (Intermediate B1 level)", level: 60 }
        ]
      }
    },
    projects: {
      title: "My Projects",
      projects: [
        {
          title: "Smart Recruiter",
          description: "Intelligent recruitment platform using AI (LLM Ollama) to automatically match candidate skills with job offers.",
          tech: ["React JS", "Spring Boot", "MySQL", "Ollama LLM", "NLP", "REST API"],
          viewProject: "View my projects",
        },
        {
          title: "BookHub",
          description: "Complete E-Book management and distribution platform with recommendation system and copyright management.",
          tech: ["React JS", "Spring Boot", "MySQL", "JWT", "Microservices"],
          viewProject: "View my projects",
        },
        {
          title: "Car Rental System",
          description: "Complete online car rental web application with booking, vehicle management, authentication and payment.",
          tech: ["Spring Boot", "Thymeleaf", "MySQL", "Spring Security", "Bootstrap"],
          viewProject: "View my projects",
        },
        {
          title: "QuizzApp",
          description: "Interactive mobile quiz application for driver's license preparation with progress tracking and detailed statistics.",
          tech: ["Android (Java)", "Firebase", "SQLite", "Material Design"],
          viewProject: "View my projects",
        },
        {
          title: "FiTTrack Web App",
          description: "Web application for calorie calculation and nutritional tracking with personalized recommendations and health goals tracking.",
          tech: ["Django", "React JS", "MySQL", "Chart.js", "JWT Auth", "REST API"],
          viewProject: "View my projects",
        }
      ]
    },
    certifications: {
      title: "My Certifications",
      viewCert: "View certification",
      viewOnCoursera: "View on Coursera",
      close: "Close",
      certifications: [
        {
          title: "Introduction to Java and Object-Oriented Programming",
          issuer: "Coursera",
          image: javaCert,
          link: "https://coursera.org/verify/E2G6LQ6RPKF9"
        },
        {
          title: "Python for Everybody",
          issuer: "Coursera",
          image: pythonCert,
          link: "https://coursera.org/verify/specialization/YK2QFQMJJWM7"
        },
        {
          title: "React Basics",
          issuer: "Coursera",
          image: reactCert,
          link: "https://coursera.org/verify/WDJRQJ5NBEKQ"
        },
        {
          title: "Software Engineering: Modeling Software Systems using UML",
          issuer: "Coursera",
          image: umlCert,
          link: "https://coursera.org/verify/HR2PPS34TLCD"
        },
        {
          title: "Agile with Atlassian Jira",
          issuer: "Coursera",
          image: agileCert,
          link: "https://coursera.org/verify/GJH6FXZ4ETZH"
        },
        {
          title: "French Intermediate course B1-B2",
          issuer: "Coursera",
          image: frenchCert,
          link: "https://coursera.org/verify/C3ZB2U66SMKY"
        }
      ]
    },
    contact: {
      title: "Contact Me",
      info: "Contact Information",
      email: "hilalbiktaha@gmail.com",
      phone: "+212-691436399",
      location: "Casablanca, Morocco",
      form: {
        name: "Your name",
        email: "Your email",
        message: "Your message",
        send: "Send"
      },
      social: {
        linkedin: "LinkedIn",
        github: "GitHub"
      }
    },
    footer: {
      copyright: "Taha Hilal Bik. All rights reserved.",
      subtitle: "State Engineer in Computer Science and Networks - MIAGE"
    }
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über Mich",
      experience: "Berufserfahrung",
      skills: "Fähigkeiten",
      projects: "Projekte",
      certifications: "Zertifizierungen",
      contact: "Kontakt"
    },
    hero: {
      title: "Taha Hilal Bik",
      subtitle: "Staatlich geprüfter Ingenieur für Informatik und Netzwerke - MIAGE",
      description: "Full-Stack-Entwicklungsspezialist mit Java Spring Boot und React, leidenschaftlich für Softwarearchitektur und KI-Integration",
      contact: "Kontaktieren Sie mich",
      viewCV: "Lebenslauf ansehen",
      downloadCV: "Lebenslauf herunterladen"
    },
    about: {
      title: "Über Mich",
      description1: "Staatlich geprüfter Ingenieur für Informatik et Netzwerke, Option MIAGE (Methoden der Informatik in der Unternehmensführung).",
      description2: "Spezialisiert auf Full-Stack-Entwicklung mit Java Spring Boot und React, möchte ich zur Entwicklung innovativer Softwarelösungen in anspruchsvollen Sektoren wie Luftfahrt und Lebensmittelindustrie beitragen.",
      description3: "Leidenschaftlich für Webentwicklung, Mobile Entwicklung und Softwarearchitektur, beherrsche ich moderne Technologien zur Erstellung performanter und intuitiver Anwendungen.",
      education: "Ausbildung",
      educationItems: [
        {
          title: "Staatlich geprüfter Ingenieur für Informatik und Netzwerke",
          subtitle: "Option MIAGE (Methoden der Informatik in der Unternehmensführung)",
          date: "EMSI (2022-2025)"
        },
        {
          title: "Vorbereitungsjahre",
          subtitle: "",
          date: "EMSI (2020-2022)"
        },
        {
          title: "Abitur Physik-Chemie mit Französisch als Option",
          subtitle: "Mit Auszeichnung",
          date: "(2019-2020)"
        }
      ],
      imageCaptions: ["Full-Stack-Entwicklung", "Softwarearchitektur", "Künstliche Intelligenz"]
    },
    experience: {
      title: "Berufserfahrung",
      experiences: [
        {
          title: "Full-Stack-Entwickler Praktikum – Abschlussprojekt",
          company: "Web4Jobs",
          period: "März 2025 – August 2025 | Casablanca, Marokko",
          description: "Entwicklung einer Plattform zur Vermögensverwaltung für die Coding-Zentren des Unternehmens in Marokko und Afrika.",
          responsibilities: [
            "Anforderungsanalyse und UML-Systemmodellierung",
            "Front-End-Entwicklung mit ReactJS und Back-End mit Java Spring Boot",
            "Integration eines KI-Moduls (Ollama LLM) für vorausschauende Wartung",
            "Implementierung von REST-APIs und MySQL-Datenbankverwaltung"
          ],
          tech: ["Java", "Spring Boot", "React JS", "MySQL", "Ollama LLM", "REST API", "Git"]
        },
        {
          title: "Web-Entwickler Praktikum",
          company: "Royal Air Maroc (RAM)",
          period: "Juli 2024 – August 2024 | Casablanca, Marokko",
          description: "Entwicklung einer zentralisierten Anwendung zur Verwaltung von Teilen und Wartungen für den Luftfahrtsektor.",
          responsibilities: [
            "Systementwurf und UML-Modellierung",
            "Frontend-Entwicklung mit Thymeleaf und Backend mit Spring Boot",
            "Integration von Wartungsplanungsfunktionen",
            "MySQL-Datenbankverwaltung"
          ],
          tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Git"]
        },
        {
          title: "Web-Entwickler Praktikum",
          company: "Safflait (Bel Group)",
          period: "August 2023 – September 2023 | Casablanca, Marokko",
          description: "Entwicklung einer E-Commerce-Website für den Lebensmittelsektor.",
          responsibilities: [
            "Systemmodellierung mit UML",
            "Frontend-Entwicklung mit HTML/CSS/JavaScript et Backend mit PHP",
            "MySQL-Datenbankverwaltung für Auftragsverfolgung",
            "Integration von Zahlungs- und Bestandsverwaltungsfunktionen"
          ],
          tech: ["PHP", "JavaScript", "HTML/CSS", "MySQL"]
        }
      ]
    },
    skills: {
      title: "Meine Fähigkeiten",
      categories: [
        {
          title: "Programmiersprachen",
          items: ["Java", "Python", "C/C++", "C#", "JavaScript", "PHP"]
        },
        {
          title: "Technologien & Frameworks",
          items: ["Spring Boot", "React JS", "Angular", "Thymeleaf", "Django", "REST API"]
        },
        {
          title: "Datenbanken",
          items: ["MySQL", "PostgreSQL", "SQL Server", "Oracle"]
        },
        {
          title: "Tools & Methodologien",
          items: ["Git / GitHub", "Agile / Scrum", "UML", "CI/CD", "Jira", "IntelliJ / VS Code"]
        },
        {
          title: "Soft Skills",
          items: ["Teamgeist", "Gründlichkeit und Selbständigkeit", "Technische Neugier", "Prioritätenmanagement", "Lösung komplexer Probleme", "Effektive Kommunikation"]
        }
      ],
      languages: {
        title: "Sprachen",
        items: [
          { name: "Arabisch (Muttersprache)", level: 100 },
          { name: "Französisch (Zweisprachig)", level: 95 },
          { name: "Englisch (Operativ)", level: 75 },
          { name: "Deutsch (Mittelstufe B1)", level: 60 }
        ]
      }
    },
    projects: {
      title: "Meine Projekte",
      projects: [
        {
          title: "Smart Recruiter",
          description: "Intelligente Rekrutierungsplattform mit KI (LLM Ollama) zur automatischen Zuordnung von Kandidatenfähigkeiten zu Stellenangeboten.",
          tech: ["React JS", "Spring Boot", "MySQL", "Ollama LLM", "NLP", "REST API"],
          viewProject: "Meine Projekte ansehen",
        },
        {
          title: "BookHub",
          description: "Komplette E-Book-Management- und Vertriebsplattform mit Empfehlungssystem et Urheberrechtsverwaltung.",
          tech: ["React JS", "Spring Boot", "MySQL", "JWT", "Microservices"],
          viewProject: "Meine Projekte ansehen",
        },
        {
          title: "Car Rental System",
          description: "Komplette Online-Autovermietungs-Webanwendung mit Buchung, Fahrzeugverwaltung, Authentifizierung und Zahlung.",
          tech: ["Spring Boot", "Thymeleaf", "MySQL", "Spring Security", "Bootstrap"],
          viewProject: "Meine Projekte ansehen",
        },
        {
          title: "QuizzApp",
          description: "Interaktive Mobile-Quiz-App für die Führerscheinvorbereitung mit Fortschrittsverfolgung und detaillierten Statistiken.",
          tech: ["Android (Java)", "Firebase", "SQLite", "Material Design"],
          viewProject: "Meine Projekte ansehen",
        },
        {
          title: "FiTTrack Web App",
          description: "Web-App zur Kalorienberechnung und Ernährungstracking mit personalisierten Empfehlungen und Gesundheitszielverfolgung.",
          tech: ["Django", "React JS", "MySQL", "Chart.js", "JWT Auth", "REST API"],
          viewProject: "Meine Projekte ansehen",
        }
      ]
    },
    certifications: {
      title: "Meine Zertifizierungen",
      viewCert: "Zertifizierung ansehen",
      viewOnCoursera: "Auf Coursera ansehen",
      close: "Schließen",
      certifications: [
        {
          title: "Introduction to Java and Object-Oriented Programming",
          issuer: "Coursera",
          image: javaCert,
          link: "https://coursera.org/verify/E2G6LQ6RPKF9"
        },
        {
          title: "Python for Everybody",
          issuer: "Coursera",
          image: pythonCert,
          link: "https://coursera.org/verify/specialization/YK2QFQMJJWM7"
        },
        {
          title: "React Basics",
          issuer: "Coursera",
          image: reactCert,
          link: "https://coursera.org/verify/WDJRQJ5NBEKQ"
        },
        {
          title: "Software Engineering: Modeling Software Systems using UML",
          issuer: "Coursera",
          image: umlCert,
          link: "https://coursera.org/verify/HR2PPS34TLCD"
        },
        {
          title: "Agile with Atlassian Jira",
          issuer: "Coursera",
          image: agileCert,
          link: "https://coursera.org/verify/GJH6FXZ4ETZH"
        },
        {
          title: "French Intermediate course B1-B2",
          issuer: "Coursera",
          image: frenchCert,
          link: "https://coursera.org/verify/C3ZB2U66SMKY"
        }
      ]
    },
    contact: {
      title: "Kontaktieren Sie mich",
      info: "Kontaktinformationen",
      email: "hilalbiktaha@gmail.com",
      phone: "+212-691436399",
      location: "Casablanca, Marokko",
      form: {
        name: "Ihr Name",
        email: "Ihre E-Mail",
        message: "Ihre Nachricht",
        send: "Senden"
      },
      social: {
        linkedin: "LinkedIn",
        github: "GitHub"
      }
    },
    footer: {
      copyright: "Taha Hilal Bik. Alle Rechte vorbehalten.",
      subtitle: "Staatlich geprüfter Ingenieur für Informatik und Netzwerke - MIAGE"
    }
  }
};

// Chemins des CV selon la langue
const cvPaths = {
  fr: process.env.PUBLIC_URL + '/CV_Taha_Hilal_Bik.pdf',
  en: process.env.PUBLIC_URL + '/Taha_HILAL_BIK_CV_English.pdf',
  de: process.env.PUBLIC_URL + '/Taha_HILAL_BIK_CV_Deutsh.pdf'
};

// Noms des fichiers CV pour le téléchargement
const cvFileNames = {
  fr: 'CV_Taha_Hilal_Bik.pdf',
  en: 'Taha_HILAL_BIK_CV_English.pdf',
  de: 'Taha_HILAL_BIK_CV_Deutsch.pdf'
};

// URL GitHub pour tous les projets
const GITHUB_REPOS_URL = "https://github.com/tahahb02?tab=repositories";

// Composant Modal amélioré pour afficher les certifications
const CertificationModal = ({ certification, onClose, language }) => {
  const t = translations[language];
  const [isClosing, setIsClosing] = useState(false);
  
  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        handleClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClose]);
  
  if (!certification) return null;

  // Fonction pour ouvrir le lien Coursera
  const openCourseraLink = () => {
    window.open(certification.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`modal-overlay ${isClosing ? 'closing' : ''}`}>
      <div className={`modal-content ${isClosing ? 'closing' : ''}`}>
        <button className="modal-close" onClick={handleClose} aria-label="Fermer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="modal-header">
          <h3>{certification.title}</h3>
          <p className="modal-issuer">{certification.issuer}</p>
        </div>
        
        <div className="modal-body">
          <div className="certification-image-container">
            <img 
              src={certification.image} 
              alt={certification.title} 
              className="certification-full-image"
            />
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn btn-coursera" onClick={openCourseraLink}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            {t.certifications.viewOnCoursera}
          </button>
          <button className="btn btn-close" onClick={handleClose}>
            {t.certifications.close}
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('fr');
  const [selectedCert, setSelectedCert] = useState(null);

  const t = translations[language];

  // Ignorer les erreurs MetaMask
  useEffect(() => {
    const handleErrors = (e) => {
      if (e.message?.includes('MetaMask') || e.filename?.includes('chrome-extension')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const handleRejections = (e) => {
      if (e.reason?.message?.includes('MetaMask')) {
        e.preventDefault();
        return false;
      }
    };

    window.addEventListener('error', handleErrors, true);
    window.addEventListener('unhandledrejection', handleRejections);

    return () => {
      window.removeEventListener('error', handleErrors, true);
      window.removeEventListener('unhandledrejection', handleRejections);
    };
  }, []);

  useEffect(() => {
    document.title = "Taha Hilal Bik - Portfolio";
    
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-cubic',
      once: false,
      mirror: true,
      offset: 120
    });

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    // Détecter la langue du navigateur
    const browserLang = navigator.language.split('-')[0];
    if (['fr', 'en', 'de'].includes(browserLang)) {
      setLanguage(browserLang);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setMenuOpen(false);
  };

  // Fonction pour visualiser le CV dans un nouvel onglet selon la langue
  const viewCV = () => {
    try {
      const cvPath = cvPaths[language];
      window.open(cvPath, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening CV:', error);
      alert(
        language === 'fr' ? 'Le CV n\'est pas disponible pour le moment. Veuillez me contacter directement.' :
        language === 'en' ? 'The CV is not available at the moment. Please contact me directly.' :
        'Der Lebenslauf ist derzeit nicht verfügbar. Bitte kontaktieren Sie mich direkt.'
      );
    }
  };

  // Fonction pour télécharger le CV selon la langue
  const downloadCV = () => {
    try {
      const cvPath = cvPaths[language];
      const fileName = cvFileNames[language];
      const link = document.createElement('a');
      link.href = cvPath;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download error:', error);
      alert(
        language === 'fr' ? 'Le CV n\'est pas disponible pour le moment. Veuillez me contacter directement.' :
        language === 'en' ? 'The CV is not available at the moment. Please contact me directly.' :
        'Der Lebenslauf ist derzeit nicht verfügbar. Bitte kontaktieren Sie mich direkt.'
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      language === 'fr' ? 'Message envoyé avec succès!' :
      language === 'en' ? 'Message sent successfully!' :
      'Nachricht erfolgreich gesendet!'
    );
  };

  // Fonction pour ouvrir le dashboard GitHub
  const openGitHubProjects = () => {
    window.open(GITHUB_REPOS_URL, '_blank', 'noopener,noreferrer');
  };

  // Fonction pour ouvrir une certification en grand format
  const openCertification = (certification) => {
    setSelectedCert(certification);
    document.body.style.overflow = 'hidden';
  };

  // Fonction pour fermer la modal
  const closeCertification = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  // Fonction pour ouvrir directement le lien Coursera
  const openCourseraLink = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`portfolio ${darkMode ? 'dark' : ''}`}>
      <SpeedInsights />
      
      {/* Modal pour afficher les certifications en grand format */}
      {selectedCert && (
        <CertificationModal 
          certification={selectedCert} 
          onClose={closeCertification}
          language={language}
        />
      )}
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a href="#home" className="logo">Taha Hilal Bik</a>
          
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>{t.nav.about}</a></li>
              <li><a href="#experience" onClick={() => setMenuOpen(false)}>{t.nav.experience}</a></li>
              <li><a href="#skills" onClick={() => setMenuOpen(false)}>{t.nav.skills}</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>{t.nav.projects}</a></li>
              <li><a href="#certifications" onClick={() => setMenuOpen(false)}>{t.nav.certifications}</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a></li>
            </ul>
          </div>
          
          <div className="nav-actions">
            {/* Language Selector */}
            <div className="language-selector">
              <button 
                className={`language-btn ${language === 'fr' ? 'active' : ''}`}
                onClick={() => changeLanguage('fr')}
                title="Français"
              >
                <img src={flagUrls.fr} alt="Français" className="language-flag" />
              </button>
              <button 
                className={`language-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
                title="English"
              >
                <img src={flagUrls.en} alt="English" className="language-flag" />
              </button>
              <button 
                className={`language-btn ${language === 'de' ? 'active' : ''}`}
                onClick={() => changeLanguage('de')}
                title="Deutsch"
              >
                <img src={flagUrls.de} alt="Deutsch" className="language-flag" />
              </button>
            </div>
            
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
            
            <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-right" data-aos-delay="100">
            <h1>{t.hero.title}</h1>
            <h2>{t.hero.subtitle}</h2>
            <p>{t.hero.description}</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn">{t.hero.contact}</a>
              <button onClick={viewCV} className="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                {t.hero.viewCV}
              </button>
              <button onClick={downloadCV} className="btn btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                {t.hero.downloadCV}
              </button>
            </div>
          </div>
          <div className="hero-image" data-aos="fade-left" data-aos-delay="200">
            <div className="profile-image-container">
              <img 
                src={profileImage} 
                alt={`${t.hero.title} - ${t.hero.subtitle}`} 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">{t.about.title}</h2>
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
              <p>{t.about.description3}</p>
              
              <div className="about-images">
                {t.about.imageCaptions.map((caption, index) => (
                  <div className="image-card" data-aos="zoom-in" data-aos-delay={index * 200} key={index}>
                    <img src={[webDevImage, mobileDevImage, aiImage][index]} alt={caption} />
                    <div className="image-caption">{caption}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="education" data-aos="fade-left">
              <h3>{t.about.education}</h3>
              <ul>
                {t.about.educationItems.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}</strong>
                    {item.subtitle && <span>{item.subtitle}</span>}
                    <span>{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section dark-bg">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">{t.experience.title}</h2>
          
          {t.experience.experiences.map((exp, index) => (
            <div className="experience-item" data-aos="fade-up" data-aos-delay={index * 100} key={index}>
              <h3>{exp.title}</h3>
              <h4>{exp.company} | {exp.period}</h4>
              <p>{exp.description}</p>
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              <div className="tech-stack">
                {exp.tech.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">{t.skills.title}</h2>
          <div className="skills-container">
            <div className="skills-grid">
              {t.skills.categories.map((category, index) => (
                <div className="skill-category" data-aos="fade-up" data-aos-delay={index * 100} key={index}>
                  <h3>{category.title}</h3>
                  <ul>
                    {category.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="languages-section" data-aos="fade-up" data-aos-delay="500">
              <h3>{t.skills.languages.title}</h3>
              {t.skills.languages.items.map((lang, index) => (
                <div className="language-item" key={index}>
                  <span className="language-name">{lang.name}</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: `${lang.level}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section dark-bg">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">{t.projects.title}</h2>
          <div className="projects-grid">
            {t.projects.projects.map((project, index) => (
              <div className="project-card" data-aos="fade-up" data-aos-delay={index * 100} key={index}>
                <div className="project-image">
                  <img src={[aiImage, webDevImage, webDevImage, mobileDevImage, aiImage][index]} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
                <button 
                  className="project-link"
                  onClick={openGitHubProjects}
                  style={{
                    background: 'none',
                    border: '2px solid white',
                    color: 'white',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'white';
                    e.target.style.color = 'black';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'none';
                    e.target.style.color = 'white';
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{project.viewProject}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">{t.certifications.title}</h2>
          <div className="certifications-grid">
            {t.certifications.certifications.map((cert, index) => (
              <div className="certification-card" data-aos="fade-up" data-aos-delay={index * 100} key={index}>
                <div className="certification-image">
                  <img src={cert.image} alt={cert.title} />
                  <div className="certification-overlay">
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
                <div className="certification-buttons">
                  <button 
                    className="certification-view-btn"
                    onClick={() => openCertification(cert)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    {t.certifications.viewCert}
                  </button>
                  <button 
                    className="certification-coursera-btn"
                    onClick={() => openCourseraLink(cert.link)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    {t.certifications.viewOnCoursera}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">{t.contact.title}</h2>
          <div className="contact-content">
            <div className="contact-info" data-aos="fade-right">
              <h3>{t.contact.info}</h3>
              <ul>
                <li>
                  <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  {t.contact.email}
                </li>
                <li>
                  <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  {t.contact.phone}
                </li>
                <li>
                  <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {t.contact.location}
                </li>
              </ul>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/taha-hilalbik-8555b2246/" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  {t.contact.social.linkedin}
                </a>
                <a href="https://github.com/tahahb02" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  {t.contact.social.github}
                </a>
              </div>
            </div>
            <form className="contact-form" data-aos="fade-left" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder={t.contact.form.name} required />
              </div>
              <div className="form-group">
                <input type="email" placeholder={t.contact.form.email} required />
              </div>
              <div className="form-group">
                <textarea placeholder={t.contact.form.message} required></textarea>
              </div>
              <button type="submit" className="btn">{t.contact.form.send}</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
          <p>{t.footer.subtitle}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;