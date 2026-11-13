# LUEUR — dossier de réalisation d'une vidéo 3D dans le navigateur

Ce dossier contient le scénario, le storyboard, la direction artistique, le code complet et le plan de production. Il ne contient pas de vidéo : c'est vous qui lancez la capture (partie 4.5).

## Hypothèses prises (le brief était vide)

| Information manquante | Valeur retenue |
|---|---|
| Durée, format, cadence | 60 s, 16:9, 1920 × 1080, 30 images/s, soit 1800 images (numérotées 0 à 1799) |
| Titre provisoire | « Lueur » |
| Genre | Court-métrage poétique, proche de la fable |
| Public | Tout public dès 7 ans |
| Message | Partager sa lumière ne l'éteint pas |
| Ton | Doux et mélancolique, puis lumineux |
| Éléments obligatoires | Un personnage original, une voix off en français, un slogan final |
| Éléments interdits | Marque, logo, personnage existant, personne réelle, violence |
| Références | Libre : aucune œuvre n'est citée ni imitée |
| Contraintes | Budget 0 €, ordinateur modeste, aucun logiciel installé |
| Pipeline | Voie A (Three.js + Vite dans StackBlitz). La Voie B (Remotion) n'est pas traitée |
| Assets visuels | 100 % générés par code : aucun téléchargement, donc aucune licence visuelle à gérer |

Conversion utilisée partout : image = secondes × 30.

---

# 1. Scénario complet

## 1.1 Logline

Quand toutes les étoiles s'éteignent, une petite lanterne vivante gravit sa colline pour offrir sa seule flamme au ciel.

## 1.2 Synopsis

Sur une île qui flotte dans la nuit, les étoiles se sont éteintes. Il ne reste qu'une lumière : la flamme de Lueur, une lanterne de papier sur pattes. Lueur quitte sa cabane et grimpe vers le sommet de l'île. Le vent se lève, sa flamme faiblit, et elle pourrait rebrousser chemin pour la protéger. Elle choisit de continuer. Au sommet, elle ouvre son chapeau et laisse partir sa flamme vers le ciel. Une première étoile se rallume, puis tout le ciel, par vagues. Lueur reste presque éteinte un instant, puis la lumière des étoiles revient sur elle et sa flamme renaît, plus vive qu'avant.

## 1.3 Univers

- **Lieu** : une seule île flottante de 22 m de diamètre, avec une cabane, un chemin pavé, une colline de 5,5 m, des sapins et des rochers. D'autres rochers dérivent autour.
- **Époque** : hors du temps. Il fait toujours nuit.
- **Règles du monde** : la lumière est vivante et se transmet. Une étoile éteinte reste visible, comme une braise grise. Une flamme donnée ne disparaît pas : elle revient.
- **Ce qui le rend unique** : tant que le ciel est mort, la seule source de lumière du film est le personnage lui-même. Le décor n'existe que là où Lueur passe.

## 1.4 Personnage

**Lueur** (personnage unique, original)

- **Rôle** : protagoniste, gardienne de la dernière flamme.
- **Personnalité** : petite, têtue, généreuse. Elle hésite mais ne recule pas.
- **Arc** : elle protège sa flamme (scène 1), elle la risque (scène 2), elle la donne (scène 3), elle la retrouve agrandie (scène 4).
- **Apparence 3D** : lanterne de 1,4 m de haut. Corps en cylindre de papier ivoire légèrement conique, éclairé de l'intérieur en ambre. Socle et chapeau conique en métal indigo sombre, surmonté d'un anneau. Deux yeux noirs ovales sur le papier. Deux petits pieds ronds en métal. Pas de bras ni de bouche : elle s'exprime par l'inclinaison, les sauts et la force de sa flamme.
- **Signe distinctif** : son chapeau se soulève quand elle offre sa flamme.
- **Voix** : aucune. Lueur ne parle pas.

**Narratrice** (voix off) : voix douce, posée, proche du conte. Voir partie 5.4.

## 1.5 Structure

| Beat | Temps | Images | Contenu |
|---|---|---|---|
| Accroche | 0 – 12 s | 0 – 359 | Le ciel est éteint, une seule flamme subsiste |
| Développement | 12 – 30 s | 360 – 899 | L'ascension, le vent, la flamme faiblit |
| Climax | 30 – 45 s | 900 – 1349 | Le don : l'étincelle monte, la première étoile s'allume |
| Dénouement | 45 – 56 s | 1350 – 1679 | Le ciel se rallume, la flamme de Lueur revient |
| Final | 56 – 60 s | 1680 – 1799 | Carton de fin : titre et slogan |

## 1.6 Scénario scène par scène

### Scène 1 — Le ciel éteint (0 – 12 s, 12 s)

- **Lieu, moment** : l'île vue de loin, puis devant la cabane. Nuit sans étoiles.
- **Action** : l'île apparaît dans le noir. On ne distingue qu'un point de lumière ambre près de la cabane. On s'approche : c'est Lueur, immobile. À 6,8 s, elle penche la tête en arrière et regarde le ciel vide.
- **Voix off** :
  - (1,0 – 4,5 s) « Une nuit, les étoiles se sont éteintes. »
  - (7,0 – 11,0 s) « Il ne restait qu'une petite flamme : celle de Lueur. »
- **Son** : vent très léger, nappe grave tenue, un tintement de métal quand elle lève la tête.
- **Intention** : solitude, calme, curiosité.

### Scène 2 — L'ascension (12 – 30 s, 18 s)

- **Lieu, moment** : le chemin pavé, puis le flanc de la colline. Nuit.
- **Action** : Lueur sautille le long du chemin (12 – 20 s). Sa lumière révèle les pavés, l'herbe et les arbres à mesure qu'elle avance. Dans la pente (20 – 26 s), le vent la fait tanguer et sa flamme baisse. Près du sommet (26 – 30 s), ses sauts raccourcissent et sa flamme manque de s'éteindre à 29 s, puis se stabilise.
- **Voix off** : (21,0 – 25,0 s) « Elle aurait pu la garder pour elle. »
- **Son** : petits tintements à chaque saut, rafales de vent à partir de 20 s, grésillement de flamme de 26 à 29 s, la musique se retire.
- **Intention** : effort, fragilité, doute.

### Scène 3 — Le don (30 – 45 s, 15 s)

- **Lieu, moment** : le sommet. Nuit.
- **Action** : Lueur regarde le ciel (30 – 32 s). Elle se tasse (32 – 34 s), puis s'étire d'un coup en soulevant son chapeau (34,7 – 36 s). Une étincelle ambre en sort à 36 s et monte en spirale, de plus en plus vite. Lueur reste presque éteinte. À 41 s, l'étincelle atteint le ciel : flash blanc, une étoile s'allume.
- **Voix off** : (31,0 – 35,5 s) « Mais une lumière qu'on garde ne réchauffe personne. »
- **Son** : grincement de métal (32 s), clic du chapeau (35 s), souffle de départ (36 s), montée scintillante (36 – 41 s), carillon grave et large à 41 s.
- **Intention** : courage, puis émerveillement.

### Scène 4 — Le ciel rallumé (45 – 60 s, 15 s)

- **Lieu, moment** : l'île vue de loin, le sommet, puis l'île entière. Nuit étoilée.
- **Action** : les étoiles se rallument par vagues à partir de la première (45 – 52 s). L'île reprend ses couleurs, des lucioles s'éveillent, la fenêtre de la cabane s'éclaire. Au sommet (52 – 56 s), la flamme de Lueur revient, plus forte. Elle regarde vers nous et fait deux petits sauts de joie. Plan très large (56 – 60 s) : le titre puis le slogan apparaissent, fondu au noir.
- **Voix off** :
  - (46,0 – 50,0 s) « Alors le ciel s'est souvenu d'elle. »
  - (56,5 – 59,5 s) « Partager sa lumière ne l'éteint pas. »
- **Son** : carillons en cascade, la musique s'ouvre, souffle doux de flamme à 53 s, deux tintements joyeux (55,2 s et 56,0 s), accord final tenu.
- **Intention** : joie, chaleur, apaisement.

## 1.7 Message final et dernier plan

Plan très large de l'île sous le ciel rallumé. Le titre « L U E U R » apparaît en ivoire sous l'île (56,5 – 57,8 s), suivi du slogan en italique « Partager sa lumière ne l'éteint pas. » (57,4 – 58,7 s). Fondu au noir de 59,0 à 60,0 s. Aucun logo.

---

# 2. Mise en scène et storyboard

Focales données pour une pellicule de 35 mm de large (réglage par défaut de Three.js) : 24 mm ≈ 45° de champ vertical en 16:9, 35 mm ≈ 31°, 50 mm ≈ 22°, 85 mm ≈ 13°. La profondeur de champ n'est pas calculée (trop coûteuse) : la profondeur est suggérée par le brouillard, le bloom et les arbres en amorce.

