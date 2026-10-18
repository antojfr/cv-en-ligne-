/*
 * Liens personnalisés par entreprise : https://antojfr.github.io/cv-en-ligne-/?for=<id>
 * - "focus" : projet affiché en premier (sp500, credit, power, nfc)
 * - "msg" : phrase affichée en haut de page, sous « Pour <nom> »
 * Ajouter une entreprise = ajouter une ligne ici.
 */
const SP500 = {
  fr: "Le projet le plus proche de votre métier : mon modèle de sélection d'actions sur le S&P 500, testé hors échantillon, avec un Sharpe de 0,93 net de frais.",
  en: "The project closest to your work: my S&P 500 stock selection model, tested out of sample, with a 0.93 Sharpe net of costs.",
};
const CREDIT = {
  fr: "Pour le risque et la validation de modèles : mon scoring de crédit codé from scratch, aux règles explicables, et la validation walk-forward de mon backtest S&P 500.",
  en: "For risk and model validation: my credit scoring model coded from scratch, with explainable rules, and the walk-forward validation of my S&P 500 backtest.",
};
const POWER = {
  fr: "Côté marchés de l'énergie : la prévision de prix d'achat chez Thales et un réseau de neurones pour optimiser les achats d'électricité de communes d'Occitanie.",
  en: "On energy markets: purchase price forecasting at Thales and a neural network optimising electricity purchases for towns in Occitanie.",
};

const TARGETS = [
  // À voir absolument
  { id: "abc", name: "ABC Arbitrage", focus: "sp500", msg: SP500 },
  { id: "sg", name: "Société Générale", focus: "sp500", msg: SP500 },
  {
    id: "murex", name: "Murex", focus: "sp500",
    msg: {
      fr: "Pour vos équipes pricing et risque : le moteur de pricing que j'ai construit chez Thales, et mon backtest S&P 500 testé hors échantillon.",
      en: "For your pricing and risk teams: the pricing engine I built at Thales, and my S&P 500 backtest tested out of sample.",
    },
  },
  { id: "neoen", name: "Neoen", focus: "power", msg: POWER },
  { id: "nexialog", name: "Nexialog Consulting", focus: "credit", msg: CREDIT },
  { id: "fincley", name: "Fincley Consulting", focus: "sp500", msg: SP500 },

  // Intéressant
  { id: "bpce", name: "Groupe BPCE", focus: "credit", msg: CREDIT },
  { id: "totalenergies", name: "TotalEnergies", focus: "power", msg: POWER },
  { id: "exiom", name: "Exiom Partners", focus: "credit", msg: CREDIT },
  { id: "kpmg", name: "KPMG", focus: "credit", msg: CREDIT },
  { id: "ey", name: "EY", focus: "credit", msg: CREDIT },
  { id: "wavestone", name: "Wavestone", focus: "sp500", msg: SP500 },
  { id: "sia", name: "Sia", focus: "credit", msg: CREDIT },
  { id: "accenture", name: "Accenture", focus: "sp500", msg: SP500 },
  { id: "talan", name: "Talan", focus: "sp500", msg: SP500 },
  { id: "soprasterianext", name: "Sopra Steria Next", focus: "credit", msg: CREDIT },
  {
    id: "metravib", name: "Metravib Defence", focus: "sp500",
    msg: {
      fr: "Côté data science : mes modèles de prévision sur séries temporelles, chez Thales et sur le S&P 500, avec une validation qui respecte la chronologie.",
      en: "On data science: my forecasting models on time series, at Thales and on the S&P 500, with validation that respects time order.",
    },
  },
];
