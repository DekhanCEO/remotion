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