| Plan | Scène | Temps (images) | Type | Caméra, focale, easing | Composition | Action | Éclairage | Transition de sortie |
|---|---|---|---|---|---|---|---|---|
| P1 | 1 | 0 – 6 s (0 – 179) | Plan large | Dolly avant lent, 24 mm, ease-in-out sinus | Île au centre, point de lumière au tiers gauche, beaucoup de vide autour | L'île dérive, Lueur immobile près de la cabane | Flamme seule, remplissage bleu très faible. Ouverture au noir sur 1 s | Coupe |
| P2 | 1 | 6 – 12 s (180 – 359) | Plan moyen | Orbite de 26° autour de Lueur, 35 mm, ease-in-out sinus | Lueur au tiers droit, cabane et sapins en arrière-plan | Elle respire, puis lève les yeux à 6,8 s | Flamme en lumière clé, chaude, à courte portée | Coupe |
| P3 | 2 | 12 – 20 s (360 – 599) | Plan d'ensemble de profil | Travelling latéral d'accompagnement, 35 mm, linéaire | Lueur au tiers gauche, de l'air devant elle, chemin en diagonale | Sautille sur les pavés, squash & stretch | La flamme révèle le sol au passage | Coupe |
| P4 | 2 | 20 – 26 s (600 – 779) | Contre-plongée, de dos | Panoramique d'accompagnement avec léger dolly, 28 mm, ease-out | Lueur sur la ligne de crête, sapins en amorce de chaque côté | Monte la pente, tangue dans le vent | Flamme en baisse (100 % → 60 %) | Coupe |
| P5 | 2 | 26 – 30 s (780 – 899) | Gros plan de face | Dolly avant lent, 85 mm, ease-in-out sinus | Lueur centrée, fond noir | Sauts courts et lourds, la flamme tombe à 22 % puis se stabilise | Flamme presque seule | Fondu au noir (0,4 s) et réouverture (0,4 s) |
| P6 | 3 | 30 – 36 s (900 – 1079) | Plan moyen | Orbite légère au sommet, 35 mm, ease-in-out sinus | Lueur au centre bas, de l'espace au-dessus pour l'étincelle | Regarde le ciel, se tasse, s'étire, soulève son chapeau | La flamme grandit jusqu'à 150 % | Raccord dans le mouvement (départ de l'étincelle) |
| P7 | 3 | 36 – 41 s (1080 – 1229) | Plan de suivi | Panoramique vertical vers le ciel, 50 mm, linéaire avec retard de 5 images | Étincelle près du centre, traînée en diagonale | L'étincelle monte en spirale et accélère | Étincelle en lumière clé, Lueur à 10 % | Flash blanc (0,3 s de montée, 1 s de retombée) |
| P8 | 3 | 41 – 45 s (1230 – 1349) | Plan large en contre-plongée | Léger dolly arrière, 24 mm, ease-out | Lueur en silhouette en bas, étoile en haut : axe vertical | La première étoile éclate puis se stabilise | Étoile en contre-jour, premiers rayons sur l'île | Coupe |
| P9 | 4 | 45 – 52 s (1350 – 1559) | Plan large | Dolly arrière, 24 mm, ease-in-out sinus | Île au tiers inférieur, ciel sur les deux tiers | Les étoiles s'allument par vagues, lucioles, fenêtre de la cabane | Lumière clé ivoire venue de l'étoile, ombres portées, remplissage qui monte | Coupe |
| P10 | 4 | 52 – 56 s (1560 – 1679) | Gros plan | Dolly avant, 85 mm, ease-in-out sinus | Lueur centrée, lucioles floues autour | Sa flamme revient, elle nous regarde, deux sauts de joie | Clé ivoire + flamme à 150 % | Coupe |
| P11 | 4 | 56 – 60 s (1680 – 1799) | Plan très large | Dolly arrière lent, 24 mm, ease-in-out sinus | Île au centre haut, titre et slogan au tiers inférieur | Titre puis slogan | Ciel rallumé | Fondu au noir (59 – 60 s) |

Total : 11 plans, 1800 images, 60,0 s.

---

# 3. Direction artistique 3D

## 3.1 Style

**Diorama low poly à facettes, éclairé en PBR simple.** Trois raisons :

1. Tout se construit avec des formes primitives, sans modeleur 3D ni téléchargement.
2. Les facettes accrochent bien une lumière ponctuelle unique, ce qui sert l'histoire.
3. La scène entière pèse environ 15 000 triangles et une trentaine d'appels de dessin, donc elle tourne sur un ordinateur modeste.

Ce qui est écarté parce que trop lourd ou trop long dans un navigateur : personnages articulés, cheveux, tissus, profondeur de champ calculée, illumination globale.

## 3.2 Palette

| Rôle | Couleur | Usage |
|---|---|---|
| Dominante | `#0B1026` bleu nuit | Ciel, brouillard |
| Accent | `#FFB347` ambre | Flamme, étincelle, lucioles, fenêtre |
| Ombre | `#1B1F4B` indigo | Roche, métal, ciel rallumé à l'horizon |
| Lumière | `#FFF4D6` ivoire | Étoiles, papier de la lanterne, titre |
| Neutre | `#4F7C82` sarcelle grisée | Herbe, feuillage, étoiles éteintes |

Toutes les autres teintes (tronc, pavé, roche) sont des mélanges de ces cinq couleurs, calculés dans `assets.js` (`TEINTES`).

## 3.3 Matériaux

| Élément | Type | Roughness | Metalness | Remarque |
|---|---|---|---|---|
| Herbe | Standard, facettes, couleurs par sommet | 0,95 | 0 | Dégradé selon l'altitude |
| Roche | Standard, facettes | 0,85 | 0,05 | S'assombrit vers le bas |
| Pavés, murs | Standard, facettes | 0,8 – 0,9 | 0 | |
| Tronc, toit | Standard, facettes | 0,8 – 0,9 | 0 | |
| Feuillage | Standard, facettes | 0,85 | 0 | |
| Métal de Lueur | Standard, facettes | 0,45 | 0,7 | Socle, chapeau, pieds |
| Papier de Lueur | Standard, émissif ambre | 0,9 | 0 | Émission = 0,05 + 0,7 × flamme |
| Étincelle, lucioles | Basic, couleur > 1 | — | — | Dépassent le seuil du bloom |

Textures : aucune image téléchargée. Deux textures sont générées par code sur un canvas 2D : le halo de la première étoile et le texte du carton de fin.

## 3.4 Lumière

- **Clé, scènes 1 à 3** : la flamme de Lueur (lumière ponctuelle ambre, portée 12 m, intensité 7 × flamme).
- **Clé, scène 4** : lumière directionnelle ivoire venant de la première étoile, de 0 à 2,4, avec ombres portées (carte de 1024 px).
- **Remplissage** : lumière d'hémisphère sarcelle/bleu nuit, de 0,5 à 1,1.
- **Contre-jour** : directionnelle sarcelle placée à l'opposé de l'étoile, de 0,45 à 0,7.
- **HDRI** : aucun. Le ciel est un dégradé calculé par shader, ce qui évite un téléchargement de plusieurs Mo. Si vous voulez des reflets plus riches, un HDRI de nuit CC0 de Poly Haven en 1K peut être ajouté avec `RGBELoader`, mais le film n'en a pas besoin.
- **Brouillard** : exponentiel, densité 0,016 la nuit, 0,009 une fois le ciel rallumé.
- **Post-traitement** : bloom (`UnrealBloomPass`, force 0,5, rayon 0,6, seuil 0,9), puis une passe maison (ombres bleutées, hautes lumières chaudes, vignettage 0,55, grain 0,035, fondu, flash), puis tone mapping ACES et conversion sRGB (`OutputPass`). Pas de LUT : l'étalonnage tient en trois lignes de shader.

## 3.5 Environnements

- **Échelle** : 1 unité = 1 m. Île de 11 m de rayon, colline de 5,5 m, sapins de 2 à 3,5 m, cabane de 2 m, Lueur 1,4 m.
- **Construit par code** : tout. Le relief vient d'une seule fonction `hauteurTerrain(x, z)` qui sert aussi à poser les objets et le personnage.
- **Téléchargé** : rien.

## 3.6 Animation

- **Style** : fluide, 30 poses par seconde. J'ai écarté l'animation saccadée à 12 images/s : avec un travelling fluide, elle ferait trembler le personnage à l'écran.
- **Anticipation** : Lueur se tasse pendant 2 s (32 – 34 s) avant de s'étirer pour libérer sa flamme.
- **Squash & stretch** : écrasement à l'atterrissage, étirement en l'air, à volume constant (largeur = 1/√hauteur).
- **Timing** : sauts vifs sur le plat, courts et lourds près du sommet (amplitude × 0,25).
- **Arcs** : l'étincelle monte en spirale amortie, pas en ligne droite.
- **Action secondaire** : roulis dans le vent, respiration à l'arrêt, chapeau qui se referme après le don.

---

# 4. Pipeline 100 % en ligne (Voie A)

## 4.1 Principe

Three.js 0.169 et Vite, dans StackBlitz. Le film est une fonction pure du numéro d'image : `appliquerImage(image, monde)` recalcule tout l'état à partir de l'image demandée, sans horloge et sans `Math.random()`. L'aperçu utilise l'horloge uniquement pour choisir quelle image afficher.

**Vérifié de mon côté** dans Chromium sans écran : le projet se compile, les 11 plans s'affichent, une même image rendue deux fois donne exactement les mêmes pixels, et une capture d'essai de 60 images produit un MP4 H.264 en 1920 × 1080 à 30 images/s. **Non vérifié** : la capture complète des 1800 images, l'ouverture dans StackBlitz et le rendu sur votre carte graphique.

## 4.2 Assets

| Asset | Source | Licence | Usage |
|---|---|---|---|
| Île, arbres, rochers, cabane, Lueur, étoiles, lucioles | Code du projet | La vôtre | Tout le visuel |
| Three.js 0.169 | npm | MIT | Moteur 3D |
| mp4-muxer 5.2.1 | npm | MIT | Écriture du MP4 |
| fflate 0.8.2 | npm | MIT | Archives ZIP (secours PNG) |
| Vite 5.4 | npm | MIT | Serveur de développement |
| Police du carton | Georgia (police système) ou toute police serif installée | Usage dans une vidéo autorisé | Titre et slogan |

Poly Haven, ambientCG, Quaternius et Mixamo ne sont pas utilisés : le film n'a besoin d'aucun modèle, texture ou animation téléchargé.

## 4.3 Code complet

Arborescence :

```
lueur-3d/
├── package.json
├── index.html
└── src/
    ├── config.js     constantes, palette, hasard à graine, easings
    ├── assets.js     tous les objets, construits par code
    ├── lights.js     éclairage
    ├── cameras.js    les 11 plans du storyboard (P1 à P11)
    ├── timeline.js   état du film pour une image donnée
    ├── scene.js      assemblage, post-traitement, rendu d'une image
    ├── capture.js    export MP4 et secours PNG
    └── main.js       interface d'aperçu et boutons de capture
```

Correspondance storyboard → code : chaque ligne du tableau de la partie 2 est une entrée du tableau `PLANS` de `cameras.js`, avec le même identifiant (P1 à P11), les mêmes images de début et de fin, la même focale et le même easing.

### package.json

```json
{
  "name": "lueur-3d",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "fflate": "0.8.2",
    "mp4-muxer": "5.2.1",
    "three": "0.169.0"
  },
  "devDependencies": {
    "vite": "5.4.11"
  }
}
```

### index.html

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Lueur — film 3D piloté par le numéro d'image</title>
    <style>
      html, body { margin: 0; height: 100%; background: #05070f; color: #fff4d6; font-family: system-ui, sans-serif; }
      #cadre { display: flex; flex-direction: column; height: 100%; }
      #zone { flex: 1; min-height: 0; display: flex; align-items: center; justify-content: center; }
      /* Le canvas garde sa résolution interne ; le CSS ne fait que l'ajuster à la fenêtre. */
      #rendu { max-width: 100%; max-height: 100%; aspect-ratio: 16 / 9; background: #000; }
      #barre { display: flex; gap: 10px; align-items: center; padding: 8px 12px; background: #0b1026; flex-wrap: wrap; }
      #barre button { background: #1b1f4b; color: #fff4d6; border: 1px solid #4f7c82; border-radius: 6px; padding: 6px 10px; cursor: pointer; }
      #barre button:disabled { opacity: 0.4; cursor: default; }
      #curseur { flex: 1; min-width: 160px; accent-color: #ffb347; }
      #info { font-variant-numeric: tabular-nums; font-size: 13px; min-width: 330px; }
    </style>
  </head>
  <body>
    <div id="cadre">
      <div id="zone"><canvas id="rendu"></canvas></div>
      <div id="barre">
        <button id="lecture">▶ Lecture</button>
        <input id="curseur" type="range" min="0" max="1799" value="0" step="1" />
        <span id="info"></span>
        <button id="mp4">⬤ Capturer en MP4</button>
        <button id="png">Capturer en PNG (secours)</button>
      </div>
    </div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

### src/config.js

```js
// config.js — constantes du film, palette, hasard reproductible et courbes d'easing.

export const FPS = 30; // images par seconde
export const DUREE_S = 60; // durée cible en secondes
export const TOTAL_IMAGES = FPS * DUREE_S; // 1800 images, numérotées de 0 à 1799
export const LARGEUR = 1920;
export const HAUTEUR = 1080;
export const DEBIT_VIDEO = 12_000_000; // 12 Mbit/s pour l'export MP4
export const OMBRES = true; // passer à false sur un ordinateur modeste

// Palette : 5 couleurs, chacune avec un rôle. Toutes les autres teintes du film
// sont des mélanges de ces cinq-là (voir assets.js).
export const PALETTE = {
  dominante: '#0B1026', // bleu nuit : ciel, brouillard
  accent: '#FFB347', // ambre : flamme de Lueur, étincelle, lucioles
  ombre: '#1B1F4B', // indigo : roche, zones non éclairées
  lumiere: '#FFF4D6', // ivoire : étoiles, papier de la lanterne, titre
  neutre: '#4F7C82', // sarcelle grisée : herbe, feuillage
};

// Générateur pseudo-aléatoire à graine (mulberry32). On n'utilise jamais
// Math.random() : le film doit être identique à chaque exécution.
export function creerAlea(graine) {
  let a = graine >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const borner = (x, min = 0, max = 1) => Math.min(max, Math.max(min, x));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => {
  const t = borner((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

// Courbes d'easing citées dans le storyboard.
export const EASINGS = {
  lineaire: (t) => t,
  entree: (t) => t * t * t, // ease-in cubique
  sortie: (t) => 1 - Math.pow(1 - t, 3), // ease-out cubique
  entreeSortie: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  sinus: (t) => -(Math.cos(Math.PI * t) - 1) / 2, // ease-in-out sinusoïdal
};

// Interpolation entre images clés : cles(f, [[image, valeur], ...]).
// Entre deux clés, la valeur suit l'easing demandé (sinus par défaut).
export function cles(image, liste, easing = EASINGS.sinus) {
  if (image <= liste[0][0]) return liste[0][1];
  for (let i = 1; i < liste.length; i++) {
    const [f1, v1] = liste[i];
    if (image <= f1) {
      const [f0, v0] = liste[i - 1];
      return lerp(v0, v1, easing((image - f0) / (f1 - f0)));
    }
  }
  return liste[liste.length - 1][1];
}

// Petit bruit lisse et déterministe (somme de sinus) pour le vacillement de la flamme.
export function vacillement(image, graine = 0) {
  return (
    Math.sin(image * 0.37 + graine) * 0.5 +
    Math.sin(image * 0.83 + graine * 2.1) * 0.3 +
    Math.sin(image * 1.91 + graine * 3.7) * 0.2
  );
}
```

### src/assets.js

```js
// assets.js — tous les éléments du film, construits par code à partir de formes simples.
// Aucun fichier externe n'est chargé : pas de modèle, pas de texture, pas de HDRI.

import * as THREE from 'three';
import { PALETTE, creerAlea, smoothstep } from './config.js';

const couleur = (hex) => new THREE.Color(hex);

// Teintes dérivées : uniquement des mélanges des 5 couleurs de la palette.
export const TEINTES = {
  herbe: couleur(PALETTE.neutre).lerp(couleur(PALETTE.ombre), 0.2),
  herbeHaute: couleur(PALETTE.neutre).lerp(couleur(PALETTE.lumiere), 0.25),
  roche: couleur(PALETTE.ombre).lerp(couleur(PALETTE.neutre), 0.3),
  tronc: couleur(PALETTE.ombre).lerp(couleur(PALETTE.accent), 0.25),
  feuillage: couleur(PALETTE.neutre).lerp(couleur(PALETTE.dominante), 0.15),
  metal: couleur(PALETTE.ombre).lerp(couleur(PALETTE.dominante), 0.4),
  pave: couleur(PALETTE.neutre).lerp(couleur(PALETTE.lumiere), 0.45),
};

// ---------------------------------------------------------------------------
// Terrain : une fonction de hauteur unique sert à modeler l'île ET à poser
// les objets et le personnage dessus.
// ---------------------------------------------------------------------------
export const RAYON_ILE = 11;
export const SOMMET_XZ = { x: 3, z: -2 };

export function hauteurTerrain(x, z) {
  const r = Math.hypot(x, z);
  const bord = 1 - smoothstep(0.75, 1.0, r / RAYON_ILE); // retombe à 0 au bord de l'île
  const bosses =
    0.25 * Math.sin(x * 0.9 + 1.3) * Math.cos(z * 0.8 - 0.4) +
    0.12 * Math.sin(x * 2.1) * Math.sin(z * 1.7);
  const dx = x - SOMMET_XZ.x;
  const dz = z - SOMMET_XZ.z;
  const colline = 5 * Math.exp(-(dx * dx + dz * dz) / (2 * 3 * 3));
  return (0.4 + bosses + colline) * bord;
}

export const SOMMET = new THREE.Vector3(
  SOMMET_XZ.x,
  hauteurTerrain(SOMMET_XZ.x, SOMMET_XZ.z),
  SOMMET_XZ.z,
);

// Chemin de Lueur, de la cabane au sommet.
const courbeChemin = new THREE.CatmullRomCurve3(
  [
    [-5.8, 3.6],
    [-3.8, 4.6],
    [-1.2, 3.4],
    [0.4, 1.4],
    [1.6, -0.4],
    [SOMMET_XZ.x, SOMMET_XZ.z],
  ].map(([x, z]) => new THREE.Vector3(x, 0, z)),
);

// Position sur le chemin pour u entre 0 (cabane) et 1 (sommet), posée sur le terrain.
export function positionChemin(u, cible = new THREE.Vector3()) {
  courbeChemin.getPointAt(Math.min(1, Math.max(0, u)), cible);
  cible.y = hauteurTerrain(cible.x, cible.z);
  return cible;
}

// Grille en anneaux : sert au dessus de l'île (herbe) et à son dessous (roche).
function grillePolaire({ anneaux, secteurs, rayon, hauteur, teinte, alea }) {
  const positions = [];
  const couleurs = [];
  const indices = [];
  const ajouter = (x, z) => {
    const y = hauteur(x, z);
    positions.push(x, y, z);
    const c = teinte(x, y, z);
    couleurs.push(c.r, c.g, c.b);
  };
  ajouter(0, 0);
  for (let i = 1; i <= anneaux; i++) {
    for (let j = 0; j < secteurs; j++) {
      let angle = (j / secteurs) * Math.PI * 2;
      let r = (rayon * i) / anneaux;
      if (i < anneaux) {
        // Léger désordre pour casser la régularité (sauf sur le bord, qui doit se raccorder).
        angle += (alea() - 0.5) * 0.6 * ((Math.PI * 2) / secteurs);
        r += (alea() - 0.5) * 0.5 * (rayon / anneaux);
      }
      ajouter(r * Math.cos(angle), r * Math.sin(angle));
    }
  }
  const id = (i, j) => 1 + (i - 1) * secteurs + (j % secteurs);
  for (let j = 0; j < secteurs; j++) indices.push(0, id(1, j + 1), id(1, j));
  for (let i = 1; i < anneaux; i++) {
    for (let j = 0; j < secteurs; j++) {
      const a = id(i, j);
      const b = id(i, j + 1);
      const c = id(i + 1, j);
      const d = id(i + 1, j + 1);
      indices.push(a, b, c, b, d, c);
    }
  }
  const geometrie = new THREE.BufferGeometry();
  geometrie.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometrie.setAttribute('color', new THREE.Float32BufferAttribute(couleurs, 3));
  geometrie.setIndex(indices);
  geometrie.computeVertexNormals();
  return geometrie;
}

// Place une instance d'un InstancedMesh.
const pantin = new THREE.Object3D();
function poser(maillage, i, x, y, z, ex, ey, ez, rotY = 0, rotX = 0) {
  pantin.position.set(x, y, z);
  pantin.rotation.set(rotX, rotY, 0);
  pantin.scale.set(ex, ey, ez);
  pantin.updateMatrix();
  maillage.setMatrixAt(i, pantin.matrix);
}

// ---------------------------------------------------------------------------
// L'île flottante : dessus herbeux, dessous rocheux, arbres, rochers, pavés, cabane.
// ---------------------------------------------------------------------------
export function creerIle() {
  const groupe = new THREE.Group();
  const alea = creerAlea(2024);

  const dessus = new THREE.Mesh(
    grillePolaire({
      anneaux: 18,
      secteurs: 48,
      rayon: RAYON_ILE,
      hauteur: hauteurTerrain,
      teinte: (x, y) => TEINTES.herbe.clone().lerp(TEINTES.herbeHaute, Math.min(1, y / 5.5)),
      alea,
    }),
    new THREE.MeshStandardMaterial({
      vertexColors: true,
      flatShading: true,
      roughness: 0.95,
      metalness: 0,
      side: THREE.DoubleSide,
    }),
  );
  dessus.receiveShadow = true;
  groupe.add(dessus);

  const dessous = new THREE.Mesh(
    grillePolaire({
      anneaux: 8,
      secteurs: 48,
      rayon: RAYON_ILE,
      hauteur: (x, z) => {
        const k = 1 - Math.min(1, Math.hypot(x, z) / RAYON_ILE);
        return -9 * Math.pow(k, 0.75) - k * 1.4 * Math.abs(Math.sin(x * 1.3) * Math.cos(z * 1.1));
      },
      teinte: (x, y) => TEINTES.roche.clone().lerp(couleur(PALETTE.dominante), Math.min(1, -y / 10)),
      alea,
    }),
    new THREE.MeshStandardMaterial({
      vertexColors: true,
      flatShading: true,
      roughness: 0.85,
      metalness: 0.05,
      side: THREE.DoubleSide,
    }),
  );
  groupe.add(dessous);

  // Pavés clairs le long du chemin (un seul InstancedMesh = un seul appel de dessin).
  const NB_PAVES = 26;
  const paves = new THREE.InstancedMesh(
    new THREE.CylinderGeometry(0.22, 0.26, 0.08, 6),
    new THREE.MeshStandardMaterial({ color: TEINTES.pave, flatShading: true, roughness: 0.8, metalness: 0 }),
    NB_PAVES,
  );
  const p = new THREE.Vector3();
  for (let i = 0; i < NB_PAVES; i++) {
    positionChemin((i + 0.5) / NB_PAVES, p);
    const decalage = (alea() - 0.5) * 0.5;
    const x = p.x + decalage;
    const z = p.z + decalage * 0.6;
    const e = 0.8 + alea() * 0.5;
    poser(paves, i, x, hauteurTerrain(x, z) + 0.02, z, e, 1, e, alea() * 6.28);
  }
  paves.receiveShadow = true;
  groupe.add(paves);

  // Un point est « libre » s'il est loin du chemin, de la cabane et du sommet.
  const pointsChemin = Array.from({ length: 40 }, (_, i) => positionChemin(i / 39).clone());
  const libre = (x, z, marge) =>
    pointsChemin.every((q) => Math.hypot(q.x - x, q.z - z) > marge) &&
    Math.hypot(x + 7, z - 3) > 1.8 &&
    Math.hypot(x - SOMMET_XZ.x, z - SOMMET_XZ.z) > 2.2;
  const tirerPoint = (marge, rayonMax) => {
    for (let essai = 0; essai < 200; essai++) {
      const a = alea() * Math.PI * 2;
      const r = Math.sqrt(alea()) * rayonMax;
      const x = r * Math.cos(a);
      const z = r * Math.sin(a);
      if (libre(x, z, marge)) return [x, z];
    }
    return [0, -6];
  };

  // Arbres low poly : troncs + deux étages de cônes.
  const NB_ARBRES = 16;
  const troncs = new THREE.InstancedMesh(
    new THREE.CylinderGeometry(0.1, 0.16, 1, 5),
    new THREE.MeshStandardMaterial({ color: TEINTES.tronc, flatShading: true, roughness: 0.9, metalness: 0 }),
    NB_ARBRES,
  );
  const feuillages = new THREE.InstancedMesh(
    new THREE.ConeGeometry(0.75, 1.3, 6),
    new THREE.MeshStandardMaterial({ color: TEINTES.feuillage, flatShading: true, roughness: 0.85, metalness: 0 }),
    NB_ARBRES * 2,
  );
  for (let i = 0; i < NB_ARBRES; i++) {
    const [x, z] = tirerPoint(1.3, 8.6);
    const y = hauteurTerrain(x, z);
    const e = 0.8 + alea() * 0.7;
    const rot = alea() * 6.28;
    poser(troncs, i, x, y + 0.5 * e, z, e, e, e, rot);
    poser(feuillages, i * 2, x, y + 1.45 * e, z, e, e, e, rot);
    poser(feuillages, i * 2 + 1, x, y + 2.15 * e, z, e * 0.68, e * 0.8, e * 0.68, rot + 0.5);
  }
  troncs.castShadow = feuillages.castShadow = true;
  groupe.add(troncs, feuillages);

  // Rochers posés sur l'herbe.
  const NB_ROCHERS = 22;
  const rochers = new THREE.InstancedMesh(
    new THREE.IcosahedronGeometry(0.4, 0),
    new THREE.MeshStandardMaterial({ color: TEINTES.roche, flatShading: true, roughness: 0.8, metalness: 0.05 }),
    NB_ROCHERS,
  );
  for (let i = 0; i < NB_ROCHERS; i++) {
    const [x, z] = tirerPoint(0.9, 9.6);
    const e = 0.5 + alea() * 1.1;
    poser(rochers, i, x, hauteurTerrain(x, z) + 0.1 * e, z, e, e * 0.7, e, alea() * 6.28, alea());
  }
  rochers.castShadow = rochers.receiveShadow = true;
  groupe.add(rochers);

  // La cabane de Lueur : un cube, un toit pyramidal, une fenêtre qui s'éclaire à la fin.
  const cabane = new THREE.Group();
  const murs = new THREE.Mesh(
    new THREE.BoxGeometry(1.4, 1.1, 1.4),
    new THREE.MeshStandardMaterial({ color: TEINTES.pave, flatShading: true, roughness: 0.9, metalness: 0 }),
  );
  murs.position.y = 0.55;
  const toit = new THREE.Mesh(
    new THREE.ConeGeometry(1.25, 0.9, 4),
    new THREE.MeshStandardMaterial({ color: TEINTES.tronc, flatShading: true, roughness: 0.8, metalness: 0 }),
  );
  toit.position.y = 1.55;
  toit.rotation.y = Math.PI / 4;
  const materiauFenetre = new THREE.MeshStandardMaterial({
    color: PALETTE.ombre,
    emissive: PALETTE.accent,
    emissiveIntensity: 0,
    roughness: 0.4,
    metalness: 0,
  });
  const fenetre = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.05), materiauFenetre);
  fenetre.position.set(0.25, 0.65, 0.71);
  const porte = new THREE.Mesh(
    new THREE.BoxGeometry(0.36, 0.7, 0.05),
    new THREE.MeshStandardMaterial({ color: TEINTES.tronc, roughness: 0.9, metalness: 0 }),
  );
  porte.position.set(-0.3, 0.35, 0.71);
  cabane.add(murs, toit, fenetre, porte);
  cabane.position.set(-7, hauteurTerrain(-7, 3) - 0.05, 3);
  cabane.rotation.y = 0.5;
  murs.castShadow = toit.castShadow = true;
  groupe.add(cabane);

  return { groupe, materiauFenetre };
}

// Rochers flottants autour de l'île (profondeur et échelle du monde).
export function creerRochersFlottants() {
  const alea = creerAlea(77);
  const NB = 30;
  const maillage = new THREE.InstancedMesh(
    new THREE.IcosahedronGeometry(1, 0),
    new THREE.MeshStandardMaterial({ color: TEINTES.roche, flatShading: true, roughness: 0.85, metalness: 0.05 }),
    NB,
  );
  for (let i = 0; i < NB; i++) {
    const a = alea() * Math.PI * 2;
    const r = 15 + alea() * 18;
    const e = 0.3 + alea() * 1.2;
    poser(maillage, i, r * Math.cos(a), -8 + alea() * 13, r * Math.sin(a), e, e * (0.6 + alea() * 0.8), e, alea() * 6.28, alea() * 2);
  }
  return maillage;
}

// ---------------------------------------------------------------------------
// Lueur : une petite lanterne de papier sur pattes. Origine du groupe = ses pieds.
// ---------------------------------------------------------------------------
export function creerLueur() {
  const groupe = new THREE.Group(); // position + orientation dans le monde
  groupe.rotation.order = 'YXZ'; // cap d'abord, inclinaison ensuite
  const corps = new THREE.Group(); // reçoit le squash & stretch
  groupe.add(corps);

  const materiauMetal = new THREE.MeshStandardMaterial({
    color: TEINTES.metal,
    flatShading: true,
    roughness: 0.45,
    metalness: 0.7,
  });
  const materiauPapier = new THREE.MeshStandardMaterial({
    color: PALETTE.lumiere,
    emissive: PALETTE.accent,
    emissiveIntensity: 1,
    flatShading: true,
    roughness: 0.9,
    metalness: 0,
  });
  const noir = new THREE.MeshBasicMaterial({ color: '#05060c' });

  for (const cote of [-1, 1]) {
    const pied = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), materiauMetal);
    pied.scale.set(1, 0.6, 1.4);
    pied.position.set(cote * 0.13, 0.05, 0.03);
    pied.castShadow = true;
    corps.add(pied);
  }
  const socle = new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.31, 0.09, 8), materiauMetal);
  socle.position.y = 0.2;
  const papier = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.29, 0.56, 8), materiauPapier);
  papier.position.y = 0.52;
  papier.castShadow = socle.castShadow = true;
  corps.add(socle, papier);

  for (const cote of [-1, 1]) {
    const oeil = new THREE.Mesh(new THREE.SphereGeometry(0.038, 8, 6), noir);
    oeil.scale.set(1, 1.5, 0.5);
    oeil.position.set(cote * 0.09, 0.58, 0.262);
    corps.add(oeil);
  }

  // Le chapeau pivote et se soulève quand Lueur offre sa flamme.
  const chapeau = new THREE.Group();
  chapeau.position.y = 0.8;
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.24, 8), materiauMetal);
  cone.position.y = 0.12;
  cone.castShadow = true;
  const anneau = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.018, 6, 12), materiauMetal);
  anneau.position.y = 0.3;
  chapeau.add(cone, anneau);
  corps.add(chapeau);

  // La flamme : une lumière ponctuelle au cœur de la lanterne (sans ombre : moins coûteux).
  const lumiere = new THREE.PointLight(PALETTE.accent, 1, 12, 2);
  lumiere.position.y = 0.55;
  corps.add(lumiere);

  groupe.scale.setScalar(1.3);
  return { groupe, corps, chapeau, materiauPapier, lumiere };
}

// ---------------------------------------------------------------------------
// Ciel : dégradé, champ d'étoiles (un seul objet Points), première étoile.
// ---------------------------------------------------------------------------
export function creerCiel() {
  const materiau = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      uBas: { value: couleur(PALETTE.dominante) },
      uHaut: { value: couleur('#000000') },
      uEveil: { value: 0 },
      uTeinteEveil: { value: couleur(PALETTE.ombre) },
    },
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uBas; uniform vec3 uHaut; uniform vec3 uTeinteEveil; uniform float uEveil;
      varying vec3 vDir;
      void main() {
        float h = smoothstep(-0.35, 0.75, vDir.y);
        vec3 nuit = mix(uBas * 0.55, uHaut, h);
        vec3 eveil = mix(uTeinteEveil * 1.5, uBas * 0.6, h);
        gl_FragColor = vec4(mix(nuit, eveil, uEveil), 1.0);
      }`,
  });
  return new THREE.Mesh(new THREE.SphereGeometry(200, 32, 16), materiau);
}

