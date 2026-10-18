/*
 * ============================================================
 *  TOUT CE QUE TU DOIS MODIFIER EST DANS CE FICHIER.
 *  Contenu basé sur le CV anglais (cv/cv-en.pdf).
 *  Chaque texte existe en "fr" et en "en".
 * ============================================================
 */
const PROFILE = {
  firstName: "Antonin",
  lastName: "Jaffré",

  // Photo carrée dans assets/. Si elle manque, tes initiales s'affichent.
  photo: "assets/photo.jpg",

  email: "antoninjaffre@gmail.com",
  phone: "+33 6 29 22 47 31", // ajouté uniquement à la fiche contact (laisser vide pour le retirer)
  location: { fr: "Saint-Étienne · Alès, France", en: "Saint-Étienne · Alès, France" },

  linkedin: "https://www.linkedin.com/in/antonin-jaffr%C3%A9",
  github: "https://github.com/antojfr",

  // CV PDF par langue (le français est la traduction exacte de l'anglais).
  cvPdf: { fr: "cv/cv-fr.pdf", en: "cv/cv-en.pdf" },

  // Nom de l'événement : utilisé dans l'objet du mail.
  event: { fr: "le forum entreprises", en: "the career fair" },

  title: {
    fr: "Élève ingénieur Mines · Data Science & Finance quantitative",
    en: "Mines engineering student · Data Science & Quantitative Finance",
  },

  // Ce que tu recherches — affiché avec un voyant vert « disponible ».
  lookingFor: {
    fr: "Stage de 6 mois · marchés financiers & modélisation quantitative · dès mars 2027",
    en: "6-month internship · financial markets & quantitative modelling · from March 2027",
  },

  // Chiffres clés : affichés comme le tableau d'une fiche de fonds
  keyFigures: [
    { k: { fr: "Erreur de prédiction vs méthode en place (Thales)", en: "Prediction error vs incumbent method (Thales)" }, v: { fr: "−12,1 %", en: "−12.1%" } },
    { k: { fr: "Sharpe hors échantillon, net de frais", en: "Out-of-sample Sharpe, net of costs" }, v: { fr: "0,93", en: "0.93" }, ref: { fr: "S&P 500 : 0,85", en: "S&P 500: 0.85" } },
    { k: { fr: "Rendement portefeuille top 20 %", en: "Top-20% portfolio return" }, v: { fr: "26,0 %/an", en: "26.0% p.a." }, ref: { fr: "2019–2024", en: "2019–2024" } },
    { k: { fr: "Lignes SAP modélisées", en: "SAP records modelled" }, v: { fr: "200 000", en: "200,000" } },
    { k: { fr: "Équipe dirigée (Junior-Entreprise)", en: "Team led (Junior Enterprise)" }, v: "13" },
    { k: { fr: "TOEIC", en: "TOEIC" }, v: "885" },
  ],

  // Bandeau défilant façon cotations
  ticker: [
    { sym: "SHARPE", val: "0.93" },
    { sym: "TOP20 P.A.", val: "+26.0%" },
    { sym: "MAE THALES", val: "−12.1%" },
    { sym: "SAP ROWS", val: "200K" },
    { sym: "TEAM", val: "13" },
    { sym: "TOEIC", val: "885" },
    { sym: "FEATURES", val: "24" },
    { sym: "STOCK-MONTHS", val: "66K" },
  ],

  about: {
    fr: "Double diplôme Mines Alès et Mines Saint-Étienne en IA, data science et mathématiques appliquées. Je construis des modèles qui servent des décisions réelles : prédiction des prix d'achat chez Thales, et mon propre modèle de scoring d'actions du S&P 500, testé hors échantillon.",
    en: "Double degree at Mines Alès and Mines Saint-Étienne in AI, data science and applied mathematics. I build models that drive real decisions: purchase price prediction at Thales, and my own S&P 500 equity-scoring model, tested out of sample.",
  },

  // Petit détail mémorable
  funFact: {
    fr: "Je joue au poker : estimer des probabilités et décider sous incertitude, c'est le cœur du métier que je vise. Cette page s'est ouverte grâce à une puce NFC que j'ai programmée moi-même.",
    en: "I play poker: estimating probabilities and deciding under uncertainty is the core of the job I'm aiming for. This page opened from an NFC chip I programmed myself.",
  },

  experience: [
    {
      role: { fr: "Stage — Projection et prédiction des prix d'achat (Contrôle de gestion industriel)", en: "Internship — Purchase price projection & prediction (Industrial Controlling)" },
      company: "Thales · Brive-la-Gaillarde",
      dates: { fr: "Mai – Août 2026", en: "May – Aug. 2026" },
      details: {
        fr: [
          "Moteur de pricing (livrable principal) : automatisation de la campagne annuelle de projection des prix N+1 en traduisant les règles du contrôle de gestion dans un moteur Python, résultats livrés aux acheteurs avec contrôles de concordance automatisés.",
          "Prédiction de prix par machine learning : modèle de variation de prix par commande sur ~200 000 lignes d'achats SAP fiabilisées (28 000 références, 2017–2026) avec LightGBM, Optuna et validation croisée temporelle. Erreur absolue moyenne inférieure de 12,1 % à la méthode en place.",
        ],
        en: [
          "Pricing engine (main deliverable): automated the annual year-ahead price projection campaign by translating management-control rules into a Python engine, with results delivered to buyers and automated reconciliation checks.",
          "Machine learning price prediction: order-level price variation model built on ~200,000 cleansed SAP purchasing records (28,000 part numbers, 2017–2026) with LightGBM, Optuna and time-based cross-validation. 12.1% lower mean absolute error than the incumbent method.",
        ],
      },
    },
    {
      role: { fr: "Président — cabinet de conseil étudiant", en: "President — student-run consulting firm" },
      company: "Mines Alès Junior Étude",
      dates: { fr: "Mai 2025 – aujourd'hui", en: "May 2025 – present" },
      details: {
        fr: ["Direction d'une équipe de 13 personnes ; obtention du label officiel CNJE ; pilotage du cycle de vie des projets et des partenariats clients."],
        en: ["Led a team of 13; secured official CNJE accreditation; managed the project lifecycle and client partnerships."],
      },
    },
    {
      role: { fr: "Stage — Analyste performance économique (Data & BI)", en: "Internship — Economic performance analyst (Data & BI)" },
      company: "Phytocontrol Laboratory · Nîmes",
      dates: { fr: "Nov. – Déc. 2025", en: "Nov. – Dec. 2025" },
      details: {
        fr: ["Analyse de pricing et de rentabilité (prix de vente, coût de revient) sur comptes clés (Suez, Nestlé) ; structuration des données financières sous Power Query et tableaux de bord Power BI pour le suivi des marges."],
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
      degree: { fr: "Master Mathématiques appliquées & statistique · parcours MAEA", en: "MSc Applied Mathematics & Statistics · Mathematics in Action track (MAEA)" },
      school: "École des Mines de Saint-Étienne",
      dates: { fr: "2026 – 2027", en: "2026 – 2027" },
      details: {
        fr: "Master national co-accrédité avec l'École Centrale de Lyon et l'ENS de Lyon. Filière Mathématiques & Machine Learning : probabilités et processus stochastiques, Monte-Carlo, optimisation, apprentissage statistique, calcul haute performance.",
        en: "National Master's degree co-accredited with École Centrale de Lyon and ENS de Lyon. Mathematics & Machine Learning stream: probability and stochastic processes, Monte Carlo methods, optimisation, statistical learning, high-performance computing.",
      },
    },
    {
      degree: { fr: "Diplôme d'ingénieur · IA & Data Science", en: "Diplôme d'Ingénieur (5-year MSc-equivalent) · AI & Data Science" },
      school: "École des Mines d'Alès",
      dates: { fr: "2024 – 2027", en: "2024 – 2027" },
      details: {
        fr: "Double diplôme avec l'École des Mines de Saint-Étienne. Machine learning, modélisation statistique, génie logiciel.",
        en: "Double degree with École des Mines de Saint-Étienne. Machine learning, statistical modelling, software engineering.",
      },
    },
    {
      degree: { fr: "Classe préparatoire (CPGE-ATS) aux grandes écoles d'ingénieurs", en: "Intensive preparatory course (CPGE-ATS) for French engineering grandes écoles" },
      school: "Lycée Lafayette · Clermont-Ferrand",
      dates: { fr: "2023 – 2024", en: "2023 – 2024" },
      details: { fr: "", en: "" },
    },
    {
      degree: { fr: "DUT Mesures Physiques et Instrumentation", en: "Two-year technical degree (DUT) in Physical Measurement and Instrumentation" },
      school: "Université Clermont Auvergne",
      dates: { fr: "2021 – 2023", en: "2021 – 2023" },
      details: { fr: "", en: "" },
    },
  ],

  projects: [
    {
      name: { fr: "Scoring cross-sectionnel d'actions S&P 500", en: "S&P 500 cross-sectional equity scoring" },
      dates: { fr: "2025 – aujourd'hui", en: "2025 – present" },
      description: {
        fr: "Sélection mensuelle d'actions, long-only et long-short, avec backtest complet. 24 variables construites à partir des prix bruts (momentum, volatilité, beta, drawdown, taille, macro), ~66 000 actions-mois ; régression logistique L2 codée from scratch (identique à scikit-learn à 4 décimales), validation walk-forward.",
        en: "Monthly stock selection, long-only and long-short, with full backtest. 24 features built from raw prices (momentum, volatility, beta, drawdown, size, macro), ~66,000 stock-months; L2 logistic regression coded from scratch (matches scikit-learn to 4 d.p.), walk-forward validation.",
      },
      // Résultats affichés sous forme de mini-tableau
      metrics: [
        { k: { fr: "Rendement top 20 %", en: "Top-20% return" }, v: { fr: "26,0 %/an", en: "26.0% p.a." } },
        { k: { fr: "Sharpe", en: "Sharpe" }, v: { fr: "0,93 vs 0,85", en: "0.93 vs 0.85" } },
        { k: { fr: "Beta (CAPM)", en: "Beta (CAPM)" }, v: { fr: "1,33", en: "1.33" } },
        { k: { fr: "Alpha", en: "Alpha" }, v: { fr: "+4,8 % (t = 1,12)", en: "+4.8% (t = 1.12)" } },
      ],
      note: {
        fr: "Hors échantillon 2019–2024, net de frais. Le CAPM montre que l'excès de rendement vient du beta ; alpha non significatif.",
        en: "Out-of-sample 2019–2024, net of costs. CAPM shows excess return driven by beta; alpha not significant.",
      },
      link: "https://github.com/antojfr/sp500-quant-scoring",
      tags: ["Python", "Backtest", "Walk-forward", "CAPM"],
    },
    {
      name: { fr: "Projets Machine Learning — from scratch & deep learning", en: "Machine Learning projects — from scratch & deep learning" },
      dates: { fr: "2024 – 2025", en: "2024 – 2025" },
      description: {
        fr: "Scoring crédit : arbre de décision implémenté entièrement sans librairie. Optimisation des achats d'énergie : réseau de neurones (TensorFlow/Keras) pour optimiser le prix d'achat d'électricité de communes d'Occitanie.",
        en: "Credit scoring: decision tree implemented entirely without libraries. Energy procurement optimisation: neural network (TensorFlow/Keras) to optimise electricity purchase prices for municipalities in Occitanie.",
      },
      link: "",
      tags: ["Python", "TensorFlow", "Keras"],
    },
    {
      name: { fr: "Ce CV NFC", en: "This NFC résumé" },
      dates: { fr: "2026", en: "2026" },
      description: {
        fr: "Site bilingue relié à une puce NFC pour partager mon CV d'un simple geste.",
        en: "Bilingual website linked to an NFC chip to share my résumé with a single tap.",
      },
      link: "https://github.com/antojfr/cv-en-ligne-",
      tags: ["HTML", "CSS", "JavaScript", "NFC"],
    },
  ],

  skills: [
    { group: { fr: "Python & ML", en: "Python & ML" }, items: ["Pandas", "NumPy", "Scikit-learn", "LightGBM", "Optuna", "TensorFlow"] },
    { group: { fr: "Langages", en: "Languages" }, items: ["Python", "C", "Java", "SQL", "R"] },
    { group: { fr: "BI", en: "BI" }, items: ["Power BI", "Excel (Power Query)"] },
    {
      group: { fr: "Certifications", en: "Certifications" },
      items: ["IBM Machine Learning", "Yale Financial Markets (R. Shiller)", "Stanford ML Specialization (A. Ng)"],
    },
  ],

  languages: [
    { name: { fr: "Français", en: "French" }, level: { fr: "Langue maternelle", en: "Native" } },
    { name: { fr: "Anglais", en: "English" }, level: { fr: "TOEIC 885", en: "TOEIC 885" } },
    { name: { fr: "Espagnol", en: "Spanish" }, level: { fr: "A2", en: "A2" } },
  ],

  interests: {
    fr: ["Investissement quantitatif", "Poker", "Natation"],
    en: ["Quant investing", "Poker", "Swimming"],
  },
};
