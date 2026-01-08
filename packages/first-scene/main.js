import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();

// 场景：添加一个立方体
{
  // 几何体：立方体
  const geometry = new THREE.BoxGeometry(100, 100, 100);
  // 材质：Lambert材质
  const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color("orange"),
  });
  // 物体：立方体 + 材质
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, 0);
  scene.add(mesh);
}

// 场景：添加一个点光源
{
  const pointLight = new THREE.PointLight(0xffffff, 10000); // 点光源的颜色:白色，强度:10000
  pointLight.position.set(60, 60, 60); // 点光源的位置:80, 80, 80，默认照向 0,0,0 的方向
  scene.add(pointLight);
}

// 场景：添加一个坐标系辅助器 AxesHelper
{
  // 红色轴 X 轴，绿色轴 Y 轴，蓝色轴 Z 轴
  const axesHelper = new THREE.AxesHelper(200); // 坐标轴的长度:200
  scene.add(axesHelper);
}

// 场景：添加一个相机
{
  const width = window.innerWidth;
  const height = window.innerHeight;

  // 相机：透视相机
  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000); // 相机的视野:60，相机的宽高比:宽度/高度，相机的近裁剪面:1，相机的远裁剪面:1000
  camera.position.set(200, 200, 200); // 相机的位置:200, 200, 200
  camera.lookAt(0, 0, 0); // 相机照向的方向:0, 0, 0

  // 渲染：
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);

  function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  render();

  document.body.append(renderer.domElement);

  // 原理：监听 canvas 鼠标事件，然后根据鼠标的移动来修改相机 camera 的位置。
  new OrbitControls(camera, renderer.domElement);
}
