import * as THREE from 'three';

function Test(selector) {
    const renderer = new THREE.WebGLRenderer({
        canvas: selector,
        antialias: true
    });

    const self = this;
    const size = {
        width: renderer.domElement.clientWidth,
        height: renderer.domElement.clientHeight
    }

    let camera = new THREE.PerspectiveCamera(25, size.width / size.height, 0.1, 10),
        geometry =  new THREE.BoxGeometry(0.5, 0.5, 0.5),
        scene = new THREE.Scene();

    const cubes = [
        makeInstance(geometry,0xd14e4d, 0, -2),
        makeInstance(geometry,0xffb408, -1, 0),
        makeInstance(geometry,0x004c88, 1, 2),
    ]

    self.light = (color, intensity) => {
        let l = new THREE.DirectionalLight(color, intensity);
        l.position.set(-1, 2,4);
        scene.add(l)
        return l;
    }

    self.init = () => {
        camera.position.set(0, 0, 5);
        camera.updateProjectionMatrix();
        renderer.setSize(size.width, size.height);
        animate();
        self.light(0xFFFFFF, 1);
    }

    function makeInstance(geometry,color, x , z) {
        let material = new THREE.MeshPhongMaterial({color});
        const cube = new THREE.Mesh(geometry, material);
        cube.position.x = x;
        cube.position.z = z;
        scene.add(cube);
        return cube;
    }
/*
    function cubesCoordinat() {
        cubes.forEach((cube, ndx) => {
            const speed  = 0.1 + ndx * .1;
            cube.rotation.x += 0.1 * speed;
            cube.rotation.y += 0.1 * speed;
        })
    }*/

    function  animate(time)  {
        cubes.forEach((cube, ndx) => {
            const speed  = 0.1 + ndx * .1;
            cube.rotation.x += 0.1 * speed;
            cube.rotation.y += 0.1 * speed;

        })


        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

}


export default Test;

