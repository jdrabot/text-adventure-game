import React from "react";
import kaboom from "https://kaboomjs.com/lib/0.5.1/kaboom.mjs";

function Title() {
  kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
  });

  loadRoot("../images/");
  loadSprite("sword", "sword.png");

  scene("main", () => {
    const mark = add([
      sprite("sword"),
      pos(width() / 2, height() / 2),
      scale(10),
      rotate(0),
      origin("center"),
    ]);

    mark.action(() => {
      mark.scale = Math.sin(time()) * 10;
      mark.angle += dt();
    });
  });

  start("main");
}

export default Title;
