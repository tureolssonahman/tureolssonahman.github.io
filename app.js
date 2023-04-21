import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const loader = new GLTFLoader();

loader.load( 'Teknikkorridoren_v2.glb', function ( gltf ) {
	scene.add( gltf.scene );
});

scene.background = new THREE.Color(0xffffff);

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

camera.position.z = 125;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();
