const threejsCanvas = document.querySelector('#threejs-canvas')
let widht = threejsCanvas.offsetWidht
let height = threejsCanvas.iffsetHeight



const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(70, widht/height, 1, 1000)
camera.position.set(10, 10, 10)
camera.lookAt(0, 0, 0)



const renderer = new THREE.WebGlRenderer({
antialias: true,
alpha: true,

})

renderer.setSize(widht, height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
threejsCanvas.appendChild(renderer.domElement)



const geometry = new THREE.BoxGeometry(5, 5, 5)
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff})
const box = new THREE.Mesh(geometry, material)
scene.add(box)


update()

function update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(update)