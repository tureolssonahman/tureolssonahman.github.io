import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

camera.position.x = 0;
camera.position.y = 30;
camera.position.z = 75;
camera.lookAt(-22.5, 0, 75)


let model = null;

const loader = new GLTFLoader();
loader.load( 'Teknikkorridoren_v2.glb', function (gltf) {
	model = gltf.scene;
	model.position.setX(0);
	scene.add( model );
});

const light1 = new THREE.PointLight(0xffffff, 0.7, 0);
light1.position.set(-22.5, 350, 250);
scene.add( light1 )

const light2 = new THREE.PointLight(0xffffff, 0.3, 0);
light2.position.set(-22.5, 350, -100);
scene.add( light2 )

/*
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 49) {
	camera.position.set(-25, 25, -100);
    }
};
*/
//Test

let counter = 0;
function animate() {
	counter += 0.01;
	requestAnimationFrame( animate );
	camera.position.z = Math.sin(counter/2)*150+50;
	camera.lookAt(-22.5, 0, 75)
	renderer.render( scene, camera );
}

animate();
