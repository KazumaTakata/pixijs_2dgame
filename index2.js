var stage = new PIXI.Container();

var renderer = PIXI.autoDetectRenderer(640, 360, {
  antialias: true,
  backgroundColor: 0xffffff,
});

document.getElementById("stage").appendChild(renderer.view);

PIXI.loader.add("./assets/sprite.json").load(function() {
  //   var texture1 = PIXI.Texture.fromFrame("mario_state1");
  //   var texture2 = PIXI.Texture.fromFrame("mario_state2");
  //   var texture3 = PIXI.Texture.fromFrame("mario_state3");
  //   let mvCharacter = new PIXI.extras.AnimatedSprite([
  //     texture2,
  //     texture1,
  //     texture3,
  //   ]);

  //   mvCharacter.play();

  //   mvCharacter.animationSpeed = 0.1;

  //   stage.addChild(mvCharacter);

  var texture = PIXI.Texture.fromImage("rain_drop");
  var texture2 = PIXI.Texture.fromImage("rain_drop2");
  for (var i = 0; i < 650; i++) {
    let bunny = new PIXI.extras.AnimatedSprite([texture, texture2]);

    bunny.anchor.set(0.5);
    bunny.x = (i % 50) * 50;
    bunny.y = Math.floor(i / 50) * 50;

    bunny.play();

    bunny.animationSpeed = 0.1;

    stage.addChild(bunny);
  }
});

var animation = function() {
  requestAnimationFrame(animation);
  renderer.render(stage);
  stage.children.forEach(ele => {
    ele.position.y += 0.4;
  });
};

animation();

// var bunny = new PIXI.Sprite(texture);
// stage.addChild(bunny);
