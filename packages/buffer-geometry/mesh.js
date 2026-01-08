import * as THREE from "three";

// 几何体：缓冲区几何体
const geometry = new THREE.BufferGeometry();

// 顶点：缓冲区属性
const vertices = new Float32Array([
  0, 0, 0, 100, 0, 0, 0, 100, 0,

  // 0, 100, 0,
  // 100, 0, 0,
  100, 100, 0,
]);

// 顶点：缓冲区属性
const attribute = new THREE.BufferAttribute(vertices, 3);
geometry.attributes.position = attribute; // 顶点属性：position

const indexes = new Uint16Array([0, 1, 2, 2, 1, 3]);
geometry.index = new THREE.BufferAttribute(indexes, 1);

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color("orange"),
  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
