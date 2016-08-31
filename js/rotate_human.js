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


	camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -500, 1000 );
				camera.position.x = 200;
				camera.position.y = 100;
				camera.position.z = 200;

	// SCENE
	scene = new THREE.Scene();
	// CAMERA
	var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;

	// var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 100000;
	// camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);



	scene.add(camera);
	// camera.position.set(0,150,400);
	// camera.lookAt(scene.position);	

	// RENDERER
	if ( Detector.webgl )
		renderer = new THREE.WebGLRenderer( {antialias:true} );
	else
		renderer = new THREE.CanvasRenderer(); 
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	container = document.getElementById( 'rotate_human_div' );
	container.appendChild( renderer.domElement );

	// EVENTS
	THREEx.WindowResize(renderer, camera);
	THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });



	// CONTROLS
	// controls = new THREE.OrbitControls( camera, renderer.domElement );
	// // STATS

	// stats = new Stats();
	// stats.domElement.style.position = 'absolute';
	// stats.domElement.style.bottom = '0px';
	// stats.domElement.style.zIndex = 100;
	// container.appendChild( stats.domElement );


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
	var skyBoxGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
	var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0x9999ff, side: THREE.BackSide } );
	var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
	// scene.add(skyBox);
	scene.fog = new THREE.FogExp2( 0x9999ff, 0.00025 );
	
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
	ww.scale.set(50,50,50);
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

var timer = Date.now() * 0.0001;
				camera.position.x = Math.cos( timer ) * 200;
				camera.position.z = Math.sin( timer ) * 200;
				camera.lookAt( scene.position );
				renderer.render( scene, camera );
}
