/*
 * ============================================================
 *  TOUT CE QUE TU DOIS MODIFIER EST DANS CE FICHIER.
 *  Remplace les valeurs entre guillemets par tes vraies infos.
 *  Chaque texte existe en "fr" et en "en".
 * ============================================================
 */
const PROFILE = {
  firstName: "Antonin",
  lastName: "Jaffré",

  // Photo : dépose ta photo dans le dossier assets/ sous le nom photo.jpg
  // (carrée de préférence). Si elle manque, tes initiales s'affichent.
  photo: "assets/photo.jpg",

  email: "antoninjaffre@gmail.com",
  phone: "", // ex : "+33 6 12 34 56 78" (laisser vide pour ne pas l'afficher)
  location: { fr: "France", en: "France" },

  linkedin: "https://www.linkedin.com/in/TON-PROFIL/",
  github: "https://github.com/antojfr",

  // CV en PDF : dépose tes fichiers dans le dossier cv/
  // S'ils n'existent pas, le bouton propose d'imprimer / enregistrer la page en PDF.
  cvPdf: { fr: "cv/cv-fr.pdf", en: "cv/cv-en.pdf" },

  // Nom de l'événement : affiché dans le message d'accueil et l'objet du mail.
  event: { fr: "le forum entreprises", en: "the career fair" },

  title: {
    fr: "Étudiant ingénieur · Développement & Data",
    en: "Engineering student · Software & Data",
  },

  // Ce que tu recherches (stage, alternance, CDI…) — très important au forum !
  lookingFor: {
    fr: "Je recherche un stage de 6 mois à partir de février 2027",
    en: "Looking for a 6-month internship starting February 2027",
  },

  about: {
    fr: "Curieux, rigoureux et passionné par la tech. J'aime transformer des idées en projets concrets et apprendre au contact d'équipes exigeantes.",
    en: "Curious, rigorous and passionate about tech. I love turning ideas into real projects and learning alongside demanding teams.",
  },

  // Petit détail mémorable : c'est souvent ça dont les recruteurs se souviennent.
  funFact: {
    fr: "Ce site s'est ouvert parce que vous avez scanné une puce NFC que j'ai programmée moi-même.",
    en: "This page opened because you scanned an NFC chip I programmed myself.",
  },

  experience: [
    {
      role: { fr: "Stagiaire développeur", en: "Software developer intern" },
      company: "Entreprise X",
      dates: { fr: "Juin – Août 2026", en: "June – August 2026" },
      details: {
        fr: ["Décris une réalisation concrète avec un chiffre si possible.", "Une deuxième réalisation."],
        en: ["Describe a concrete achievement, with a number if possible.", "A second achievement."],
      },
    },
    {
      role: { fr: "Job étudiant", en: "Student job" },
      company: "Entreprise Y",
      dates: { fr: "2025", en: "2025" },
      details: {
        fr: ["Ce que tu y as appris."],
        en: ["What you learned there."],
      },
    },
  ],

  education: [
    {
      degree: { fr: "Diplôme d'ingénieur", en: "Master of Engineering" },
      school: "Ton école",
      dates: { fr: "2023 – 2028", en: "2023 – 2028" },
      details: { fr: "Spécialité, options, mention…", en: "Major, electives, honours…" },
    },
    {
      degree: { fr: "Baccalauréat", en: "High school diploma" },
      school: "Ton lycée",
      dates: { fr: "2023", en: "2023" },
      details: { fr: "", en: "" },
    },
  ],

  projects: [
    {
      name: { fr: "Ce CV NFC", en: "This NFC résumé" },
      description: {
        fr: "Site web bilingue relié à une puce NFC pour partager mon CV d'un simple geste.",
        en: "Bilingual website linked to an NFC chip to share my résumé with a single tap.",
      },
      link: "https://github.com/antojfr/cv-en-ligne-",
      tags: ["HTML", "CSS", "JavaScript", "NFC"],
    },
    {
      name: { fr: "Projet 2", en: "Project 2" },
      description: { fr: "Description courte du projet.", en: "Short project description." },
      link: "",
      tags: ["Python"],
    },
  ],

  skills: [
    { group: { fr: "Langages", en: "Languages" }, items: ["Python", "JavaScript", "Java", "SQL"] },
    { group: { fr: "Outils", en: "Tools" }, items: ["Git", "Docker", "Linux", "Figma"] },
    { group: { fr: "Savoir-être", en: "Soft skills" }, items: { fr: ["Travail en équipe", "Autonomie", "Curiosité"], en: ["Teamwork", "Autonomy", "Curiosity"] } },
  ],

  languages: [
    { name: { fr: "Français", en: "French" }, level: { fr: "Langue maternelle", en: "Native" } },
    { name: { fr: "Anglais", en: "English" }, level: { fr: "Courant (C1)", en: "Fluent (C1)" } },
  ],

  interests: {
    fr: ["Sport", "Voyages", "Électronique"],
    en: ["Sports", "Travel", "Electronics"],
  },
};
