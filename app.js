import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
//import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/controls/OrbitControls.js';
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.set(-32.5, 15, 190);

const controls = new OrbitControls( camera, renderer.domElement );

const loader = new GLTFLoader();
loader.load( 'Teknikkorridoren_v2.glb', function ( gltf ) {
	scene.add( gltf.scene );
});

const light = new THREE.PointLight(0xffffff, 1.5, 0);
light.position.set( 0, 50, 150 );
scene.add( light )

let counter = -20;

function animate() {
	counter++;
	requestAnimationFrame( animate );
	camera.position.x += Math.sin(counter*0.01)*0.05;
	camera.position.y -= Math.sin(counter*0.02)*0.05;
	controls.update();
	renderer.render( scene, camera );
}

animate();
