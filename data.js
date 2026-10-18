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
  phone: "+33 6 29 22 47 31", // ajouté uniquement à la fiche contact (laisser vide pour le retirer)
  location: { fr: "Saint-Étienne · Alès", en: "Saint-Étienne · Alès, France" },

  linkedin: "https://www.linkedin.com/in/antonin-jaffr%C3%A9",
  github: "https://github.com/antojfr",

  // CV en PDF : dépose tes fichiers dans le dossier cv/
  // S'ils n'existent pas, le bouton propose d'imprimer / enregistrer la page en PDF.
  cvPdf: { fr: "cv/cv-fr.pdf", en: "cv/cv-en.pdf" },

  // Nom de l'événement : affiché dans l'objet du mail.
  event: { fr: "le forum entreprises", en: "the career fair" },

  title: {
    fr: "Élève ingénieur Mines · Data Science & Finance quantitative",
    en: "Mines engineering student · Data Science & Quantitative Finance",
  },

  // Ce que tu recherches — très important au forum !
  lookingFor: {
    fr: "Stage de 6 mois en marchés financiers et modélisation quantitative, dès mars 2027",
    en: "6-month internship in financial markets & quantitative modelling, from March 2027",
  },

  // Chiffres clés affichés en haut de page
  highlights: [
    { value: "−12,1 %", label: { fr: "d'erreur de prédiction chez Thales", en: "prediction error at Thales" } },
    { value: "13", label: { fr: "personnes dirigées en Junior-Entreprise", en: "people led as Junior Enterprise president" } },
    { value: "885", label: { fr: "au TOEIC", en: "TOEIC score" } },
  ],

  about: {
    fr: "Double diplôme Mines Alès / Mines Saint-Étienne en IA, data science et mathématiques appliquées. J'aime transformer des données brutes en modèles qui servent vraiment des décisions — de la prédiction de prix industriels chez Thales à mon propre modèle de scoring d'actions du S&P 500.",
    en: "Double degree at Mines Alès / Mines Saint-Étienne in AI, data science and applied mathematics. I love turning raw data into models that actually drive decisions — from forecasting industrial purchase prices at Thales to my own S&P 500 stock-scoring model.",
  },

  // Petit détail mémorable : c'est souvent ça dont les recruteurs se souviennent.
  funFact: {
    fr: "Joueur de poker : estimer des probabilités et décider sous incertitude, c'est déjà un peu mon futur métier. (Et cette page s'est ouverte grâce à une puce NFC que j'ai programmée moi-même.)",
    en: "Poker player: estimating probabilities and deciding under uncertainty is already a bit of my future job. (And this page opened thanks to an NFC chip I programmed myself.)",
  },

  experience: [
    {
      role: { fr: "Stage — Projection et prédiction des prix d'achat", en: "Internship — Purchase price projection & forecasting" },
      company: "Thales · Brive-la-Gaillarde",
      dates: { fr: "Mai – Août 2026", en: "May – Aug. 2026" },
      details: {
        fr: [
          "Application Python automatisant la campagne annuelle de projection des prix N+1 : traduction en code des règles financières du contrôle de gestion, injection dans le classeur des acheteurs avec contrôle de concordance.",
          "Modélisation des variations de prix sur ~200 000 lignes d'historique SAP (28 000 références, 2017–2026) : LightGBM, Optuna, validation temporelle. Erreur absolue moyenne réduite de 12,1 % face à la méthode existante.",
        ],
        en: [
          "Python application automating the yearly N+1 price projection campaign: financial controlling rules translated into code, results injected into the buyers' workbook with reconciliation checks.",
          "Modelled order price changes on ~200,000 cleaned SAP history rows (28,000 parts, 2017–2026): LightGBM, Optuna, time-based validation. Mean absolute error cut by 12.1% vs. the existing method.",
        ],
      },
    },
    {
      role: { fr: "Président", en: "President" },
      company: "Mines Alès Junior Étude",
      dates: { fr: "Mai 2025 – aujourd'hui", en: "May 2025 – present" },
      details: {
        fr: ["Direction d'une équipe de 13 personnes ; obtention du label officiel CNJE ; pilotage des projets et partenariats."],
        en: ["Leading a team of 13; obtained the official CNJE label; managing projects and partnerships."],
      },
    },
    {
      role: { fr: "Stage — Analyste performance économique (Data & BI)", en: "Internship — Economic performance analyst (Data & BI)" },
      company: "Phytocontrol Laboratory · Nîmes",
      dates: { fr: "Nov. – Déc. 2025", en: "Nov. – Dec. 2025" },
      details: {
        fr: ["Analyse de pricing et de rentabilité sur comptes clés (Suez, Nestlé) ; données structurées sous Power Query, tableaux de bord Power BI pour le pilotage des marges."],
        en: ["Pricing and profitability analysis on key accounts (Suez, Nestlé); data structured with Power Query, Power BI dashboards for margin management."],
      },
    },
    {
      role: { fr: "Stages — Maintenance prédictive, analyse industrielle, recherche", en: "Internships — Predictive maintenance, industrial analysis, research" },
      company: "Orange · Michelin · University of Wollongong",
      dates: { fr: "2023 – 2025", en: "2023 – 2025" },
      details: {
        fr: ["France et Australie, dont recherche au sein d'une équipe internationale."],
        en: ["France and Australia, including research within an international team."],
      },
    },
  ],

  education: [
    {
      degree: { fr: "Master Mathématiques appliquées, statistique (MAEA)", en: "MSc Applied Mathematics & Statistics (MAEA)" },
      school: "École des Mines de Saint-Étienne",
      dates: { fr: "2026 – 2027", en: "2026 – 2027" },
      details: {
        fr: "Mathématiques & Machine Learning : processus stochastiques, Monte-Carlo, optimisation, apprentissage statistique, calcul intensif.",
        en: "Mathematics & Machine Learning: stochastic processes, Monte Carlo, optimisation, statistical learning, high-performance computing.",
      },
    },
    {
      degree: { fr: "Ingénieur généraliste · IA & Data Science", en: "Master of Engineering · AI & Data Science" },
      school: "École des Mines d'Alès",
      dates: { fr: "2024 – 2027", en: "2024 – 2027" },
      details: {
        fr: "Double diplôme avec Mines Saint-Étienne. Machine learning, modélisation statistique, développement logiciel.",
        en: "Double degree with Mines Saint-Étienne. Machine learning, statistical modelling, software development.",
      },
    },
    {
      degree: { fr: "Classe préparatoire ATS", en: "Preparatory class for Grandes Écoles (ATS)" },
      school: "Lycée Lafayette · Clermont-Ferrand",
      dates: { fr: "2023 – 2024", en: "2023 – 2024" },
      details: { fr: "", en: "" },
    },
    {
      degree: { fr: "DUT Mesures Physiques", en: "Two-year degree in Physical Measurements (DUT)" },
      school: "Université Clermont Auvergne",
      dates: { fr: "2021 – 2023", en: "2021 – 2023" },
      details: { fr: "", en: "" },
    },
  ],

  projects: [
    {
      name: { fr: "Modèle de scoring d'actions S&P 500", en: "S&P 500 stock-scoring model" },
      description: {
        fr: "Signal multi-facteurs : 24 indicateurs codés à la main (momentum, volatilité, beta, MACD, RSI, drawdown…), ~66 000 observations, collecte automatisée et validation walk-forward.",
        en: "Multi-factor signal: 24 hand-coded indicators (momentum, volatility, beta, MACD, RSI, drawdown…), ~66,000 observations, automated data collection and walk-forward validation.",
      },
      link: "",
      tags: ["Python", "yfinance", "FRED API", "Walk-forward"],
    },
    {
      name: { fr: "Machine Learning from scratch & Deep Learning", en: "Machine Learning from scratch & Deep Learning" },
      description: {
        fr: "Scoring crédit avec un arbre de décision codé sans librairie ; réseau de neurones pour optimiser le prix d'achat d'électricité de communes d'Occitanie.",
        en: "Credit scoring with a decision tree coded without any library; neural network optimising electricity purchase prices for towns in Occitanie.",
      },
      link: "",
      tags: ["Python", "TensorFlow", "Keras"],
    },
    {
      name: { fr: "Ce CV NFC", en: "This NFC résumé" },
      description: {
        fr: "Site bilingue relié à une puce NFC pour partager mon CV d'un simple geste.",
        en: "Bilingual website linked to an NFC chip to share my résumé with a single tap.",
      },
      link: "https://github.com/antojfr/cv-en-ligne-",
      tags: ["HTML", "CSS", "JavaScript", "NFC"],
    },
  ],

  skills: [
    { group: { fr: "Data & ML", en: "Data & ML" }, items: ["Python", "Pandas", "NumPy", "Scikit-learn", "LightGBM", "Optuna", "TensorFlow"] },
    { group: { fr: "Langages", en: "Languages" }, items: ["C", "Java", "SQL", "R", "VBA"] },
    { group: { fr: "Outils", en: "Tools" }, items: ["Git", "LaTeX", "Power BI", "Excel / Power Query"] },
    {
      group: { fr: "Certifications", en: "Certifications" },
      items: {
        fr: ["IBM Machine Learning (certificat pro)", "Yale — Financial Markets (R. Shiller)", "Stanford — Machine Learning Specialization (A. Ng)"],
        en: ["IBM Machine Learning (professional certificate)", "Yale — Financial Markets (R. Shiller)", "Stanford — Machine Learning Specialization (A. Ng)"],
      },
    },
  ],

  languages: [
    { name: { fr: "Français", en: "French" }, level: { fr: "Langue maternelle", en: "Native" } },
    { name: { fr: "Anglais", en: "English" }, level: { fr: "TOEIC 885", en: "TOEIC 885" } },
    { name: { fr: "Espagnol", en: "Spanish" }, level: { fr: "A2", en: "A2" } },
  ],

  interests: {
    fr: ["Investissement quantitatif", "Poker", "Natation"],
    en: ["Quantitative investing", "Poker", "Swimming"],
  },
};
