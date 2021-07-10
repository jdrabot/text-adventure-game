import kaboom from "kaboom";
const imgRoot = process.env.PUBLIC_URL
  ? process.env.PUBLIC_URL
  : "https://safe-cliffs-00867.herokuapp.com//images/bannerImage/banner.gif";

function Title() {
  const k = kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
  });

  k.loadRoot(`${imgRoot}/images/sword.png`);
  k.loadSprite("sword", "sword.png");

  k.scene("main", () => {
    const mark = k.add([
      k.sprite("sword"),
      k.pos(k.width() / 2, k.height() / 2),
      k.scale(10),
      k.rotate(0),
      k.origin("center"),
    ]);

    mark.action(() => {
      mark.scale = Math.sin(k.time()) * 10;
      mark.angle += k.dt();
    });
  });

  k.start("main");
}

export default Title;
