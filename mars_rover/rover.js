var myRover = {
  position: [0,0], 
  direction: 'N'
};

var obstacles = [[1,4],[5,0], [8,4], [9,2]];

//var obstacle = [3,0];

var tracker = [];

//var grid = [[],[],[],[],[],[],[],[],[],[]];

/*for(var i=0;i<10;i++){
	for (var j=0;j<10;j++){
		grid[i][j] = i*j;
	}
} */

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };
  	wrap(rover, 0);
  	wrap(rover, 1);

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
  };
	  wrap(rover, 0);
	  wrap(rover, 1);


  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function turnLeft(rover){
	switch(rover.direction){
		case 'N':
			rover.direction = "W"
			break;
		case 'E':
			rover.direction = "N"
			break;
		case 'S':
			rover.direction = "E"
			break;
		case 'W':
			rover.direction = "E"
			break;
	}
	console.log("Now facing " + rover.direction);
}

function turnRight(rover){
	switch(rover.direction){
		case 'N':
			rover.direction = "E"
			break;
		case 'E':
			rover.direction = "S"
			break;
		case 'S':
			rover.direction = "W"
			break;
		case 'W':
			rover.direction = "N"
			break;
	}
	console.log("Now facing " + rover.direction);
}

function wrap(rover, direction) {
	if(rover.position[direction] < 0){
		rover.position[direction] += 11;
	} else if (rover.position[direction] > 10){
		rover.position[direction] -= 11;
	}
}

function movement(commands, rover, obstacle){
	console.log("Starting position: [" + rover.position[0] + ", " + rover.position[1] + "]")


	if(typeof commands === 'string'){
		commands = commands.split("");
	}

	for(var i=0;i<commands.length;i++){

		switch(commands[i]){
			case 'f':
				goForward(rover);
				break;
			case 'b':
				goBackward(rover);
				break;
			case 'r':
				turnRight(rover);
				break;
			case 'l':
				turnLeft(rover);
				break;
		}

		trackRover(rover);

		if(obstacleDetection(rover, obstacle)){
			console.log("Final position: [" + rover.position[0] + ", " + rover.position[1] + "]");
			return;
		};
	}



  console.log("Final position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function trackRover(rover){
	tracker.push(rover.position[0]);
	tracker.push(rover.position[1]);
}


function obstacleDetection(rover, obstacles, direction){
	for(var i =0;i<obstacles.length;i++){
		if(rover.position[0] === obstacles[i][0] && rover.position[1] === obstacles[i][1]){
			console.log("Obstacle ahead!! Stopping at last secure space.");
			rover.position[0] = tracker[tracker.length-4];
			rover.position[1] = tracker[tracker.length-3];
			return true;
		}
	}
} 

/*

function obstacleDetection(rover, obstacle, direction){
	if(rover.position[0] === obstacle[0] && rover.position[1] === obstacle[1]){
		console.log("Obstacle ahead!! Stopping at last secure space.");
		rover.position[0] = tracker[tracker.length-4];
		rover.position[1] = tracker[tracker.length-3];
		return true;
	}
} 

*/


movement("lffffffffrffffffffrflflflflflflrfrffrfrfffflflflfrf", myRover, obstacles);
//console.log(tracker);

