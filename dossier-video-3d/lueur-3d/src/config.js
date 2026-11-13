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