// Position de la première étoile, celle que Lueur rallume.
export const PREMIERE_ETOILE = new THREE.Vector3(6, 34, -30);
export const IMAGE_PREMIERE_ETOILE = 1230; // image où elle s'allume
export const IMAGE_VAGUE = 1350; // image où le reste du ciel commence à se rallumer
export const DUREE_VAGUE = 190; // la vague traverse tout le ciel en 190 images

export function creerEtoiles() {
  const alea = creerAlea(4242);
  const NB = 700;
  const positions = new Float32Array(NB * 3);
  const allumages = new Float32Array(NB);
  const tailles = new Float32Array(NB);
  const phases = new Float32Array(NB);
  const origine = PREMIERE_ETOILE.clone().normalize();
  const dir = new THREE.Vector3();
  for (let i = 0; i < NB; i++) {
    // Direction uniforme sur la sphère, limitée au-dessus de y = -0.35.
    const y = -0.35 + alea() * 1.35;
    const a = alea() * Math.PI * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    dir.set(r * Math.cos(a), y, r * Math.sin(a));
    positions.set([dir.x * 150, dir.y * 150, dir.z * 150], i * 3);
    // Plus l'étoile est loin (en angle) de la première, plus elle s'allume tard.
    allumages[i] = IMAGE_VAGUE + (dir.angleTo(origine) / Math.PI) * DUREE_VAGUE + alea() * 12;
    tailles[i] = 2.5 + Math.pow(alea(), 3) * 7;
    phases[i] = alea() * 6.28;
  }
  const geometrie = new THREE.BufferGeometry();
  geometrie.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometrie.setAttribute('aAllumage', new THREE.BufferAttribute(allumages, 1));
  geometrie.setAttribute('aTaille', new THREE.BufferAttribute(tailles, 1));
  geometrie.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
  const materiau = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    fog: false,
    uniforms: {
      uImage: { value: 0 },
      uEchelle: { value: 1 }, // hauteur du rendu / 1080
      uVive: { value: couleur(PALETTE.lumiere) },
      uMorte: { value: couleur(PALETTE.neutre) },
    },
    vertexShader: /* glsl */ `
      uniform float uImage; uniform float uEchelle;
      attribute float aAllumage; attribute float aTaille; attribute float aPhase;
      varying float vAllumee; varying float vIntensite;
      void main() {
        float depuis = uImage - aAllumage;
        float k = clamp(depuis / 18.0, 0.0, 1.0);
        k = k * k * (3.0 - 2.0 * k);
        float sursaut = 1.0 + 2.5 * exp(-max(depuis, 0.0) / 14.0) * step(0.0, depuis);
        float scintille = 0.8 + 0.2 * sin(uImage * 0.11 + aPhase);
        vAllumee = k;
        vIntensite = mix(0.35, 2.2 * scintille * sursaut, k);
        gl_PointSize = aTaille * uEchelle * mix(0.55, 1.0, k) * mix(1.0, 1.25, sursaut - 1.0 > 0.2 ? 1.0 : 0.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uVive; uniform vec3 uMorte;
      varying float vAllumee; varying float vIntensite;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float disque = smoothstep(0.5, 0.1, d);
        gl_FragColor = vec4(mix(uMorte, uVive, vAllumee) * vIntensite * disque, 1.0);
      }`,
  });
  const points = new THREE.Points(geometrie, materiau);
  points.frustumCulled = false;
  return points;
}

