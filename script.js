 
 function addItem() {
 	var newItem = document.createElement("div");
 	newItem.innerHTML = document.getElementById("text").value;
 	newItem.onclick = removeItem;
 	document.getElementById("out").appendChild(newItem);
 	saveList();
 }

 function removeItem() {
 	document.getElementById("out").removeChild(this);
 	saveList();
 }

 function saveList() {
 	localStorage.storedList = document.getElementById("out").innerHTML;
 }

 function loadList() {
 	document.getElementById("out").innerHTML = localStorage.storedList;
 	for (var i = 0; i < list.children.length; i++) {
 		list.children[i].onclick = removeItem();
 	}
 }

 if(localStorage.storedList) {
 	loadList();
 }