function modContainer(row, col){
	gridRowsString = [];
	for(i = 0; i < row; i++){
		gridRowsString.push("auto");
	}
	gridRowsString = gridRowsString.join(" ");
	cellContainer.style.gridTemplateRows = gridRowsString;
	cellContainer.style.gridTemplateColumns = gridRowsString;
}

// function createCells(row, col){
// 	for(i = 0; i < row; i++){
// 		for(j = 0; j < col; j++){
// 			let div = document.createElement("div");
// 			div.classList.add("unhovered");
// 			div.classList.add("cell");
// 			div.addEventListener("mouseover", function(e){
// 				div.classList.add("hovered");
// 				div.classList.remove("unhovered");
// 			})
// 			cellContainer.appendChild(div);

// 		}

// 	}
// }

function createCells(row, col){
	for(i = 0; i < row; i++){
		for(j = 0; j < col; j++){
			let div = document.createElement("div");
			div.classList.add("cell");
			div.addEventListener("mouseover", colorCellsBlack);
			cellContainer.appendChild(div);

		}

	}
}

function colorCellsBlack(e){
	e.target.style.backgroundColor = "black";
}

function colorCellsRainbow(e){
	let randomColor = getRandomColor();
	e.target.style.backgroundColor = randomColor;
}

function getRandomColor(){
	let hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
	let color = "#"
	for(i = 0; i < 6; i++){
		color += hexDigits[Math.floor(Math.random() * 16)];
	}
	return color;
}

function createContainer(){
	cellContainer = document.createElement("div");
	cellContainer.setAttribute("id", "cellContainer");
	overallContainer.appendChild(cellContainer);
}

function removeContainer(){
	overallContainer.removeChild(cellContainer);
}

//Initial Set up
let cellContainer = document.createElement("div");
cellContainer.setAttribute("id", "cellContainer");

let overallContainer = document.getElementById("overallContainer");
overallContainer.appendChild(cellContainer);

let isRainbowColors = false;

//Button Stuff
let resetButton = document.getElementById("resetButton");
let rainbowButton = document.getElementById("rainbowButton");
let blackButton = document.getElementById("blackButton");

resetButton.addEventListener("click", function(e){
	let rows = Number(prompt("How big should the grid be?"));
	if(!Number.isInteger(rows) || rows < 1 || rows > 64){
		window.alert("Please Enter a Valid Number between 1 and 64");
		return;
	}
	removeContainer();
	createContainer(rows, rows);
	modContainer(rows, rows);
	createCells(rows, rows);
})

rainbowButton.addEventListener("click", function(e){
	let cells = document.querySelectorAll(".cell");
	cells.forEach(function(element){
		element.removeEventListener("mouseover", colorCellsBlack);
		element.addEventListener("mouseover", colorCellsRainbow);
	});
})

blackButton.addEventListener("click", function(e){
	let cells = document.querySelectorAll(".cell");
	cells.forEach(function(element){
		element.removeEventListener("mouseover", colorCellsRainbow);
		element.addEventListener("mouseover", colorCellsBlack);
	})
})

//Initial Grid
let row = 16;
let col = 16;
let gridRowsString = [];

modContainer(row, col);
createCells(row, col);



//For some reason when we make the cells variable global, our rainbow function doesn't work anymore? Lines 76 and 99
//Need to make the event listener functions on the cells not anonymous functions bc we can't remove anonymous functions. Also remember to take off the classes hovered and unhovered
