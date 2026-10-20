# CV en ligne (NFC)

Page web bilingue (FR / EN) à associer à une puce NFC : photo, liens LinkedIn / GitHub,
bouton « Enregistrer le contact » (vCard), téléchargement du CV en PDF et CV complet en ligne.

## 1. Personnaliser

Tout se modifie dans **`data.js`** (nom, titre, expériences, projets, liens…).

- Photo : `assets/photo.jpg` (carrée, ~500×500 px). Sans photo, les initiales s'affichent.
- CV PDF : `cv/cv-fr.pdf` et `cv/cv-en.pdf`. Sans PDF, le bouton propose « Enregistrer en PDF » de la page.

## 2. Mettre en ligne (GitHub Pages, gratuit)

1. Sur GitHub : **Settings → Pages**.
2. *Source* : « Deploy from a branch », branche **main**, dossier **/ (root)** → *Save*.
3. Après ~1 minute, le site est en ligne sur :
   **https://antojfr.github.io/cv-en-ligne-/**

## 3. Programmer les puces NFC

1. Installer **NFC Tools** (Android / iPhone, gratuit).
2. *Écrire* → *Ajouter un enregistrement* → **URL / URI** →
   `https://antojfr.github.io/cv-en-ligne-/`
3. *Écrire* puis approcher la puce du téléphone.
4. (Optionnel) *Autres* → **Verrouiller la puce** pour qu'on ne puisse pas la réécrire —
   attention, c'est définitif.

Astuces :
- `…/cv-en-ligne-/?lang=en` force l'anglais (pratique pour une puce dédiée aux recruteurs étrangers).
- Sinon la langue suit celle du téléphone, et le visiteur peut changer avec le bouton FR / EN.
- Les iPhone récents lisent le NFC sans application ; sur Android, le NFC doit être activé.
- Ajoute un petit QR code de secours (même URL) sur ton badge ou ta carte, pour les téléphones sans NFC.

## Liens personnalisés par entreprise

Chaque lien affiche en haut de page « Pour <entreprise> » avec un message adapté, et met le projet le plus pertinent en premier. À mettre dans les emails de relance. Pour ajouter une entreprise : une ligne dans `targets.js`.

| Entreprise | Lien |
|---|---|
| ABC Arbitrage | https://antojfr.github.io/cv-en-ligne-/?for=abc |
| Société Générale | https://antojfr.github.io/cv-en-ligne-/?for=sg |
| Murex | https://antojfr.github.io/cv-en-ligne-/?for=murex |
| Neoen | https://antojfr.github.io/cv-en-ligne-/?for=neoen |
| Nexialog Consulting | https://antojfr.github.io/cv-en-ligne-/?for=nexialog |
| Fincley Consulting | https://antojfr.github.io/cv-en-ligne-/?for=fincley |
| Groupe BPCE | https://antojfr.github.io/cv-en-ligne-/?for=bpce |
| TotalEnergies | https://antojfr.github.io/cv-en-ligne-/?for=totalenergies |
| Exiom Partners | https://antojfr.github.io/cv-en-ligne-/?for=exiom |
| KPMG | https://antojfr.github.io/cv-en-ligne-/?for=kpmg |
| EY | https://antojfr.github.io/cv-en-ligne-/?for=ey |
| Forvis Mazars | https://antojfr.github.io/cv-en-ligne-/?for=forvismazars |
| Wavestone | https://antojfr.github.io/cv-en-ligne-/?for=wavestone |
| Sia | https://antojfr.github.io/cv-en-ligne-/?for=sia |
| Accenture | https://antojfr.github.io/cv-en-ligne-/?for=accenture |
| Talan | https://antojfr.github.io/cv-en-ligne-/?for=talan |
| Sopra Steria Next | https://antojfr.github.io/cv-en-ligne-/?for=soprasterianext |
| Metravib Defence | https://antojfr.github.io/cv-en-ligne-/?for=metravib |

## Compteur de visites (GoatCounter)

Le site compte les visites sur https://antojfr.goatcounter.com (sans cookies). Chaque lien d'entreprise apparaît comme une page `/for/<id>`, et les actions comme des événements : `contact` (fiche enregistrée), `cv`, `github`, `linkedin`, `email`, suivis du lien d'origine (par exemple `contact/for/abc`). Le code du compte se règle dans `data.js` (`goatcounter`).

## Fiche contact (.vcf)

Le bouton « Ajouter à mes contacts » ouvre directement `contact/fr/Antonin-Jaffre.vcf` (ou `contact/en/…`) : sur iPhone, la fiche « Nouveau contact » s'affiche avec la photo. Ces fichiers sont générés à partir de `data.js` : après avoir changé ton nom, email, téléphone, titre ou photo, relance

```bash
node scripts/build-vcard.js
```