// Texture de halo générée par code (dégradé radial sur un canvas 2D).
function textureHalo() {
  const toile = document.createElement('canvas');
  toile.width = toile.height = 128;
  const ctx = toile.getContext('2d');
  const degrade = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  degrade.addColorStop(0, 'rgba(255,255,255,1)');
  degrade.addColorStop(0.2, 'rgba(255,255,255,0.7)');
  degrade.addColorStop(0.5, 'rgba(255,255,255,0.15)');
  degrade.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = degrade;
  ctx.fillRect(0, 0, 128, 128);
  const texture = new THREE.CanvasTexture(toile);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function creerPremiereEtoile() {
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: textureHalo(),
      color: couleur(PALETTE.lumiere),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false,
    }),
  );
  sprite.position.copy(PREMIERE_ETOILE);
  return sprite;
}

// L'étincelle offerte par Lueur : un noyau lumineux, une lumière, une traînée instanciée.
export const NB_TRAINEE = 14;
export function creerEtincelle() {
  const groupe = new THREE.Group();
  const noyau = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 12, 8),
    new THREE.MeshBasicMaterial({ color: couleur(PALETTE.accent).multiplyScalar(5), fog: false }),
  );
  const lumiere = new THREE.PointLight(PALETTE.accent, 0, 20, 2);
  noyau.add(lumiere);
  const trainee = new THREE.InstancedMesh(
    new THREE.SphereGeometry(0.07, 6, 4),
    new THREE.MeshBasicMaterial({ color: couleur(PALETTE.accent).multiplyScalar(2.5), fog: false }),
    NB_TRAINEE,
  );
  trainee.frustumCulled = false;
  groupe.add(noyau, trainee);
  return { groupe, noyau, lumiere, trainee };
}

