import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function loadGLTFModel(
  scene,
  glbPath,
  options = {
    receiveShadows: true,
    castShadow: true,
  },
) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "3d-model";
        obj.position.x = 0;
        obj.position.y = -0.25;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });

        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      },
    );
  });
}
