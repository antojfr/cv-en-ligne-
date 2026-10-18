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
