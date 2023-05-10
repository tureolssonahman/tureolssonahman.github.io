import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

camera.position.set(-25, 25, -100);
camera.lookAt(-25, 0, 0)

let model = null;

const loader = new GLTFLoader();
loader.load( 'Teknikkorridoren_v2.glb', function (gltf) {
	model = gltf.scene;
	model.position.setX(0);
	scene.add( model );
});

const light = new THREE.PointLight(0xffffff, 1.5, 0);
light.position.set(-25, 100, -200);
scene.add( light )

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 49) {
	camera.position.set(-25, 25, -100);
	camera.lookAt(-25, 0, 0)
	light.position.set(-25, 100, -200);
    }
	else if (keyCode == 50){
	camera.position.set(-25, 25, 200);
	camera.lookAt(-25, 0, 125)
	light.position.set(-25, 100, 200);
	}
};

let counter = 0;
function animate() {
	counter += 0.01;
	requestAnimationFrame( animate );
	model.rotation.y = Math.sin(counter*0.5)*0.5;
	renderer.render( scene, camera );
}

animate();
