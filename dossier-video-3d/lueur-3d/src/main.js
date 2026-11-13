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
