function basicGame(canvasID){
	var pane = new Pane(canvasID);

	this.update = function(){
	}

	this.render = function(){
		pane.drawRectFill(0,0,20,20,"green");
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