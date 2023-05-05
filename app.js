import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.set(-32.5, 15, 190);
camera.lookAt(-32.5, 0, 0)
const loader = new GLTFLoader();
loader.load( 'Teknikkorridoren_v2.glb', function ( gltf ) {
	loader.scene.roation.y = 0.5;
	scene.add( gltf.scene );
});

const light = new THREE.PointLight(0xffffff, 1.5, 0);
light.position.set( 0, 50, 150 );
scene.add( light )

let counter = -20;

function animate() {
	counter++;
	requestAnimationFrame( animate );

	renderer.render( scene, camera );
}

animate();
