var stage = new PIXI.Container();

var renderer = PIXI.autoDetectRenderer(640, 360, {
  antialias: true,
  backgroundColor: 0x00ffd4,
});

document.getElementById("stage").appendChild(renderer.view);

var animation = function() {
  requestAnimationFrame(animation);
  renderer.render(stage);
};

animation();

PIXI.loader.add("./assets/sprite.json").load(function() {
  var texture1 = PIXI.Texture.fromFrame("mario_state1");
  var texture2 = PIXI.Texture.fromFrame("mario_state2");
  var texture3 = PIXI.Texture.fromFrame("mario_state3");

  let mvCharacter = new PIXI.extras.AnimatedSprite([
    texture2,
    texture1,
    texture3,
  ]);
  mvCharacter.play();

  mvCharacter.animationSpeed = 0.1;

  stage.addChild(mvCharacter);

  document.addEventListener("keydown", handleKeyDown);

  function handleKeyDown(e) {
    var key = e.key;

    /**
         * キーボードの矢印キーに対応したテクスチャに変更
         */
    switch (key) {
      case "ArrowLeft":
        console.log("left");
        mvCharacter.position.x -= 16;
        break;

      case "ArrowUp":
        console.log("up");
        mvCharacter.position.y -= 16;
        break;

      case "ArrowRight":
        console.log("right");
        mvCharacter.position.x += 16;
        break;

      case "ArrowDown":
        console.log("down");
        mvCharacter.position.y += 16;
        break;

      default:
        break;
    }
  }
});
