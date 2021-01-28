class Drop {
	constructor(x, y, r) {
		var options = {
			isStatic:false,
			restitution: 0,
			friction: 0.1
		}
		this.x = x;
		this.y = y;
		this.r = r
		this.body = Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display() {
		
			var pos = this.body.position;
			if (this.body.position.y > 400) {
				Matter.Body.setPosition(this.body, { x: random(0, 400), y: random(0, 400) });
			}
			push()
			translate(pos.x, pos.y);
			rotate(this.body.angle)
			fill("blue")
			ellipseMode(CENTER);
			ellipse(0, 0, this.r, this.r)
			pop()


		
	}
}