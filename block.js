class Block {
  constructor(x, y, width, height) {
    var options = {

    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("images/block.png")
    this.visibility = 255;
    World.add(world, this.body);
  }
  display() {
    if (this.body.speed < 7) {
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
    else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 1;
      tint(255, this.visibility);
      pop();
    }
  }
}
