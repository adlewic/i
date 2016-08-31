// standard global variables
var container, scene, camera, renderer, controls, stats;
var keyboard = new THREEx.KeyboardState();
var clock = new THREE.Clock();

// custom global variables
var ww;

init();
animate();

// FUNCTIONS 		
function init() 
{


	camera = new THREE.CombinedCamera( window.innerWidth / 2, window.innerHeight / 2, 70, 1, 1000, - 500, 1000 );
				// camera.position.x = 500;
				camera.position.y = 280;
				// camera.position.z = 2000;

	// SCENE
	scene = new THREE.Scene();
	// CAMERA
	var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;

	scene.add(camera);

	// RENDERER
	if ( Detector.webgl )
		renderer = new THREE.WebGLRenderer( {antialias:true} );
	else
		renderer = new THREE.CanvasRenderer(); 
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	container = document.getElementById( 'ThreeJS_final' );
	container.appendChild( renderer.domElement );

	// EVENTS
	THREEx.WindowResize(renderer, camera);
	THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });


// LIGHT
	var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
				hemiLight.color.setHSL( 0.6, 1, 0.6 );
				hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
				hemiLight.position.set( 500, 1000,0 );
	scene.add( hemiLight );
	
// LIGHT
	var hemiLight2 = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
				hemiLight.color.setHSL( 0.6, 1, 0.6 );
				hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
				hemiLight.position.set( 500, -1000, 0 );
	scene.add( hemiLight2 );


// FLOOR

	// SKYBOX/FOG

	
	////////////
	// CUSTOM //
	////////////
	
	// Note: if imported model appears too dark,
	//   add an ambient light in this file
	//   and increase values in model's exported .js file
	//    to e.g. "colorAmbient" : [0.75, 0.75, 0.75]
	var jsonLoader = new THREE.JSONLoader();
	jsonLoader.load( "models/ww.json", addModelToScene );
	// addModelToScene function is called back after model has loaded
	
	var ambientLight = new THREE.AmbientLight(0x111111);
	scene.add(ambientLight);
	
}

function addModelToScene( geometry, materials ) 
{
	var material = new THREE.MeshFaceMaterial( materials );
	ww = new THREE.Mesh( geometry, material );
	ww.scale.set(40,40,40);
	scene.add( ww );
}

function animate() 
{
    requestAnimationFrame( animate );
	render();		
	update();
}

function update()
{
	if ( keyboard.pressed("z") ) 
	{ 
		// do something
	}
	
	// controls.update();
	// stats.update();
}

function render() 
{

var timer = Date.now() * 0.0002;
				camera.position.x = Math.cos( timer ) * 500;
				camera.position.z = Math.sin( timer ) * 100;
				camera.lookAt( scene.position );
				renderer.render( scene, camera );
}
