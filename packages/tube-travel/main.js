import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import mesh, { tubePoints } from "./mesh.js";

const scene = new THREE.Scene();

scene.add(mesh);

const pointLight = new THREE.PointLight(0xffffff, 200);
pointLight.position.set(80, 80, 80);
scene.add(pointLight);

const width = window.innerWidth;
const height = window.innerHeight;

const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
camera.position.set(200, 200, 200);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

let i = 0;
function render() {
  if (i < tubePoints.length) {
    if (i < 0) i = 0;
    camera.position.copy(tubePoints[i]);
    camera.lookAt(tubePoints[i + 1]);
    // i++;
  } else i = 0;

  // 水平方向偏移
  mesh.material.map.offset.y += 0.01 / 10;

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

render();

document.body.append(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    i = 0;
  }

  if (e.key === "ArrowUp") {
    i += 4;
    if (i >= tubePoints.length) i = 0;
  }

  if (e.key === "ArrowDown") {
    i -= 4;
    if (i < 0) i = 0;
  }
});
