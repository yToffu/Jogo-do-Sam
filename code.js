var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var Sam;
var i1, i2, i3, i4, i5;
var b1, b2;
var Mortes = 0;

Sam = createSprite(45,200,10,10);
Sam.shapeColor = "Cyan";

// i = carro, Carros
i1 = createSprite(125,200,12.5,12.5);
i1.shapeColor = "Black";
i2 = createSprite(175,200,12.5,12.5);
i2.shapeColor = "Black";
i3 = createSprite(225,200,12.5,12.5);
i3.shapeColor = "Black";
i4 = createSprite(275,200,12.5,12.5);
i4.shapeColor = "Black";
i5 = createSprite(325,200,12.5,12.5);
i5.shapeColor = "Black";
//b = borda, Bordas
b1 = createSprite(200,110,400,10);
b2 = createSprite(200,290,400,10);
//Carros Velocity
i1.velocityY = 10;
i2.velocityY = -10;
i3.velocityY = 10;
i4.velocityY = -10;
i5.velocityY = 10;

//Background

function draw() {
  background("WHITE");
  
  textSize(17);
  fill("Red");
  stroke("DarkRed");
  text(Mortes, 230, 80);
  textSize(17);
  fill("Purple");
  stroke("Cyan");
  text("Mortes", 175, 80);
  
  F();
  KeysToMove();
  
  createEdgeSprites(leftEdge);
  Sam.bounceOff(b1);
  Sam.bounceOff(b2);
  i1.bounceOff(b1);
  i1.bounceOff(b2);
  i2.bounceOff(b1);
  i2.bounceOff(b2);
  i3.bounceOff(b1);
  i3.bounceOff(b2);
  i4.bounceOff(b1);
  i4.bounceOff(b2);
  i5.bounceOff(b1);
  i5.bounceOff(b2);
  Sam.bounceOff(leftEdge);
  drawSprites();
}

function KeysToMove() {
  
  //Esquerda
  if(keyDown('LEFT_ARROW')){
    Sam.x = Sam.x - 2,5;
  }
  
  //Direita
   if(keyDown('RIGHT_ARROW')){
    Sam.x = Sam.x + 2,5;
  }
  
}

function F(){
  if(Sam.isTouching(i1))
  {
    Sam.x = 45;
    Mortes = Mortes + 1;
  }
  if(Sam.isTouching(i2))
  {
    Sam.x = 45;
    Mortes = Mortes + 1;
  }
  if(Sam.isTouching(i3))
  {
    Sam.x = 45;
    Mortes = Mortes + 1;
  }
  if(Sam.isTouching(i4))
  {
    Sam.x = 45;
    Mortes = Mortes + 1;
  }
  if(Sam.isTouching(i5))
  {
    Sam.x = 45;
    Mortes = Mortes + 1;
  }
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
