
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var items = document.getElementById("items");



function createTableElement(){
	var td = document.createElement("td");
	var tr = document.createElement("tr");
	var btnDone = document.createElement("button");
	var btnRemove = document.createElement("button");
	btnDone.appendChild(document.createTextNode("Done"));
	btnRemove.innerHTML = "Remove";

	td.appendChild(document.createTextNode(input.value));
	tr.appendChild(td);
	items.appendChild(tr);
	tr.appendChild(btnDone);
	tr.appendChild(btnRemove);


	btnDone.addEventListener("mouseenter", function(){
		btnDone.classList.add("hover");
	})
btnDone.addEventListener("mouseleave", function(){
		btnDone.classList.add("out");
	})

btnDone.addEventListener("click", function(){
	td.classList.toggle("done");
});
	
btnRemove.addEventListener("click", function(){
	tr.parentNode.removeChild(tr);
})

	input.value = "";
}

function inputLength(){
	return input.value.length;
}

function addTableAfterClick(){
	if(inputLength() > 0){
		createTableElement();
	}
}

function addTableAfterKeypress(event) {
	if(inputLength() > 0 && event.keyCode === 13){
		createTableElement();
	}
}

button.addEventListener("click", addTableAfterClick);
input.addEventListener("keypress", addTableAfterKeypress);

