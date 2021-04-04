var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["65c55e67-c782-47ad-bacf-ee4ec4a5e886"],"propsByKey":{"65c55e67-c782-47ad-bacf-ee4ec4a5e886":{"name":"papa","sourceUrl":null,"frameSize":{"x":173,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"T6PCudNG85vRYAsh4N1puE2HxrF7xrPu","loadedFromSource":true,"saved":true,"sourceSize":{"x":173,"y":400},"rootRelativePath":"assets/65c55e67-c782-47ad-bacf-ee4ec4a5e886.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var neha = createSprite(200,200,400,400);
neha.setAnimation("papa");

playSpeech("Hello today we will learn the table of 2 2*1=2, 2*2=4, 2*3=6, 2*4=8, 2*5=10, 2*6=12, 2*14, 2*8=16, 2*9=18, 2*10=20!", "female", "English");

function draw(){
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
