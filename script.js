let container = document.createElement("div");
container.setAttribute("id", "divContainer");



// for(i = 0; i < 16; i++){
// 	for(j = 0; j < 16; j++){
// 		let div = document.createElement("div");
// 		div.classList.add("unhovered");
// 		div.classList.add("cell");
// 		div.addEventListener("mouseover", function(e){
// 			div.classList.add("hovered");
// 			div.classList.remove("unhovered");
// 		})
// 		container.appendChild(div);
// 	}
// }

let row = 16;
let col = 16;
createDivs(row, col);

function createDivs(row, col){
	for(i = 0; i < row; i++){
		for(j = 0; j < col; j++){
			let div = document.createElement("div");
			div.classList.add("unhovered");
			div.classList.add("cell");
			div.addEventListener("mouseover", function(e){
				div.classList.add("hovered");
				div.classList.remove("unhovered");
			})
			container.appendChild(div);

		}

	}
}


//const cells = Array.from(container.querySelectorAll(".unhovered"));
let gridRows = 16;
let gridColumns = 16;
let gridRowsString = [];

for(i = 0; i < gridRows; i++){
	gridRowsString.push("auto");
}
gridRowsString = gridRowsString.join(" ");

container.style.gridTemplateRows = gridRowsString;
container.style.gridTemplateColumns = gridRowsString;

//You have to create more divs when the user changes up the number of divs. To do this make i and j variables and eventually have them be determined by a form or input field? Probably just make the for loop into a functin. In fact, we can make like three helper functions so far. 

let overallContainer = document.getElementById("overallContainer");
overallContainer.appendChild(container);