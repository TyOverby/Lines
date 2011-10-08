

function Line(x,y){
	this.position = new GameMath.Vector2f(x,y);
	this.towards = new GameMath.Vector2f(pane.getWidth()/2,pane.getHeight()/2);

	this.update = function(towards){
		this.towards = towards;
	}

	this.draw = function(){
		if(this.towards!=undefined){
		var vel = this.towards.minus(this.position);
		}else{
			vel = new GameMath.Vector2f(0,0);
		}

		vel.normalize();
		vel.timesEquals(10);

		var to = this.position.plus(vel);
		vel.timesEquals(-1);
		var to2 = this.position.plus(vel);


		pane.drawLine(this.position.x,this.position.y,to.x,to.y,"red");
		pane.drawLine(this.position.x,this.position.y,to2.x,to2.y,"blue");
		//pane.drawCircleFill(this.x,this.y,10,"black");
	}
}