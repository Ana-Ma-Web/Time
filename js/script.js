
function update() {
	let time = document.getElementById('time');
	let date = new Date();
	let hours = date.getHours();
	if (hours < 10) hours = '0' + hours;
	time.children[0].innerHTML = hours;

	let minutes = date.getMinutes();
	if (minutes < 10) minutes = '0' + minutes;
	time.children[1].innerHTML = minutes;

	Object.keys(x).forEach(function(el) {
		let xEnd = String(x[el].timeEnd);
		let currentData = document.getElementById("test-x").outerText;
		if (currentData != xEnd) {
			document.getElementById("test-x").innerHTML = xEnd;
		}
	});
}

setInterval(update, 100);
update();

document.getElementById("show-tables").addEventListener("click", function() {
	// showTables();
	mySelect();
})

document.getElementById("conn-end").addEventListener("click", function() {
	connEnd();
})

document.getElementById("add").addEventListener("click", function() {
	insert();
})

document.getElementById("test").addEventListener("click", function() {
	testPromise();
})





