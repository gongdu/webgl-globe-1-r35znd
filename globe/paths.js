import * as THREE from 'three';
import _ from 'lodash';
import Curve from './Curve';
import Tube from './Tube';
import { rootMesh } from './scene';
import { CURVE_COLOR } from './constants';

export function init(allCoords) {
  const material = new THREE.MeshBasicMaterial({
    blending: THREE.AdditiveBlending,
    opacity: 0.6,
    transparent: true,
    color: CURVE_COLOR
  });
  const curveMesh = new THREE.Mesh();

  allCoords.forEach((coords, index) => {
    if (index % 2) {
      const curve = new Curve(coords, material);
      curveMesh.add(curve.mesh);
    } else {
      const tube = new Tube(coords, material);
      curveMesh.add(tube.mesh);
    }
  });

  rootMesh.add(curveMesh);
}