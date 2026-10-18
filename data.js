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
    { value: { fr: "−12,1 %", en: "−12.1%" }, label: { fr: "d'erreur de prédiction chez Thales", en: "prediction error at Thales" } },
    { value: "13", label: { fr: "personnes dirigées en Junior-Entreprise", en: "people led at Junior Enterprise" } },
    { value: { fr: "0,93", en: "0.93" }, label: { fr: "de Sharpe hors échantillon (S&P 500 : 0,85)", en: "out-of-sample Sharpe (S&P 500: 0.85)" } },
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
          "Pricing engine (main deliverable): automated the annual year-ahead price projection campaign by translating management-control rules into a Python engine, with results delivered to buyers and automated reconciliation checks.",
          "Machine learning price prediction: order-level price variation model built on ~200,000 cleansed SAP purchasing records (28,000 part numbers, 2017–2026) with LightGBM, Optuna and time-based cross-validation. 12.1% lower mean absolute error than the incumbent method.",
        ],
      },
    },
    {
      role: { fr: "Président", en: "President, student-run consulting firm" },
      company: "Mines Alès Junior Étude",
      dates: { fr: "Mai 2025 – aujourd'hui", en: "May 2025 – present" },
      details: {
        fr: ["Direction d'une équipe de 13 personnes ; obtention du label officiel CNJE ; pilotage des projets et partenariats."],
        en: ["Led a team of 13; secured official CNJE accreditation; managed the project lifecycle and client partnerships."],
      },
    },
    {
      role: { fr: "Stage — Analyste performance économique (Data & BI)", en: "Internship — Economic performance analyst (Data & BI)" },
      company: "Phytocontrol Laboratory · Nîmes",
      dates: { fr: "Nov. – Déc. 2025", en: "Nov. – Dec. 2025" },
      details: {
        fr: ["Analyse de pricing et de rentabilité sur comptes clés (Suez, Nestlé) ; données structurées sous Power Query, tableaux de bord Power BI pour le pilotage des marges."],
        en: ["Pricing and profitability analysis (selling prices, cost of goods sold) on key accounts (Suez, Nestlé); financial data structuring in Power Query and Power BI dashboards for margin monitoring."],
      },
    },
    {
      role: { fr: "Stage de recherche en équipe internationale", en: "Research internship within an international team" },
      company: "University of Wollongong · Australie / Australia",
      dates: { fr: "2023", en: "2023" },
      details: {
        fr: ["Nanoparticules pour filtres UV de crèmes solaires."],
        en: ["Nanoparticles for sunscreen UV filters."],
      },
    },
    {
      role: { fr: "Stages — Maintenance prédictive, analyse industrielle", en: "Internships — Predictive maintenance, industrial analysis" },
      company: "Orange · Michelin",
      dates: { fr: "2023 – 2025", en: "2023 – 2025" },
      details: { fr: [], en: [] },
    },
  ],

  education: [
    {
      degree: { fr: "Master Mathématiques appliquées, statistique (MAEA)", en: "MSc Applied Mathematics & Statistics (MAEA)" },
      school: "École des Mines de Saint-Étienne",
      dates: { fr: "2026 – 2027", en: "2026 – 2027" },
      details: {
        fr: "Master national co-accrédité avec l'École Centrale de Lyon et l'ENS de Lyon. Filière Mathématiques & Machine Learning : processus stochastiques, Monte-Carlo, optimisation, apprentissage statistique, calcul intensif.",
        en: "National Master's degree co-accredited with École Centrale de Lyon and ENS de Lyon. Mathematics & Machine Learning stream: probability and stochastic processes, Monte Carlo methods, optimisation, statistical learning, high-performance computing.",
      },
    },
    {
      degree: { fr: "Diplôme d'ingénieur · IA & Data Science", en: "Diplôme d'Ingénieur (5-year MSc-equivalent) · AI & Data Science" },
      school: "École des Mines d'Alès",
      dates: { fr: "2024 – 2027", en: "2024 – 2027" },
      details: {
        fr: "Double diplôme avec Mines Saint-Étienne. Machine learning, modélisation statistique, développement logiciel.",
        en: "Double degree with École des Mines de Saint-Étienne. Machine learning, statistical modelling, software engineering.",
      },
    },
    {
      degree: { fr: "Classe préparatoire ATS", en: "Intensive preparatory course (CPGE-ATS) for French engineering grandes écoles" },
      school: "Lycée Lafayette · Clermont-Ferrand",
      dates: { fr: "2023 – 2024", en: "2023 – 2024" },
      details: { fr: "", en: "" },
    },
    {
      degree: { fr: "DUT Mesures Physiques", en: "Two-year technical degree (DUT) in Physical Measurement and Instrumentation" },
      school: "Université Clermont Auvergne",
      dates: { fr: "2021 – 2023", en: "2021 – 2023" },
      details: { fr: "", en: "" },
    },
  ],

  projects: [
    {
      name: { fr: "Scoring cross-sectionnel d'actions S&P 500", en: "S&P 500 cross-sectional equity scoring" },
      description: {
        fr: "Sélection mensuelle d'actions (long-only et long-short) avec backtest complet : 24 variables construites à partir des prix bruts, ~66 000 actions-mois, régression logistique L2 codée from scratch (identique à scikit-learn à 4 décimales), validation walk-forward. Hors échantillon 2019–2024, net de frais : portefeuille top 20 % à 26,0 %/an, Sharpe 0,93 contre 0,85 pour le S&P 500 ; le CAPM montre un excès de rendement porté par le beta (1,33), alpha +4,8 % non significatif (t = 1,12).",
        en: "Monthly stock selection (long-only and long-short) with full backtest: 24 features built from raw prices, ~66,000 stock-months, L2 logistic regression coded from scratch (matches scikit-learn to 4 d.p.), walk-forward validation. Out-of-sample 2019–2024, net of costs: top-20% portfolio 26.0% p.a., Sharpe 0.93 vs. 0.85 for the S&P 500; CAPM shows excess return driven by beta (1.33), alpha +4.8% not significant (t = 1.12).",
      },
      link: "https://github.com/antojfr/sp500-quant-scoring",
      tags: ["Python", "Backtest", "Walk-forward", "CAPM"],
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
    { group: { fr: "Langages", en: "Languages" }, items: ["C", "Java", "SQL", "R"] },
    { group: { fr: "Outils", en: "Tools" }, items: ["Power BI", "Excel / Power Query"] },
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
