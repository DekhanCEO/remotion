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