// Lucioles : elles ne s'éveillent qu'une fois le ciel rallumé.
export const NB_LUCIOLES = 70;
export function creerLucioles() {
  const alea = creerAlea(999);
  const maillage = new THREE.InstancedMesh(
    new THREE.SphereGeometry(0.045, 6, 4),
    new THREE.MeshBasicMaterial({ color: couleur(PALETTE.accent).multiplyScalar(3) }),
    NB_LUCIOLES,
  );
  maillage.frustumCulled = false;
  // Position de repos et paramètres d'errance de chaque luciole.
  const bases = [];
  for (let i = 0; i < NB_LUCIOLES; i++) {
    const a = alea() * Math.PI * 2;
    const r = Math.sqrt(alea()) * 9.5;
    const x = r * Math.cos(a);
    const z = r * Math.sin(a);
    bases.push({ x, y: hauteurTerrain(x, z) + 0.5 + alea() * 2.5, z, phase: alea() * 6.28, vitesse: 0.5 + alea() });
  }
  return { maillage, bases };
}

// ---------------------------------------------------------------------------
// Carton de fin : titre et slogan dessinés sur un canvas 2D, affichés en sprites
// accrochés à la caméra (ils font donc partie de l'image capturée).
// ---------------------------------------------------------------------------
function spriteTexte(texte, police, largeurMonde) {
  const toile = document.createElement('canvas');
  toile.width = 2048;
  toile.height = 320;
  const ctx = toile.getContext('2d');
  ctx.font = police;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = PALETTE.lumiere;
  ctx.fillText(texte, 1024, 160);
  const texture = new THREE.CanvasTexture(toile);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0, depthTest: false, depthWrite: false, fog: false }),
  );
  sprite.scale.set(largeurMonde, (largeurMonde * 320) / 2048, 1);
  sprite.renderOrder = 999;
  return sprite;
}

export function creerCartonFin() {
  const titre = spriteTexte('L U E U R', '600 210px Georgia, "Times New Roman", serif', 2.3);
  const slogan = spriteTexte('Partager sa lumière ne l’éteint pas.', 'italic 84px Georgia, "Times New Roman", serif', 2.3);
  titre.position.set(0, -0.4, -2);
  slogan.position.set(0, -0.64, -2);
  return { titre, slogan };
}
```

### src/lights.js

```js
// lights.js — éclairage en trois points, piloté par l'« éveil » du ciel (0 = nuit morte, 1 = ciel rallumé).

import * as THREE from 'three';
import { PALETTE, OMBRES, lerp } from './config.js';
import { PREMIERE_ETOILE } from './assets.js';

export function creerLumieres(scene) {
  // Remplissage : lumière d'hémisphère très faible, pour que les silhouettes restent lisibles.
  const remplissage = new THREE.HemisphereLight(PALETTE.neutre, PALETTE.dominante, 0.5);

  // Lumière clé du dernier acte : elle vient de la première étoile.
  const cle = new THREE.DirectionalLight(PALETTE.lumiere, 0);
  cle.position.copy(PREMIERE_ETOILE);
  cle.target.position.set(0, 2, 0);
  if (OMBRES) {
    cle.castShadow = true;
    cle.shadow.mapSize.set(1024, 1024);
    const c = cle.shadow.camera;
    c.left = c.bottom = -14;
    c.right = c.top = 14;
    c.near = 10;
    c.far = 80;
    cle.shadow.bias = -0.0005;
    cle.shadow.normalBias = 0.06;
  }

  // Contre-jour froid, à l'opposé de la clé : détache l'île du fond.
  const contreJour = new THREE.DirectionalLight(PALETTE.neutre, 0.45);
  contreJour.position.set(-12, 10, 26);

  scene.add(remplissage, cle, cle.target, contreJour);
  return { remplissage, cle, contreJour };
}

// Règle l'intensité des lumières selon l'éveil (0 à 1).
export function reglerLumieres(lumieres, eveil) {
  lumieres.remplissage.intensity = lerp(0.5, 1.1, eveil);
  lumieres.cle.intensity = lerp(0, 2.4, eveil);
  lumieres.contreJour.intensity = lerp(0.45, 0.7, eveil);
}
```

### src/cameras.js

```js
// cameras.js — les 11 plans du storyboard. Chaque plan = une séquence du film.
// debut/fin sont des numéros d'image (fin exclue). `cadre(t, etat)` reçoit la
// progression du plan déjà passée dans l'easing (0 → 1) et renvoie position + cible.

import * as THREE from 'three';
import { EASINGS, borner } from './config.js';
import { SOMMET } from './assets.js';

const v = (x, y, z) => new THREE.Vector3(x, y, z);
const mix = (a, b, t) => a.clone().lerp(b, t);
const depuis = (base, x, y, z) => base.clone().add(v(x, y, z));

export const PLANS = [
  {
    id: 'P1', scene: 1, debut: 0, fin: 180, focale: 24, easing: 'sinus',
    nom: 'Plan large — l’île sous le ciel éteint (dolly avant)',
    cadre: (t) => ({ pos: mix(v(-5, 7, 31), v(-3.5, 5.5, 24), t), cible: v(0, 2.6, 0) }),
  },
  {
    id: 'P2', scene: 1, debut: 180, fin: 360, focale: 35, easing: 'sinus',
    nom: 'Plan moyen — Lueur lève les yeux (orbite légère)',
    cadre: (t, e) => {
      const angle = 1.0 + 0.45 * t; // orbite de 26° autour du personnage
      return {
        pos: depuis(e.lueur, 4.4 * Math.cos(angle), 0.8, 4.4 * Math.sin(angle)),
        cible: depuis(e.lueur, 0, 0.75 + 0.35 * t, 0),
      };
    },
  },
  {
    id: 'P3', scene: 2, debut: 360, fin: 600, focale: 35, easing: 'lineaire',
    nom: 'Travelling latéral — Lueur sautille sur le chemin',
    cadre: (t, e) => ({
      pos: v(e.lueur.x + 0.6, e.lueur.y * 0.5 + 1.7, e.lueur.z + 8),
      cible: depuis(e.lueur, 0.7, 0.7, 0),
    }),
  },
  {
    id: 'P4', scene: 2, debut: 600, fin: 780, focale: 28, easing: 'sortie',
    nom: 'Contre-plongée de dos — la montée dans le vent (panoramique d’accompagnement)',
    cadre: (t, e) => ({
      pos: mix(v(-1.6, 1.5, 4.6), v(-1.1, 1.9, 4.0), t),
      cible: depuis(e.lueur, 0, 0.9, 0),
    }),
  },
  {
    id: 'P5', scene: 2, debut: 780, fin: 900, focale: 85, easing: 'sinus',
    nom: 'Gros plan — la flamme faiblit (dolly avant lent)',
    cadre: (t, e) => ({
      pos: depuis(e.lueur, 2.6 - 0.3 * t, 0.6, -7.5 + 0.9 * t), // face à Lueur, depuis l'autre versant
      cible: depuis(e.lueur, 0, 0.75, 0),
    }),
  },
  {
    id: 'P6', scene: 3, debut: 900, fin: 1080, focale: 35, easing: 'sinus',
    nom: 'Plan moyen — le don (orbite légère au sommet)',
    cadre: (t) => ({
      pos: mix(depuis(SOMMET, -3.0, 0.6, 3.6), depuis(SOMMET, -2.0, 0.8, 4.1), t),
      cible: depuis(SOMMET, 0, 1.0 + 0.3 * t, 0),
    }),
  },
  {
    id: 'P7', scene: 3, debut: 1080, fin: 1230, focale: 50, easing: 'lineaire',
    nom: 'Plan de suivi — l’étincelle monte (panoramique vertical)',
    cadre: (t, e) => ({
      pos: depuis(SOMMET, -3.6, 0.4, 5.2),
      cible: e.etincelleRetard, // la caméra suit l'étincelle avec un léger retard
    }),
  },
  {
    id: 'P8', scene: 3, debut: 1230, fin: 1350, focale: 24, easing: 'sortie',
    nom: 'Plan large en contre-plongée — la première étoile s’allume',
    cadre: (t) => ({
      pos: mix(depuis(SOMMET, -1.4, -0.5, 7.2), depuis(SOMMET, -1.6, -0.7, 8.2), t),
      cible: depuis(SOMMET, 0.8, 4.2, -2),
    }),
  },
  {
    id: 'P9', scene: 4, debut: 1350, fin: 1560, focale: 24, easing: 'sinus',
    nom: 'Plan large — le ciel se rallume (dolly arrière)',
    cadre: (t) => ({ pos: mix(v(-2, 5.5, 21), v(-5, 7, 32), t), cible: mix(v(1, 6.5, -4), v(1, 7.5, -4), t) }),
  },
  {
    id: 'P10', scene: 4, debut: 1560, fin: 1680, focale: 85, easing: 'sinus',
    nom: 'Gros plan — la flamme de Lueur revient (dolly avant)',
    cadre: (t) => ({
      pos: depuis(SOMMET, -2.4, 0.9, 8.6 - 1.0 * t),
      cible: depuis(SOMMET, 0, 0.85, 0),
    }),
  },
  {
    id: 'P11', scene: 4, debut: 1680, fin: 1800, focale: 24, easing: 'sinus',
    nom: 'Plan très large — carton de fin (dolly arrière)',
    cadre: (t) => ({ pos: mix(v(0, 7, 33), v(0, 8, 40), t), cible: v(0, 3.4, 0) }),
  },
];

export function planPourImage(image) {
  return PLANS.find((p) => image >= p.debut && image < p.fin) ?? PLANS[PLANS.length - 1];
}

// Place la caméra pour une image donnée.
export function reglerCamera(camera, image, etat) {
  const plan = planPourImage(image);
  const t = EASINGS[plan.easing](borner((image - plan.debut) / (plan.fin - plan.debut)));
  const { pos, cible } = plan.cadre(t, etat);
  camera.position.copy(pos);
  camera.setFocalLength(plan.focale); // pellicule 35 mm de large : 24 mm ≈ 45° vertical en 16:9
  camera.lookAt(cible);
  return plan;
}
```

### src/timeline.js

```js
// timeline.js — tout le film est une fonction pure du numéro d'image.
// appliquerImage(image, monde) place chaque objet, chaque lumière et la caméra
// pour l'image demandée, sans rien mémoriser d'une image à l'autre.

import * as THREE from 'three';
import { FPS, EASINGS, borner, cles, lerp, vacillement } from './config.js';
import {
  SOMMET, PREMIERE_ETOILE, IMAGE_PREMIERE_ETOILE, IMAGE_VAGUE, NB_TRAINEE, NB_LUCIOLES,
  positionChemin,
} from './assets.js';
import { reglerLumieres } from './lights.js';
import { reglerCamera } from './cameras.js';

