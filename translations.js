// Website Translations - English and French
const translations = {
  en: {
    // Navigation & Common
    home: "Home",
    universityAchievements: "University Achievements",
    workVolunteer: "Work & Volunteer",
    projects: "Projects",
    highSchool: "High School",
    contact: "Contact",
    languageToggle: "Français",
    
    // Index Page
    indexWelcome: "Welcome to My Personal Website",
    indexByline: "By: Jayden Sparvier",
    indexGreeting: "Hello! Welcome to my personal website. I'm Jayden Sparvier, and this site showcases my academic achievements, professional experience, volunteer work, and high school accomplishments.",
    indexAboutMe: "About Me",
    indexAboutMeText: "I am a dedicated and ambitious individual committed to continuous learning and personal growth. My journey through high school, university, and professional experiences has shaped me into a well-rounded professional with diverse skills and perspectives.",
    indexWhatYouFind: "What You'll Find Here",
    indexUniversityDesc: "University Achievements: Explore my academic journey and accomplishments in higher education",
    indexWorkDesc: "Work & Volunteer Experience: Discover my professional and voluntary contributions",
    indexProjectsDesc: "Projects: View my recent projects and initiatives",
    indexHighSchoolDesc: "High School Achievements: Learn about my foundation and early accomplishments",
    indexContactDesc: "Contact: Get in touch with me for opportunities and inquiries",
    indexFooterText: "Feel free to navigate through the different sections to learn more about my background, skills, and experiences. If you have any questions or would like to connect, please don't hesitate to reach out through the Contact page.",
  },
  fr: {
    // Navigation & Common
    home: "Accueil",
    universityAchievements: "Réalisations Universitaires",
    workVolunteer: "Travail & Bénévolat",
    projects: "Projets",
    highSchool: "École Secondaire",
    contact: "Contact",
    languageToggle: "English",
    
    // Index Page
    indexWelcome: "Bienvenue sur mon site personnel",
    indexByline: "Par: Jayden Sparvier",
    indexGreeting: "Bonjour! Bienvenue sur mon site personnel. Je suis Jayden Sparvier, et ce site présente mes réalisations académiques, mon expérience professionnelle, mon travail bénévole et mes réalisations au secondaire.",
    indexAboutMe: "À Propos de Moi",
    indexAboutMeText: "Je suis une personne dévouée et ambitieuse attachée à l'apprentissage continu et à la croissance personnelle. Mon parcours à travers l'école secondaire, l'université et les expériences professionnelles m'a façonné en un professionnel bien équilibré avec des compétences et des perspectives diverses.",
    indexWhatYouFind: "Ce que vous trouverez ici",
    indexUniversityDesc: "Réalisations Universitaires: Explorez mon parcours académique et mes réalisations en enseignement supérieur",
    indexWorkDesc: "Expérience Professionnelle & Bénévolat: Découvrez mes contributions professionnelles et bénévoles",
    indexProjectsDesc: "Projets: Consultez mes projets et initiatives récents",
    indexHighSchoolDesc: "Réalisations du Secondaire: En savoir plus sur ma fondation et mes réalisations précoces",
    indexContactDesc: "Contact: Contactez-moi pour les opportunités et les demandes",
    indexFooterText: "N'hésitez pas à naviguer dans les différentes sections pour en savoir plus sur mon parcours, mes compétences et mes expériences. Si vous avez des questions ou souhaitez vous connecter, n'hésitez pas à me contacter via la page de contact.",
  }
};

// Function to switch language
function switchLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang);
  
  // Update all elements with data-en and data-fr attributes
  document.querySelectorAll('[data-en][data-fr]').forEach(element => {
    element.textContent = translations[lang][element.dataset[lang]];
  });
  
  // Update language toggle button
  const toggleBtn = document.querySelector('.language-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = translations[lang].languageToggle;
    toggleBtn.onclick = () => switchLanguage(lang === 'en' ? 'fr' : 'en');
  }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  switchLanguage(savedLanguage);
});
