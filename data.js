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
  contactPhoto: "assets/contact.jpg", // petite version pour la fiche contact
  // Fiches contact générées par « node scripts/build-vcard.js » (à relancer si tu changes tes infos)
  vcard: { fr: "contact/fr/Antonin-Jaffre.vcf", en: "contact/en/Antonin-Jaffre.vcf" },

  email: "antoninjaffre@gmail.com",
  phone: "+33 6 29 22 47 31", // ajouté uniquement à la fiche contact (laisser vide pour le retirer)
  location: { fr: "Saint-Étienne et Alès", en: "Saint-Étienne and Alès, France" },

  // Compteur de visites GoatCounter : https://<code>.goatcounter.com (laisser vide pour le désactiver)
  goatcounter: "antojfr",

  linkedin: "https://www.linkedin.com/in/antonin-jaffr%C3%A9",
  github: "https://github.com/antojfr",

  // CV PDF par langue (le français est la traduction exacte de l'anglais).
  cvPdf: { fr: "cv/cv-fr.pdf", en: "cv/cv-en.pdf" },

  // Événement : affiché en haut de page et dans l'email pré-rempli.
  event: { fr: "Forum Perspectives", en: "Forum Perspectives" },
  eventFull: { fr: "20 octobre 2026, Lyon", en: "20 October 2026, Lyon" },

  title: {
    fr: "Élève ingénieur aux Mines, data science et finance quantitative",
    en: "Engineering student at Mines, data science and quantitative finance",
  },

  // Ce que tu recherches, affiché en haut de page.
  lookingFor: {
    fr: "Je cherche un stage de 6 mois à l'étranger en finance de marché ou en modélisation quantitative, à partir de mars 2027.",
    en: "I am looking for a 6-month internship abroad in financial markets or quantitative modelling, starting March 2027.",
  },

  // Bandeau défilant façon cotations (▲ hausse, ▼ baisse : valeur commençant par « - »)
  ticker: [
    { sym: "SHARPE", val: "0.93" },
    { sym: "TOP20 P.A.", val: "+26.0%" },
    { sym: "MAE THALES", val: "-12.1%" },
    { sym: "SAP ROWS", val: "200K" },
    { sym: "TEAM", val: "13" },
    { sym: "TOEIC", val: "885" },
    { sym: "FEATURES", val: "24" },
    { sym: "STOCK-MONTHS", val: "66K" },
  ],

  about: {
    fr: "Je suis en double diplôme entre les Mines d'Alès (ingénieur IA et data science) et les Mines de Saint-Étienne (master de mathématiques appliquées). Cet été, chez Thales, j'ai construit un modèle de prédiction des prix d'achat. En parallèle, je développe un modèle de sélection d'actions sur le S&P 500, que je teste hors échantillon. J'ai aussi travaillé sur la prévision des prix de l'électricité.",
    en: "I am in a double degree between Mines Alès and Mines Saint-Étienne, in AI and applied mathematics. This summer at Thales, I built a model to predict purchase prices. On the side, I am developing a stock selection model on the S&P 500, tested out of sample. I have also worked on electricity price forecasting.",
  },

  experience: [
    {
      role: { fr: "Stage : projection et prédiction des prix d'achat (contrôle de gestion industriel)", en: "Internship: purchase price projection and prediction (industrial controlling)" },
      company: "Thales, Brive-la-Gaillarde",
      dates: { fr: "Mai - Août 2026", en: "May - Aug. 2026" },
      details: {
        fr: [
          "Moteur de pricing (livrable principal). Automatisation de la projection annuelle des prix d'achat pour l'année suivante : les règles du contrôle de gestion sont codées dans un moteur Python, et les résultats sont transmis aux acheteurs après des vérifications automatiques de cohérence.",
          "Prédiction des prix par machine learning. Modèle qui prédit la variation de prix de chaque commande, entraîné sur environ 200 000 lignes d'achat SAP nettoyées (28 000 références, 2017-2026) avec LightGBM, Optuna et une validation croisée qui respecte l'ordre chronologique. Erreur absolue moyenne inférieure de 12,1 % à celle de la méthode en place.",
        ],
        en: [
          "Pricing engine (main deliverable). Automated the annual year-ahead price projection campaign by translating management-control rules into a Python engine, with results delivered to buyers and automated reconciliation checks.",
          "Machine learning price prediction. Order-level price variation model built on ~200,000 cleansed SAP purchasing records (28,000 part numbers, 2017-2026) with LightGBM, Optuna and time-based cross-validation. 12.1% lower mean absolute error than the incumbent method.",
        ],
      },
    },
    {
      role: { fr: "Président de la Junior-Entreprise (cabinet de conseil étudiant)", en: "President of the student-run consulting firm" },
      company: "Mines Alès Junior Étude",
      dates: { fr: "Depuis mai 2025", en: "Since May 2025" },
      details: {
        fr: ["Direction d'une équipe de 13 personnes. Obtention du label officiel de la CNJE (Confédération nationale des Junior-Entreprises). Gestion des missions de A à Z et des relations avec les clients."],
        en: ["Led a team of 13; secured official CNJE accreditation; managed the project lifecycle and client partnerships."],
      },
    },
    {
      role: { fr: "Stage : analyste de la performance économique (data et BI)", en: "Internship: economic performance analyst (data and BI)" },
      company: "Phytocontrol Laboratory, Nîmes",
      dates: { fr: "Nov. - Déc. 2025", en: "Nov. - Dec. 2025" },
      details: {
        fr: ["Analyse des prix de vente, des coûts de revient et de la rentabilité sur les grands comptes (Suez, Nestlé). Mise en forme des données financières avec Power Query et tableaux de bord Power BI pour suivre les marges."],
        en: ["Pricing and profitability analysis (selling prices, cost of goods sold) on key accounts (Suez, Nestlé); financial data structuring in Power Query and Power BI dashboards for margin monitoring."],
      },
    },
    {
      role: { fr: "Autres stages", en: "Other internships" },
      company: "University of Wollongong, Orange, Michelin",
      dates: { fr: "2023 - 2025", en: "2023 - 2025" },
      details: {
        fr: ["Stage de recherche en Australie, dans une équipe internationale (nanoparticules pour les filtres UV des crèmes solaires). En France : maintenance prédictive et analyse industrielle."],
        en: ["Research within an international team in Australia (nanoparticles for UV filters); predictive maintenance and industrial analysis in France."],
      },
    },
  ],

  education: [
    {
      degree: { fr: "Master Mathématiques appliquées, statistique (parcours Mathématiques en action)", en: "MSc Applied Mathematics and Statistics, Mathematics in Action track (MAEA)" },
      school: "École des Mines de Saint-Étienne",
      dates: { fr: "2026 - 2027", en: "2026 - 2027" },
      details: {
        fr: "Master délivré conjointement avec l'École Centrale de Lyon et l'ENS de Lyon. Filière mathématiques et machine learning pour l'ingénierie : probabilités et processus stochastiques, méthodes de Monte-Carlo, optimisation, apprentissage statistique, calcul haute performance.",
        en: "National Master's degree co-accredited with École Centrale de Lyon and ENS de Lyon. Mathematics & Machine Learning stream: probability and stochastic processes, Monte Carlo methods, optimisation, statistical learning, high-performance computing.",
      },
    },
    {
      degree: { fr: "Diplôme d'ingénieur (bac+5), IA et data science", en: "Diplôme d'Ingénieur (5-year MSc equivalent), AI and data science" },
      school: "École des Mines d'Alès",
      dates: { fr: "2024 - 2027", en: "2024 - 2027" },
      details: {
        fr: "Double diplôme avec les Mines de Saint-Étienne. Machine learning, modélisation statistique, génie logiciel.",
        en: "Double degree with École des Mines de Saint-Étienne. Machine learning, statistical modelling, software engineering.",
      },
    },
    {
      degree: { fr: "Prépa ATS : classe préparatoire aux écoles d'ingénieurs, après un bac+2", en: "Intensive preparatory course (CPGE-ATS) for French engineering grandes écoles" },
      school: "Lycée Lafayette, Clermont-Ferrand",
      dates: { fr: "2023 - 2024", en: "2023 - 2024" },
      details: { fr: "", en: "" },
    },
    {
      degree: { fr: "DUT Mesures Physiques et Instrumentation", en: "Two-year technical degree (DUT) in Physical Measurement and Instrumentation" },
      school: "Université Clermont Auvergne",
      dates: { fr: "2021 - 2023", en: "2021 - 2023" },
      details: { fr: "", en: "" },
    },
  ],

  projects: [
    {
      id: "sp500",
      name: { fr: "Scoring des actions du S&P 500", en: "S&P 500 cross-sectional equity scoring" },
      dates: { fr: "Depuis 2025", en: "Since 2025" },
      description: {
        fr: "Chaque mois, le modèle note les actions et construit deux portefeuilles, long-only et long-short, évalués par un backtest complet. 24 variables calculées à partir des prix (momentum, volatilité, bêta, drawdown, taille, macro), sur environ 66 000 observations action-mois. Régression logistique (pénalité L2) codée de zéro, identique à scikit-learn à 4 décimales. Validation glissante dans le temps (walk-forward).",
        en: "Monthly stock selection, long-only and long-short, with full backtest. 24 features built from raw prices (momentum, volatility, beta, drawdown, size, macro), ~66,000 stock-months; L2 logistic regression coded from scratch (matches scikit-learn to 4 d.p.), walk-forward validation.",
      },
      // Performance cumulée mensuelle (base 1, avant frais), relevée sur assets/equity_curve.png du dépôt
      chart: {
        dates: ["2019-01", "2019-02", "2019-03", "2019-04", "2019-05", "2019-06", "2019-07", "2019-08", "2019-09", "2019-10", "2019-11", "2019-12", "2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06", "2020-07", "2020-08", "2020-09", "2020-10", "2020-11", "2020-12", "2021-01", "2021-02", "2021-03", "2021-04", "2021-05", "2021-06", "2021-07", "2021-08", "2021-09", "2021-10", "2021-11", "2021-12", "2022-01", "2022-02", "2022-03", "2022-04", "2022-05", "2022-06", "2022-07", "2022-08", "2022-09", "2022-10", "2022-11", "2022-12", "2023-01", "2023-02", "2023-03", "2023-04", "2023-05", "2023-06", "2023-07", "2023-08", "2023-09", "2023-10", "2023-11", "2023-12", "2024-01", "2024-02", "2024-03", "2024-04", "2024-05", "2024-06", "2024-07", "2024-08", "2024-09", "2024-10", "2024-11"],
        top20: [1.047, 1.052, 1.118, 1.014, 1.106, 1.122, 1.097, 1.129, 1.16, 1.219, 1.267, 1.24, 1.138, 0.914, 1.102, 1.183, 1.215, 1.292, 1.373, 1.332, 1.359, 1.552, 1.644, 1.68, 1.906, 2.051, 2.157, 2.207, 2.236, 2.232, 2.295, 2.232, 2.352, 2.338, 2.453, 2.309, 2.293, 2.322, 2.187, 2.182, 1.965, 2.196, 2.144, 1.99, 2.178, 2.383, 2.266, 2.528, 2.517, 2.51, 2.481, 2.526, 2.777, 2.912, 2.869, 2.709, 2.578, 2.842, 3.075, 3.111, 3.256, 3.398, 3.188, 3.249, 3.276, 3.405, 3.455, 3.599, 3.538, 3.679, 3.502],
        sp500: [1.034, 1.054, 1.09, 1.032, 1.088, 1.104, 1.086, 1.106, 1.127, 1.165, 1.194, 1.197, 1.097, 0.971, 1.066, 1.129, 1.151, 1.203, 1.292, 1.253, 1.219, 1.339, 1.389, 1.377, 1.418, 1.475, 1.549, 1.561, 1.592, 1.628, 1.66, 1.601, 1.701, 1.694, 1.759, 1.674, 1.626, 1.674, 1.531, 1.522, 1.409, 1.524, 1.45, 1.332, 1.439, 1.509, 1.427, 1.509, 1.475, 1.52, 1.542, 1.561, 1.64, 1.696, 1.667, 1.583, 1.563, 1.687, 1.769, 1.8, 1.893, 1.94, 1.873, 1.949, 2.022, 2.047, 2.09, 2.132, 2.119, 2.23, 2.189],
        ew: [1.047, 1.063, 1.102, 1.045, 1.115, 1.131, 1.115, 1.145, 1.16, 1.199, 1.235, 1.235, 1.133, 0.95, 1.075, 1.14, 1.158, 1.212, 1.267, 1.237, 1.235, 1.402, 1.457, 1.448, 1.531, 1.626, 1.694, 1.735, 1.741, 1.771, 1.814, 1.753, 1.85, 1.825, 1.931, 1.852, 1.834, 1.891, 1.782, 1.778, 1.646, 1.775, 1.728, 1.59, 1.744, 1.863, 1.787, 1.902, 1.857, 1.861, 1.87, 1.83, 1.967, 2.035, 1.988, 1.895, 1.836, 2.006, 2.135, 2.139, 2.234, 2.329, 2.232, 2.288, 2.309, 2.392, 2.465, 2.519, 2.503, 2.646, 2.492],
      },
      // Résultats affichés sous forme de mini-tableau
      metrics: [
        { k: { fr: "Rendement du top 20 %", en: "Top-20% return" }, v: { fr: "26,0 % par an", en: "26.0% p.a." } },
        { k: { fr: "Sharpe", en: "Sharpe" }, v: { fr: "0,93 vs 0,85", en: "0.93 vs 0.85" } },
        { k: { fr: "Bêta (CAPM)", en: "Beta (CAPM)" }, v: { fr: "1,33", en: "1.33" } },
        { k: { fr: "Alpha", en: "Alpha" }, v: { fr: "+4,8 % (t = 1,12)", en: "+4.8% (t = 1.12)" } },
      ],
      note: {
        fr: "Résultats hors échantillon (2019-2024), nets de frais. Le CAPM montre que la surperformance vient surtout du bêta : l'alpha n'est pas significatif.",
        en: "Out-of-sample 2019-2024, net of costs. CAPM shows excess return driven by beta; alpha not significant.",
      },
      link: "https://github.com/antojfr/sp500-quant-scoring",
      tags: ["Python", "Backtest", "Walk-forward", "CAPM"],
    },
    {
      id: "credit",
      name: { fr: "Scoring de crédit : arbre de décision codé de zéro", en: "Credit scoring: decision tree coded from scratch" },
      dates: { fr: "2024 - 2025", en: "2024 - 2025" },
      description: {
        fr: "Prédire si un crédit immobilier est accordé à partir du profil du client (revenus, charges, historique). Arbre de décision écrit entièrement à la main, sans librairie de modélisation : critères de Gini et d'entropie, gain d'information, choix de la profondeur. Les règles apprises sont lisibles, ce qu'exigent la réglementation bancaire (Bâle) et le RGPD pour justifier un refus.",
        en: "Predict whether a mortgage is granted from the client's profile (income, expenses, history). Decision tree written by hand, without any modelling library: Gini and entropy criteria, information gain, depth selection. The learned rules are readable, as Basel and GDPR require to justify a refusal.",
      },
      metrics: [
        { k: { fr: "Précision (jeu de test)", en: "Accuracy (test set)" }, v: { fr: "80,7 %", en: "80.7%" } },
        { k: { fr: "Profondeur optimale", en: "Optimal depth" }, v: "3" },
        { k: { fr: "Règles de décision", en: "Decision rules" }, v: "8" },
        { k: { fr: "Comparé à", en: "Benchmarked against" }, v: "scikit-learn" },
      ],
      // Règles apprises (lecture simplifiée de l'arbre, comme dans le README du dépôt)
      tree: {
        q: { fr: "Loyer ≤ 652 € ?", en: "Rent ≤ €652?" },
        yes: {
          q: { fr: "Propriétaire ou logement social ?", en: "Homeowner or social housing?" },
          yes: { q: { fr: "Âge ≤ 31 ans ?", en: "Age ≤ 31?" }, yes: "ok", no: "ko" },
          no: "ok",
        },
        no: {
          q: { fr: "Propriétaire ou logement social ?", en: "Homeowner or social housing?" },
          yes: "ko",
          no: "ok",
        },
      },
      // Précision (%) selon la profondeur, reprise des deux figures du dépôt (valeurs approchées)
      depthChart: {
        depths: [1, 2, 3, 4, 5, 6, 7],
        series: [
          { cls: "top", label: { fr: "Mon arbre, entropie", en: "My tree, entropy" }, values: [58.0, 81.2, 80.7, 75.3, 79.6, 76.0, 75.5] },
          { cls: "sp", label: { fr: "Mon arbre, Gini", en: "My tree, Gini" }, values: [58.0, 81.2, 77.4, 76.8, 73.2, 74.2, 63.1] },
          { cls: "ew", label: { fr: "scikit-learn, entropie", en: "scikit-learn, entropy" }, values: [null, 80.9, 81.2, 82.4, 86.5, 84.5, 84.3] },
        ],
        chosen: 3,
      },
      note: {
        fr: "Même profil que scikit-learn : la précision monte puis baisse quand l'arbre devient trop profond (surapprentissage). Mon arbre plafonne vers 81 % à la profondeur 2-3, scikit-learn atteint 86,5 % à la profondeur 5.",
        en: "Same shape as scikit-learn: accuracy rises, then falls when the tree gets too deep (overfitting). My tree peaks around 81% at depth 2-3, scikit-learn reaches 86.5% at depth 5.",
      },
      link: "https://github.com/antojfr/python-descision-tree-from-scratch-for-Immo-credit",
      tags: ["Python", "NumPy", "pandas"],
    },
    {
      id: "power",
      name: { fr: "Optimisation des achats d'électricité", en: "Electricity procurement optimisation" },
      dates: { fr: "2024 - 2025", en: "2024 - 2025" },
      description: {
        fr: "Réseau de neurones pour optimiser le prix d'achat de l'électricité de communes d'Occitanie. Projet d'école aux Mines d'Alès.",
        en: "Neural network to optimise electricity purchase prices for municipalities in Occitanie. École des Mines d'Alès project.",
      },
      link: "",
      tags: ["Python", "TensorFlow", "Keras"],
    },
    {
      id: "nfc",
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

  // En cours : ce sur quoi tu travailles en ce moment (à mettre à jour)
  current: [
    {
      status: { fr: "Bientôt sur GitHub", en: "Coming to GitHub" },
      title: { fr: "Options asiatiques sur le pétrole par Monte-Carlo", en: "Monte Carlo pricing of Asian options on oil" },
      desc: {
        fr: "Pricing d'options sur prix moyen du pétrole (WTI) par simulation Monte-Carlo. Le code sera publié sur GitHub une fois le projet terminé.",
        en: "Pricing average price options on oil (WTI) with Monte Carlo simulation. The code will be on GitHub once the project is finished.",
      },
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