// Les 5 beats du scénario (en images).
export const BEATS = [
  { nom: 'Accroche', debut: 0, fin: 360 },
  { nom: 'Développement', debut: 360, fin: 900 },
  { nom: 'Climax', debut: 900, fin: 1350 },
  { nom: 'Dénouement', debut: 1350, fin: 1680 },
  { nom: 'Final', debut: 1680, fin: 1800 },
];

// --- Courbes maîtresses -----------------------------------------------------

// Force de la flamme de Lueur (1 = normale).
export function niveauFlamme(image) {
  const base = cles(image, [
    [0, 1], [600, 1], [780, 0.6], [870, 0.22], [900, 0.5],
    [1020, 0.9], [1080, 1.5], [1100, 0.1], [1560, 0.1], [1650, 1.5], [1800, 1.3],
  ]);
  return Math.max(0.04, base * (1 + 0.1 * vacillement(image)));
}

// Éveil du monde : 0 = ciel mort, 1 = ciel rallumé.
export function niveauEveil(image) {
  return cles(image, [[IMAGE_PREMIERE_ETOILE, 0], [IMAGE_VAGUE, 0.15], [1560, 1]]);
}

// Avancée de Lueur sur le chemin (0 = cabane, 1 = sommet).
export function avanceeChemin(image) {
  if (image < 600) return cles(image, [[360, 0], [600, 0.55]], EASINGS.lineaire);
  if (image < 780) return cles(image, [[600, 0.55], [780, 0.92]], EASINGS.lineaire);
  return cles(image, [[780, 0.92], [890, 1]], EASINGS.sortie);
}

// Position de l'étincelle entre le sommet et la première étoile.
const departEtincelle = SOMMET.clone().add(new THREE.Vector3(0, 1.7, 0));
export function positionEtincelle(image, cible = new THREE.Vector3()) {
  const t = borner((image - 1080) / (IMAGE_PREMIERE_ETOILE - 1080));
  const k = t * t * (0.35 + 0.65 * t); // départ doux, puis accélération
  cible.lerpVectors(departEtincelle, PREMIERE_ETOILE, k);
  // Petite spirale qui s'amortit : un arc plutôt qu'une ligne droite.
  const rayon = 0.5 * Math.sin(Math.PI * Math.min(1, t * 1.6)) * (1 - t);
  cible.x += rayon * Math.cos(t * 16);
  cible.z += rayon * Math.sin(t * 16);
  return cible;
}

// --- Application d'une image -------------------------------------------------

const tmp = new THREE.Vector3();
const tmp2 = new THREE.Vector3();
const pantin = new THREE.Object3D();
const etat = { lueur: new THREE.Vector3(), etincelle: new THREE.Vector3(), etincelleRetard: new THREE.Vector3() };

export function appliquerImage(image, monde) {
  const flamme = niveauFlamme(image);
  const eveil = niveauEveil(image);

  // ----- Lueur : position, cap, sauts, squash & stretch -----
  const { groupe, corps, chapeau, materiauPapier, lumiere } = monde.lueur;
  const u = avanceeChemin(image);
  positionChemin(u, etat.lueur);
  groupe.position.copy(etat.lueur);

  let cap = 0.35; // au repos devant la cabane : tournée vers la caméra
  let inclinaison = 0; // négatif = penchée en arrière (regarde le ciel)
  let roulis = 0;
  let saut = 0;
  let etirement = 1; // échelle verticale ; l'horizontale compense pour garder le volume

  if (image < 360) {
    // Scène 1 : immobile, puis lève les yeux vers le ciel vide.
    inclinaison = cles(image, [[205, 0], [260, -0.42]]);
    etirement = 1 + 0.015 * Math.sin(image * 0.12); // respiration
  } else if (image < 900) {
    // Scène 2 : marche sautillante. Le cap suit la tangente du chemin.
    positionChemin(u + 0.01, tmp);
    positionChemin(u - 0.01, tmp2);
    cap = Math.atan2(tmp.x - tmp2.x, tmp.z - tmp2.z);
    const fatigue = cles(image, [[600, 1], [780, 0.6], [880, 0.25]]);
    const phase = u * 34; // 34 sauts sur tout le chemin
    const arc = Math.abs(Math.sin(Math.PI * phase));
    const enMarche = image < 890 ? 1 : 0;
    saut = 0.32 * arc * fatigue * enMarche;
    etirement = 1 + (0.22 * arc - 0.13) * fatigue * enMarche; // écrasée au sol, étirée en l'air
    inclinaison = 0.12 * fatigue; // penchée en avant dans l'effort
    if (image >= 600) roulis = 0.07 * Math.sin(image * 0.31) + 0.04 * Math.sin(image * 0.77); // vent
  } else {
    // Scènes 3 et 4 : au sommet, de trois quarts face à la caméra.
    cap = cles(image, [[1600, -0.55], [1640, -0.3]]);
    inclinaison = cles(image, [[900, 0], [955, -0.45], [1590, -0.45], [1640, -0.05]]);
    // Anticipation (écrasement) puis étirement au moment d'offrir la flamme.
    etirement = cles(image, [[960, 1], [1020, 0.76], [1050, 0.8], [1078, 1.24], [1100, 0.94], [1125, 1]]);
    // Deux petits sauts de joie quand sa flamme revient.
    if (image >= 1630 && image < 1680) {
      const arc = Math.abs(Math.sin(Math.PI * ((image - 1630) / 25)));
      saut = 0.28 * arc;
      etirement = 1 + 0.2 * arc - 0.1;
    }
    etirement += 0.012 * Math.sin(image * 0.12);
  }

  groupe.position.y += saut;
  groupe.rotation.set(inclinaison, cap, roulis);
  corps.scale.set(1 / Math.sqrt(etirement), etirement, 1 / Math.sqrt(etirement));

  // Le chapeau se soulève pour laisser partir l'étincelle, puis se referme.
  const ouverture = cles(image, [[1040, 0], [1078, 1], [1140, 1], [1200, 0]]);
  chapeau.position.y = 0.8 + 0.22 * ouverture;
  chapeau.rotation.x = -0.5 * ouverture;

  materiauPapier.emissiveIntensity = 0.05 + 0.7 * flamme;
  lumiere.intensity = 7 * flamme;

  // ----- Étincelle et traînée -----
  const { noyau, lumiere: lumiereEtincelle, trainee } = monde.etincelle;
  const etincelleVisible = image >= 1076 && image < IMAGE_PREMIERE_ETOILE;
  monde.etincelle.groupe.visible = etincelleVisible;
  positionEtincelle(image, etat.etincelle);
  positionEtincelle(image - 5, etat.etincelleRetard);
  if (etincelleVisible) {
    noyau.position.copy(etat.etincelle);
    const taille = cles(image, [[1076, 0.2], [1090, 1.3], [1200, 1.6]]);
    noyau.scale.setScalar(taille);
    lumiereEtincelle.intensity = 14;
    for (let i = 0; i < NB_TRAINEE; i++) {
      positionEtincelle(image - (i + 1) * 1.6, pantin.position);
      pantin.scale.setScalar(image - (i + 1) * 1.6 < 1080 ? 0 : (1 - i / NB_TRAINEE) * taille);
      pantin.updateMatrix();
      trainee.setMatrixAt(i, pantin.matrix);
    }
    trainee.instanceMatrix.needsUpdate = true;
  }

  // ----- Ciel -----
  monde.etoiles.material.uniforms.uImage.value = image;
  monde.ciel.material.uniforms.uEveil.value = eveil;
  const depuisAllumage = image - IMAGE_PREMIERE_ETOILE;
  const premiere = monde.premiereEtoile;
  premiere.visible = depuisAllumage >= 0;
  if (premiere.visible) {
    const sursaut = 1 + 2.2 * Math.exp(-depuisAllumage / 16);
    premiere.scale.setScalar(5.5 * sursaut * (1 + 0.06 * Math.sin(image * 0.2)));
    premiere.material.color.set(monde.couleurEtoile).multiplyScalar(2.5 + 2 * (sursaut - 1));
  }

  // ----- Lumières, brouillard, cabane, lucioles -----
  reglerLumieres(monde.lumieres, eveil);
  monde.scene.fog.color.copy(monde.brouillardNuit).lerp(monde.brouillardEveil, eveil);
  monde.scene.fog.density = lerp(0.016, 0.009, eveil);
  monde.materiauFenetre.emissiveIntensity = 2.5 * cles(image, [[1480, 0], [1560, 1]]);
  monde.rochersFlottants.rotation.y = image * 0.0004; // dérive très lente

  const { maillage: lucioles, bases } = monde.lucioles;
  const s = image / FPS;
  for (let i = 0; i < NB_LUCIOLES; i++) {
    const b = bases[i];
    // Chaque luciole s'éveille à son tour pendant la vague.
    const reveil = borner((eveil - 0.2 - (i / NB_LUCIOLES) * 0.5) / 0.25);
    pantin.position.set(
      b.x + 0.5 * Math.sin(s * b.vitesse + b.phase),
      b.y + 0.3 * Math.sin(s * b.vitesse * 1.7 + b.phase * 2),
      b.z + 0.5 * Math.cos(s * b.vitesse * 0.8 + b.phase),
    );
    pantin.scale.setScalar(reveil * (0.7 + 0.3 * Math.sin(s * 3 + b.phase)));
    pantin.updateMatrix();
    lucioles.setMatrixAt(i, pantin.matrix);
  }
  lucioles.instanceMatrix.needsUpdate = true;

  // ----- Carton de fin -----
  monde.carton.titre.material.opacity = cles(image, [[1695, 0], [1735, 1]]);
  monde.carton.slogan.material.opacity = cles(image, [[1722, 0], [1762, 1]]);

  // ----- Transitions plein écran -----
  const u2 = monde.passeFinale.uniforms;
  u2.uImage.value = image;
  // Fondu : ouverture au noir, ellipse scène 2 → 3 autour de l'image 900, fermeture au noir.
  u2.uFondu.value = cles(image, [[0, 1], [30, 0], [888, 0], [900, 1], [912, 0], [1770, 0], [1799, 1]], EASINGS.lineaire);
  // Flash blanc quand la première étoile s'allume (raccord P7 → P8).
  u2.uFlash.value = cles(image, [[1222, 0], [1230, 0.9], [1262, 0]], EASINGS.lineaire);

  // ----- Caméra (en dernier : elle dépend des positions calculées ci-dessus) -----
  return reglerCamera(monde.camera, image, etat);
}
```

### src/scene.js

```js
// scene.js — assemble le monde, le moteur de rendu et le post-traitement.

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { PALETTE, LARGEUR, HAUTEUR, OMBRES } from './config.js';
import {
  creerIle, creerRochersFlottants, creerLueur, creerCiel, creerEtoiles,
  creerPremiereEtoile, creerEtincelle, creerLucioles, creerCartonFin,
} from './assets.js';
import { creerLumieres } from './lights.js';
import { appliquerImage } from './timeline.js';

