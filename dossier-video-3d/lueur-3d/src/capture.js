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
