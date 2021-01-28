class Umbrella{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("walking_1.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
console.log(this.body)

	}

	display()
	{
		var pos=this.body.position;	
		push()
		translate(pos.x,pos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}