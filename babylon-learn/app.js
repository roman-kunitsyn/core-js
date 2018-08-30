var canvas = document.querySelector(".render-port");
var engine = new BABYLON.Engine(canvas, true);

var createScene = function() {
  var scene = new BABYLON.Scene(engine);
  var camera = new BABYLON.ArcRotateCamera(
    "Camera",
    (3 * Math.PI) / 2,
    Math.PI / 8,
    1,
    new BABYLON.Vector3(0.5, 0.5, 0.5),
    scene
  );

  camera.attachControl(canvas, true);

  camera.lowerRadiusLimit = 1.5;
  camera.upperRadiusLimit = 10;

  camera.useBouncingBehavior = true;
  var light = new BABYLON.HemisphericLight(
    "light1",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );
  // var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
  // sphere.position.y = 1;
  // var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
  // var vrHelper = scene.createDefaultVRExperience();
  // vrHelper.enableTeleportation({ floorMeshName: "ground1" });
  return scene;
};

var scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
});

window.addEventListener("resize", function() {
  engine.resize();
});