// Dernière passe : étalonnage léger, vignettage, grain, fondu au noir et flash blanc.
const ShaderFinal = {
  uniforms: {
    tDiffuse: { value: null },
    uImage: { value: 0 },
    uFondu: { value: 0 },
    uFlash: { value: 0 },
    uGrain: { value: 0.035 },
    uVignette: { value: 0.55 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uImage, uFondu, uFlash, uGrain, uVignette;
    varying vec2 vUv;
    float hasard(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      // Étalonnage : ombres légèrement bleutées, hautes lumières légèrement chaudes.
      float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c += vec3(0.0, 0.004, 0.012) * (1.0 - smoothstep(0.0, 0.25, luma));
      c *= mix(vec3(1.0), vec3(1.04, 1.0, 0.94), smoothstep(0.3, 1.2, luma));
      // Vignettage.
      float d = distance(vUv, vec2(0.5));
      c *= 1.0 - uVignette * smoothstep(0.35, 0.85, d);
      // Grain : il dépend du numéro d'image, donc il est identique à chaque exécution.
      float g = hasard(vUv * 1000.0 + mod(uImage, 64.0) * 1.37) - 0.5;
      c += g * uGrain * (0.4 + luma);
      // Transitions.
      c = mix(c, vec3(4.0), uFlash);
      c *= 1.0 - uFondu;
      gl_FragColor = vec4(max(c, 0.0), 1.0);
    }`,
};

export function creerFilm(canvas) {
  const moteur = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
  moteur.setPixelRatio(1); // la résolution est fixée par nous, pas par l'écran
  moteur.toneMapping = THREE.ACESFilmicToneMapping; // appliqué par OutputPass
  moteur.toneMappingExposure = 1.15;
  moteur.shadowMap.enabled = OMBRES;
  moteur.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(PALETTE.dominante, 0.016);
  const camera = new THREE.PerspectiveCamera(45, LARGEUR / HAUTEUR, 0.1, 500);
  scene.add(camera); // nécessaire : le carton de fin est accroché à la caméra

  const ile = creerIle();
  const rochersFlottants = creerRochersFlottants();
  const lueur = creerLueur();
  const ciel = creerCiel();
  const etoiles = creerEtoiles();
  const premiereEtoile = creerPremiereEtoile();
  const etincelle = creerEtincelle();
  const lucioles = creerLucioles();
  const carton = creerCartonFin();
  const lumieres = creerLumieres(scene);
  scene.add(ciel, etoiles, premiereEtoile, ile.groupe, rochersFlottants, lueur.groupe, etincelle.groupe, lucioles.maillage);
  camera.add(carton.titre, carton.slogan);

  // Post-traitement : rendu → bloom → passe finale → conversion de sortie (tone mapping + sRGB).
  const compositeur = new EffectComposer(moteur);
  compositeur.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(LARGEUR, HAUTEUR), 0.5, 0.6, 0.9);
  compositeur.addPass(bloom);
  const passeFinale = new ShaderPass(ShaderFinal);
  compositeur.addPass(passeFinale);
  compositeur.addPass(new OutputPass());

  const monde = {
    scene, camera, lueur, ciel, etoiles, premiereEtoile, etincelle, lucioles, carton, lumieres,
    rochersFlottants, passeFinale,
    materiauFenetre: ile.materiauFenetre,
    couleurEtoile: new THREE.Color(PALETTE.lumiere),
    brouillardNuit: new THREE.Color(PALETTE.dominante),
    brouillardEveil: new THREE.Color(PALETTE.ombre),
  };

  // Change la résolution interne (aperçu allégé ou capture pleine définition).
  function definirTaille(largeur, hauteur) {
    moteur.setSize(largeur, hauteur, false);
    compositeur.setSize(largeur, hauteur);
    etoiles.material.uniforms.uEchelle.value = hauteur / HAUTEUR;
  }

  // Calcule et dessine une image. Renvoie le plan du storyboard correspondant.
  function rendreImage(image) {
    const plan = appliquerImage(image, monde);
    compositeur.render();
    return plan;
  }

  definirTaille(LARGEUR, HAUTEUR);
  return { moteur, monde, definirTaille, rendreImage };
}
```

### src/capture.js

```js
// capture.js — export image par image, sans dépendre du temps réel.
// Voie principale : WebCodecs + mp4-muxer → un fichier MP4 directement dans le navigateur.
// Voie de secours : suite de PNG rangée dans des archives ZIP.

import { Muxer, ArrayBufferTarget } from 'mp4-muxer';
import { zipSync } from 'fflate';
import { FPS, TOTAL_IMAGES, LARGEUR, HAUTEUR, DEBIT_VIDEO } from './config.js';

const pause = () => new Promise((r) => setTimeout(r, 0));

function telecharger(blob, nom) {
  const lien = document.createElement('a');
  lien.href = URL.createObjectURL(blob);
  lien.download = nom;
  lien.click();
  setTimeout(() => URL.revokeObjectURL(lien.href), 10_000);
}

// H.264 d'abord (lisible partout) ; VP9 en repli si le navigateur n'encode pas le H.264.
const CODECS = [
  { codec: 'avc1.640028', conteneur: 'avc' }, // H.264 High, niveau 4.0
  { codec: 'avc1.42E028', conteneur: 'avc' }, // H.264 Baseline, niveau 4.0
  { codec: 'vp09.00.40.08', conteneur: 'vp9' },
];

export async function capturerMP4({ canvas, rendreImage, surProgression, debut = 0, fin = TOTAL_IMAGES }) {
  if (!('VideoEncoder' in window)) {
    throw new Error('WebCodecs indisponible dans ce navigateur : utilisez Chrome ou Edge, ou la capture PNG.');
  }
  let choix = null;
  let reglages = null;
  for (const c of CODECS) {
    reglages = { codec: c.codec, width: LARGEUR, height: HAUTEUR, bitrate: DEBIT_VIDEO, framerate: FPS };
    if ((await VideoEncoder.isConfigSupported(reglages)).supported) {
      choix = c;
      break;
    }
  }
  if (!choix) throw new Error('Aucun codec vidéo disponible : utilisez la capture PNG.');

  const multiplexeur = new Muxer({
    target: new ArrayBufferTarget(),
    video: { codec: choix.conteneur, width: LARGEUR, height: HAUTEUR, frameRate: FPS },
    fastStart: 'in-memory',
  });
  let erreur = null;
  const encodeur = new VideoEncoder({
    output: (morceau, meta) => multiplexeur.addVideoChunk(morceau, meta),
    error: (e) => (erreur = e),
  });
  encodeur.configure(reglages);

  for (let image = debut; image < fin; image++) {
    if (erreur) throw erreur;
    rendreImage(image);
    // L'horodatage vient du numéro d'image : la vitesse de la machine n'a aucune influence.
    const trame = new VideoFrame(canvas, {
      timestamp: Math.round(((image - debut) * 1_000_000) / FPS),
      duration: Math.round(1_000_000 / FPS),
    });
    encodeur.encode(trame, { keyFrame: (image - debut) % (FPS * 2) === 0 });
    trame.close();
    while (encodeur.encodeQueueSize > 6) await pause(); // laisse l'encodeur respirer
    if (image % 5 === 0) {
      surProgression?.(image - debut + 1, fin - debut);
      await pause();
    }
  }
  await encodeur.flush();
  if (erreur) throw erreur;
  multiplexeur.finalize();
  const blob = new Blob([multiplexeur.target.buffer], { type: 'video/mp4' });
  telecharger(blob, `lueur_${LARGEUR}x${HAUTEUR}_${FPS}ips.mp4`);
  return { codec: choix.codec, octets: blob.size };
}

// Secours : 1800 PNG, par lots de 50 images (36 archives ZIP sans compression, ≈ 220 Mo chacune).
export async function capturerPNG({ canvas, rendreImage, surProgression, debut = 0, fin = TOTAL_IMAGES, lot = 50 }) {
  let fichiers = {};
  let numeroLot = 0;
  const vider = () => {
    if (Object.keys(fichiers).length === 0) return;
    numeroLot++;
    telecharger(new Blob([zipSync(fichiers, { level: 0 })], { type: 'application/zip' }), `lueur_png_${String(numeroLot).padStart(2, '0')}.zip`);
    fichiers = {};
  };
  for (let image = debut; image < fin; image++) {
    rendreImage(image);
    const blob = await new Promise((r) => canvas.toBlob(r, 'image/png'));
    fichiers[`lueur_${String(image).padStart(4, '0')}.png`] = new Uint8Array(await blob.arrayBuffer());
    if ((image - debut + 1) % lot === 0) vider();
    surProgression?.(image - debut + 1, fin - debut);
  }
  vider();
  return { lots: numeroLot };
}
```

### src/main.js

```js
// main.js — interface : aperçu, curseur d'image, lancement des captures.
// Paramètres d'URL : ?echelle=0.5 (résolution de l'aperçu), ?image=1234 (image de départ).

import { FPS, TOTAL_IMAGES, LARGEUR, HAUTEUR } from './config.js';
import { creerFilm } from './scene.js';
import { capturerMP4, capturerPNG } from './capture.js';

const params = new URLSearchParams(location.search);
const echelle = Math.min(1, Math.max(0.25, Number(params.get('echelle')) || 0.5));
const canvas = document.getElementById('rendu');
const curseur = document.getElementById('curseur');
const info = document.getElementById('info');
const boutonLecture = document.getElementById('lecture');
const boutonMP4 = document.getElementById('mp4');
const boutonPNG = document.getElementById('png');

const film = creerFilm(canvas);
const tailleApercu = () => film.definirTaille(Math.round(LARGEUR * echelle), Math.round(HAUTEUR * echelle));
tailleApercu();

let image = Math.min(TOTAL_IMAGES - 1, Math.max(0, Number(params.get('image')) || 0));
let enLecture = false;
let enCapture = false;
let depart = 0; // instant où l'image 0 aurait été jouée

function afficher(n) {
  image = n;
  const plan = film.rendreImage(n);
  curseur.value = n;
  const s = n / FPS;
  info.textContent = `image ${String(n).padStart(4, '0')} / ${TOTAL_IMAGES - 1} · ${s.toFixed(2).padStart(5, '0')} s · ${plan.id} — ${plan.nom}`;
}

// En aperçu, l'horloge ne sert qu'à CHOISIR l'image à montrer ; le contenu de
// l'image ne dépend que de son numéro. La capture, elle, n'utilise aucune horloge.
function boucle(maintenant) {
  if (enLecture && !enCapture) {
    const n = Math.floor(((maintenant - depart) / 1000) * FPS);
    if (n >= TOTAL_IMAGES) {
      depart = maintenant;
      afficher(0);
    } else if (n !== image) afficher(n);
  }
  requestAnimationFrame(boucle);
}

boutonLecture.onclick = () => {
  enLecture = !enLecture;
  depart = performance.now() - (image / FPS) * 1000;
  boutonLecture.textContent = enLecture ? '⏸ Pause' : '▶ Lecture';
};
curseur.oninput = () => {
  if (enCapture) return;
  depart = performance.now() - (Number(curseur.value) / FPS) * 1000;
  afficher(Number(curseur.value));
};

async function capturer(fonction) {
  enCapture = true;
  boutonMP4.disabled = boutonPNG.disabled = boutonLecture.disabled = true;
  film.definirTaille(LARGEUR, HAUTEUR); // la capture se fait toujours en pleine définition
  try {
    const bilan = await fonction({
      canvas,
      rendreImage: film.rendreImage,
      surProgression: (fait, total) => (info.textContent = `capture : ${fait} / ${total} images (${Math.round((fait / total) * 100)} %)`),
    });
    info.textContent = `capture terminée — ${JSON.stringify(bilan)}`;
  } catch (e) {
    info.textContent = `erreur : ${e.message}`;
    console.error(e);
  }
  tailleApercu();
  enCapture = false;
  boutonMP4.disabled = boutonPNG.disabled = boutonLecture.disabled = false;
}
boutonMP4.onclick = () => capturer(capturerMP4);
boutonPNG.onclick = () => capturer(capturerPNG);

// Accès console pour les contrôles : __film.rendreImage(900), etc.
window.__film = film;
window.__capturerMP4 = capturerMP4;
window.__capturerPNG = capturerPNG;

afficher(image);
requestAnimationFrame(boucle);
```

## 4.4 Export

| Réglage | Valeur |
|---|---|
| Résolution | 1920 × 1080 |
| Cadence | 30 images/s |
| Débit vidéo | 12 Mbit/s (fichier de 90 Mo au maximum, moins en pratique car l'image est sombre) |
| Codec | H.264 High niveau 4.0, repli automatique sur VP9 si le navigateur n'encode pas le H.264 |
| Conteneur | MP4, sans piste audio |

- **Voie principale** : bouton « Capturer en MP4 ». Le navigateur encode chaque image avec WebCodecs et écrit le MP4 lui-même. Aucun convertisseur n'est nécessaire. Il faut Chrome ou Edge récent.
- **Pourquoi pas ccapture.js** : cette bibliothèque n'est plus maintenue, se charge mal en modules ES et produit du WebM qu'il faut encore convertir. WebCodecs donne directement un MP4.
- **Secours** : bouton « Capturer en PNG ». Il télécharge 36 archives ZIP de 50 images. Comptez environ 8 Go au total. Il faut ensuite assembler les images en vidéo avec un outil « suite d'images vers MP4 » en ligne. Je ne peux pas vous garantir qu'un service précis accepte un tel volume : si aucun ne convient, FFmpeg en local reste l'alternative fiable (`ffmpeg -framerate 30 -i lueur_%04d.png -c:v libx264 -pix_fmt yuv420p -b:v 12M lueur.mp4`), mais il s'installe sur l'ordinateur.

## 4.5 Pas à pas

1. Ouvrez [stackblitz.com](https://stackblitz.com), créez un projet **Vite → Vanilla (JavaScript)**.
2. Remplacez `package.json` et `index.html`, supprimez les fichiers d'exemple de `src/`, créez les 8 fichiers de `src/` et collez-y le code de la partie 4.3. StackBlitz installe les dépendances et lance `npm run dev` tout seul.
3. Cliquez sur **Open in New Tab** dans l'aperçu. La capture doit se faire dans un vrai onglet, car le téléchargement est souvent bloqué dans le cadre intégré.
4. Vérifiez la scène : déplacez le curseur, lancez la lecture, contrôlez chaque plan avec la ligne d'information (numéro d'image, temps, plan).
5. Si l'aperçu saccade, ajoutez `?echelle=0.25` à l'adresse. Cela ne change rien à la capture, qui se fait toujours en 1920 × 1080.
6. Cliquez sur **Capturer en MP4**. Laissez l'onglet au premier plan jusqu'à 100 %. Le fichier `lueur_1920x1080_30ips.mp4` se télécharge.
7. Contrôlez le fichier : durée de 60,0 s, 1920 × 1080, 30 images/s, première et dernière image noires, flash à 41 s.
8. Ajoutez le son et les sous-titres (partie 5) dans un éditeur vidéo en ligne, puis exportez la version finale.

**Si StackBlitz n'est pas accessible** : CodeSandbox (modèle « Vite ») fonctionne de la même façon. Sans aucun service en ligne, il faut Node.js en local (`npm install` puis `npm run dev`).

## 4.6 Performance

- **Budget** : environ 15 000 triangles, une trentaine d'appels de dessin, aucune texture image (deux canvas générés, 128 px et 2048 × 320 px).
- **Instancing** : pavés, troncs, feuillages, rochers, rochers flottants, lucioles et traînée sont des `InstancedMesh`. Les 700 étoiles sont un seul objet `Points`.
- **Lumières** : une seule lumière projette des ombres. Les lumières ponctuelles n'en projettent pas.
- **Ordinateur modeste**, par ordre d'efficacité :
  1. `OMBRES = false` dans `config.js` ;
  2. bloom moins fin : remplacez `new THREE.Vector2(LARGEUR, HAUTEUR)` par la moitié dans `scene.js` ;
  3. capture en 1280 × 720 : changez `LARGEUR` et `HAUTEUR`, et descendez `DEBIT_VIDEO` à 6 000 000.
- La capture n'est pas en temps réel : une machine lente met plus longtemps mais produit le même fichier.

## 4.7 Points de contrôle

| Étape | À vérifier |
|---|---|
| Projet ouvert | Aucune erreur dans la console, l'image 0 est noire |
| Image 90 | Île visible, un seul point de lumière |
| Image 300 | Lueur penchée en arrière, cabane derrière elle |
| Image 850 | Gros plan de face, flamme faible |
| Image 1150 | Étincelle et traînée visibles |
| Image 1232 | Écran presque blanc |
| Image 1450 | Étoiles en cours d'allumage, ombres sur l'île |
| Image 1760 | Titre et slogan lisibles, non coupés |
| Après capture | 60,0 s, 1800 images, pas d'image dupliquée ni manquante |

---

# 5. Production, son et sous-titres

## 5.1 Liste des assets dans l'ordre de production

Les durées sont des estimations pour une personne qui découvre le projet.

| # | Asset | Source | Licence | Temps estimé |
|---|---|---|---|---|
| 1 | Projet et code | Ce dossier | La vôtre | 20 min (copie et vérification) |
| 2 | Vidéo muette | Capture dans le navigateur | La vôtre | 10 à 40 min selon la machine |
| 3 | Voix off | Votre enregistrement ou synthèse vocale | Voir 5.4 | 30 min |
| 4 | Musique | Pixabay Music ou IA en ligne | Voir 5.2 | 30 min |
| 5 | Bruitages | Freesound ou Pixabay | Voir 5.3 | 45 min |
| 6 | Mixage et sous-titres | Éditeur vidéo en ligne | — | 45 min |

## 5.2 Musique

- **Ambiance** : piano feutré et nappes, proche d'une berceuse. Pas de percussions.
- **Tempo** : 72 BPM, mesure à 4 temps, soit 18 mesures en 60 s (une mesure = 3,33 s).
- **Évolution** :
  - 0 – 12 s : nappe grave seule, une note de piano isolée toutes les deux mesures ;
  - 12 – 26 s : motif de piano simple, qui suit la marche ;
  - 26 – 30 s : le piano s'efface, il ne reste que la nappe ;
  - 30 – 36 s : tension douce, cordes tenues qui montent ;
  - 36 – 41 s : montée ;
  - 41 s : accord large, puis ouverture ;
  - 45 – 56 s : thème complet, chaleureux ;
  - 56 – 60 s : accord final tenu, fondu.
- **Sources** : Pixabay Music (licence Pixabay : usage gratuit, crédit non obligatoire, mais interdiction de redistribuer le morceau seul) ou un générateur par IA en ligne.
- **À vérifier avant publication** : relisez la licence affichée sur la page du morceau le jour du téléchargement. Pour une musique générée par IA, vérifiez que l'offre gratuite autorise l'usage que vous prévoyez, en particulier commercial. Gardez une capture d'écran de la licence.

## 5.3 Bruitages

| Temps | Image | Bruitage |
|---|---|---|
| 0,0 – 60,0 s | 0 – 1799 | Vent léger en fond, très bas |
| 6,8 s | 205 | Petit tintement de métal (Lueur lève la tête) |
| 12,0 – 20,0 s | 360 – 599 | Tintements de pas, environ 2,3 par seconde (19 sauts) |
| 20,0 – 26,0 s | 600 – 779 | Tintements de pas, environ 2,1 par seconde, et rafales de vent |
| 26,0 – 29,7 s | 780 – 890 | Trois pas lourds et espacés, grésillement de flamme |
| 29,0 s | 870 | Souffle : la flamme manque de s'éteindre |
| 32,0 – 34,0 s | 960 – 1020 | Grincement de métal (elle se tasse) |
| 34,7 – 36,0 s | 1040 – 1078 | Clic et frottement du chapeau qui se soulève |
| 36,0 s | 1080 | Souffle de départ de l'étincelle |
| 36,0 – 41,0 s | 1080 – 1229 | Montée scintillante, de plus en plus aiguë |
| 41,0 s | 1230 | Carillon grave et large (la première étoile) |
| 45,0 – 52,0 s | 1350 – 1559 | Carillons en cascade, du centre vers les bords |
| 53,0 s | 1590 | Souffle doux : la flamme revient |
| 55,2 s et 56,0 s | 1655 et 1680 | Deux tintements joyeux (atterrissages) |
| 56,5 s | 1695 | Note tenue sur l'apparition du titre |

Sources : Freesound et Pixabay. Sur Freesound, la licence change d'un son à l'autre : prenez du CC0 en priorité, notez l'auteur et l'adresse de chaque son en CC BY pour les créditer, et écartez le CC BY-NC si la vidéo peut être monétisée.

## 5.4 Voix

- **Style** : narratrice ou narrateur de conte, voix douce, débit lent (environ 2 mots par seconde), sans emphase.
- **Option recommandée** : votre propre voix, enregistrée au téléphone dans une pièce calme. C'est gratuit et sans question de licence.
- **Option synthèse vocale** : une voix française générique d'un service en ligne. Choisissez une voix du catalogue, n'utilisez pas le clonage de voix et n'imitez aucune personne réelle. Vérifiez que l'offre gratuite autorise la publication.
- **Texte et repères** : les six répliques de la partie 1.6, aux temps du fichier SRT.

## 5.5 Sous-titres

### sous-titres/lueur.srt

```srt
1
00:00:01,000 --> 00:00:04,500
Une nuit, les étoiles se sont éteintes.

2
00:00:07,000 --> 00:00:11,000
Il ne restait qu'une petite flamme :
celle de Lueur.

3
00:00:21,000 --> 00:00:25,000
Elle aurait pu la garder pour elle.

4
00:00:31,000 --> 00:00:35,500
Mais une lumière qu'on garde
ne réchauffe personne.

5
00:00:46,000 --> 00:00:50,000
Alors le ciel s'est souvenu d'elle.

6
00:00:56,500 --> 00:00:59,500
Partager sa lumière ne l'éteint pas.
```

## 5.6 Mixage

La vidéo capturée est muette. Importez le MP4, la voix, la musique et les bruitages dans un éditeur vidéo en ligne gratuit, calez chaque son au temps indiqué, puis exportez en 1080p à 30 images/s. Niveaux de départ : voix à −6 dB, bruitages à −12 dB, musique à −18 dB sous la voix et à −10 dB ailleurs. Vérifiez avant de commencer que l'offre gratuite de l'éditeur exporte en 1080p sans filigrane. Si ce n'est pas le cas, dites-le-moi et j'ajoute au projet une piste audio assemblée et multiplexée dans le navigateur.

---

# Checklist de validation

| Point | État | Détail |
|---|---|---|
| Durée à ±5 % | Conforme par construction | 1800 images à 30 images/s = 60,0 s. À confirmer sur votre fichier |
| Timings scénario / storyboard / code | Vérifié | Les 4 scènes, 5 beats et 11 plans ont les mêmes bornes dans les parties 1 et 2, dans `BEATS` et dans `PLANS` |
| Code exécutable | Vérifié en partie | Compilation, rendu des 11 plans, déterminisme et capture d'essai de 60 images vérifiés. Capture complète et StackBlitz à vérifier par vous |
| Palette respectée | Vérifié | 5 couleurs dans `PALETTE`, le reste en mélanges. Seules exceptions : le noir du zénith et des yeux |
| Sons synchronisés | À faire par vous | Les temps sont fournis à l'image près, le mixage reste à réaliser |
| Licences vérifiées | En partie | Visuel et code : rien à vérifier (code maison, bibliothèques MIT). Musique, bruitages et voix : à vérifier par vous au moment du téléchargement |
| Aucun élément protégé | Vérifié | Personnage, décor et texte originaux, aucune personne réelle |
| Vidéo produite | Non | Ce dossier fournit le code. La capture est à lancer par vous |
