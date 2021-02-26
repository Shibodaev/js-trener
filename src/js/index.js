import * as THREE from 'three';

function Test(selector) {
    const self = this;
    const size = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    const material = new THREE.MeshBasicMaterial({ 'color': 0x44aa88 });
    let
        camera = new THREE.PerspectiveCamera(45, size.width / size.height, 0.1, 100),
        scene = new THREE.Scene(),
        renderer, geometry = new THREE.BoxGeometry(1, 1, 1);
    const cube = new THREE.Mesh(geometry, material);

    renderer = new THREE.WebGLRenderer({
        canvas: selector,
        antialias: true
    });

    self.init = () => {
        camera.position.set(1, 1, 5);
        renderer.setSize(size.width, size.height);
        scene.add(cube);
        animate();
    }

    function  animate()  {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        camera.position.z += 0.01;


    }

}


export default Test;

