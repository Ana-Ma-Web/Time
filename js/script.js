
function update() {
	let time = document.getElementById('time');
	let date = new Date();
	let hours = date.getHours();
	if (hours < 10) hours = '0' + hours;
	time.children[0].innerHTML = hours;

	let minutes = date.getMinutes();
	if (minutes < 10) minutes = '0' + minutes;
	time.children[1].innerHTML = minutes;

	document.getElementById("test-x").innerHTML = x;
	Object.keys(x).forEach(function(el) {
		var test = x[el];
		document.getElementById("test-x").innerHTML = test.timeEnd;
		
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




