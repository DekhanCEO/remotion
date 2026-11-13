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
