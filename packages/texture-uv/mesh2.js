import * as THREE from "three";

const loader = new THREE.TextureLoader();
const texture = loader.load("./muxing.jpg");
texture.colorSpace = THREE.SRGBColorSpace;
texture.wrapS = THREE.RepeatWrapping; // 水平方向重复

const geometry = new THREE.SphereGeometry(50);

const material = new THREE.MeshBasicMaterial({
  map: texture,
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
