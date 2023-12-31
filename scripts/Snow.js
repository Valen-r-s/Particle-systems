const createScene = function () {
  const scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.ArcRotateCamera(
    "Camera",
    Math.PI / 2,
    Math.PI / 2,
    40,
    BABYLON.Vector3.Zero()
  );
  camera.attachControl(canvas, true);

  var particleSystem = new BABYLON.ParticleSystem("particles", 5000, scene);

  // Change particles texture
  particleSystem.particleTexture = new BABYLON.Texture("snowflake.png", scene);

  // Where the particles come from
  particleSystem.emitter = new BABYLON.Vector3(0, 10, 0);
  particleSystem.minEmitBox = new BABYLON.Vector3(-20, 0, -20);
  particleSystem.maxEmitBox = new BABYLON.Vector3(20, 0, 20);

  // Colors of all particles
  particleSystem.color1 = new BABYLON.Color4(1, 1, 1, 1);
  particleSystem.colorDead = new BABYLON.Color4(0.05, 0.84, 0.99, 0);

  // Size of each particle (random between...
  particleSystem.minSize = 0.1;
  particleSystem.maxSize = 1;

  // Life time of each particle (random between...
  particleSystem.minLifeTime = 1;
  particleSystem.maxLifeTime = 5;

  // Emission rate
  particleSystem.emitRate = 500;

  particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

  // Direction of each particle after it has been emitted
  particleSystem.direction1 = new BABYLON.Vector3(0, -1, 0);
  particleSystem.direction2 = new BABYLON.Vector3(0, -1, 0);

  // Speed
  particleSystem.minEmitPower = 0.5;
  particleSystem.maxEmitPower = 5;
  particleSystem.updateSpeed = 0.01;

  particleSystem.start();

  return scene;
};
