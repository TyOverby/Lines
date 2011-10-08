var pane;

var mouseAt=new GameMath.vector2f(0,0);

function mmove(event){
	mouseAt = new GameMath.Vector2f(event.clientX,event.clientY);
	//console.log(mouseAt);
}



function basicGame(canvasID){
	pane = new Pane(canvasID);

	var divisions = 20;

	var lines = [];

	this.startup = function(){
		var diff_x = pane.getWidth()/divisions;
		var diff_y = pane.getHeight()/divisions;

		for(i=0;i<pane.getWidth();i+=diff_x){
			for(v=0;v<pane.getHeight();v+=diff_y){
				lines.push(new Line(i,v));
			}
		}
	}

	this.update = function(){
		for(i=0;i<lines.length;i++){
			lines[i].update(mouseAt);
		}
	}

	this.render = function(){
		pane.getContext().clearRect(0,0,pane.getWidth(),pane.getHeight());
		for(i=0;i<lines.length;i++){
			lines[i].draw();
		}
	}

	this.isRunning = function(){
		return true;
	}
}

function start(){
	myGame = new basicGame("canvas");
	game = new Engine(myGame);
	game.run();
}