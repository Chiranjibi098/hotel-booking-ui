import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const scene = new THREE.Scene();
    const textureLoader = new THREE.TextureLoader();
    const bakedTexture = textureLoader.load(
      'https://rawcdn.githack.com/ricardoolivaalonso/ThreeJS-Room05/ae27bdffd31dcc5cd5a919263f8f1c6874e05400/baked.jpg'
    );
    bakedTexture.flipY = false;
    bakedTexture.encoding = THREE.sRGBEncoding;

    const bakedMaterial = new THREE.MeshBasicMaterial({
      map: bakedTexture,
      side: THREE.DoubleSide,
    });

    // Camera
    const camera = new THREE.PerspectiveCamera(10, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(18, 8, 20);
    scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.minDistance = 20;
    controls.maxDistance = 40;
    controls.minPolarAngle = Math.PI / 4;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minAzimuthAngle = -Math.PI / 80;
    controls.maxAzimuthAngle = Math.PI / 2.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;

    // Load Model
    const loader = new GLTFLoader();
    loader.load(
      'https://rawcdn.githack.com/ricardoolivaalonso/ThreeJS-Room05/ae27bdffd31dcc5cd5a919263f8f1c6874e05400/model.glb',
      (gltf) => {
        const model = gltf.scene;
        model.traverse((child) => (child.material = bakedMaterial));
        scene.add(model);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      }
    );

    // Resize handler
    const onResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', onResize);

    // Animation loop
    const tick = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };

    tick();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="webgl" />;
};

export default ThreeScene;
