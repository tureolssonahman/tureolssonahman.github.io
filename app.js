import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

const loader = new GLTFLoader();

loader.load( 'Teknikkorridoren_v2.glb', function ( gltf ) {
	scene.add( gltf.scene );
});

scene.background = new THREE.Color(0xffffff);

const light = new THREE.AmbientLight( 0x404040 );
scene.add( light );

camera.position.x = -20;
camera.position.y = 25;
//camera.position.z = 200;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();
