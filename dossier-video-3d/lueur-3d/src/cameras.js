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
