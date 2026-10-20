/*
 * Liens personnalisés par entreprise : https://antojfr.github.io/cv-en-ligne-/?for=<id>
 * - "focus" : projet affiché en premier (sp500, credit, power, nfc)
 * - "msg" : phrase affichée en haut de page, sous « Pour <nom> »
 * - "domain" : site de l'entreprise, sert à afficher son logo
 * - "logo" (optionnel) : fichier dans assets/logos/, prioritaire sur le logo du site
 * - "logoFill" (optionnel) : le logo a son propre fond et remplit toute la tuile
 * Ajouter une entreprise = ajouter une ligne ici.
 */
const SP500 = {
  fr: "Le projet le plus proche de votre métier : mon modèle de sélection d'actions sur le S&P 500, testé hors échantillon, avec un Sharpe de 0,93 net de frais.",
  en: "The project closest to your work: my S&P 500 stock selection model, tested out of sample, with a 0.93 Sharpe net of costs.",
};
const CREDIT = {
  fr: "Pour le risque et la validation de modèles : mon scoring de crédit codé de zéro, aux règles lisibles, et la validation walk-forward de mon backtest S&P 500.",
  en: "For risk and model validation: my credit scoring model coded from scratch, with explainable rules, and the walk-forward validation of my S&P 500 backtest.",
};
const POWER = {
  fr: "Côté marchés de l'énergie : la prévision de prix d'achat chez Thales et un réseau de neurones pour optimiser les achats d'électricité de communes d'Occitanie.",
  en: "On energy markets: purchase price forecasting at Thales and a neural network optimising electricity purchases for towns in Occitanie.",
};

const TARGETS = [
  // À voir absolument
  { id: "abc", logo: "assets/logos/abc.png", logoFill: true, domain: "abc-arbitrage.com", name: "ABC Arbitrage", focus: "sp500", msg: SP500 },
  { id: "sg", logo: "assets/logos/sg.png", domain: "societegenerale.com", name: "Société Générale", focus: "sp500", msg: SP500 },
  {
    id: "murex", logo: "assets/logos/murex.png", domain: "murex.com", name: "Murex", focus: "sp500",
    msg: {
      fr: "Pour vos équipes pricing et risque : le moteur de pricing que j'ai construit chez Thales, et mon backtest S&P 500 testé hors échantillon.",
      en: "For your pricing and risk teams: the pricing engine I built at Thales, and my S&P 500 backtest tested out of sample.",
    },
  },
  { id: "neoen", logo: "assets/logos/neoen.png", domain: "neoen.com", name: "Neoen", focus: "power", msg: POWER },
  { id: "nexialog", logo: "assets/logos/nexialog.png", domain: "nexialog.com", name: "Nexialog Consulting", focus: "credit", msg: CREDIT },
  { id: "fincley", logo: "assets/logos/fincley.png", domain: "fincley.com", name: "Fincley Consulting", focus: "sp500", msg: SP500 },

  // Intéressant
  { id: "bpce", logo: "assets/logos/bpce.png", domain: "groupebpce.com", name: "Groupe BPCE", focus: "credit", msg: CREDIT },
  { id: "totalenergies", logo: "assets/logos/totalenergies.png", domain: "totalenergies.com", name: "TotalEnergies", focus: "power", msg: POWER },
  { id: "exiom", domain: "exiom-partners.com", name: "Exiom Partners", focus: "credit", msg: CREDIT },
  { id: "kpmg", logo: "assets/logos/kpmg.png", domain: "kpmg.com", name: "KPMG", focus: "credit", msg: CREDIT },
  { id: "ey", logo: "assets/logos/ey.png", logoFill: true, domain: "ey.com", name: "EY", focus: "credit", msg: CREDIT },
  { id: "forvismazars", domain: "forvismazars.com", name: "Forvis Mazars", focus: "credit", msg: CREDIT },
  { id: "wavestone", domain: "wavestone.com", name: "Wavestone", focus: "sp500", msg: SP500 },
  { id: "sia", domain: "sia-partners.com", name: "Sia", focus: "credit", msg: CREDIT },
  { id: "accenture", domain: "accenture.com", logo: "assets/logos/accenture.svg", name: "Accenture", focus: "sp500", msg: SP500 },
  { id: "talan", domain: "talan.com", name: "Talan", focus: "sp500", msg: SP500 },
  { id: "soprasterianext", domain: "soprasteria.com", name: "Sopra Steria Next", focus: "credit", msg: CREDIT },
  {
    id: "metravib", domain: "metravib-defence.com", name: "Metravib Defence", focus: "sp500",
    msg: {
      fr: "Côté data science : mes modèles de prévision sur séries temporelles, chez Thales et sur le S&P 500, avec une validation qui respecte la chronologie.",
      en: "On data science: my forecasting models on time series, at Thales and on the S&P 500, with validation that respects time order.",
    },
  },
];
