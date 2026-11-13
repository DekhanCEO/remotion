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
