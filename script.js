function modContainer(row, col){
	gridRowsString = [];
	for(i = 0; i < row; i++){
		gridRowsString.push("auto");
	}
	gridRowsString = gridRowsString.join(" ");
	cellContainer.style.gridTemplateRows = gridRowsString;
	cellContainer.style.gridTemplateColumns = gridRowsString;
}

function createCells(row, col){
	for(i = 0; i < row; i++){
		for(j = 0; j < col; j++){
			let div = document.createElement("div");
			div.classList.add("unhovered");
			div.classList.add("cell");
			div.addEventListener("mouseover", function(e){
				div.classList.add("hovered");
				div.classList.remove("unhovered");
			})
			cellContainer = document.getElementById("cellContainer");
			cellContainer.appendChild(div);

		}

	}
}

function createContainer(){
	cellContainer = document.createElement("div");
	cellContainer.setAttribute("id", "cellContainer");
	overallContainer.appendChild(cellContainer);
}

function removeContainer(){
	overallContainer.removeChild(cellContainer);
}

let cellContainer = document.createElement("div");
cellContainer.setAttribute("id", "cellContainer");

let overallContainer = document.getElementById("overallContainer");
overallContainer.appendChild(cellContainer);

let isRainbowColors = false;

//Button Stuff
let resetButton = document.getElementById("resetButton");
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

//Initial Grid
let row = 16;
let col = 16;
let gridRowsString = [];

modContainer(row, col);
createCells(row, col);



