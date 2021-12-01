
function update() {
	let time = document.getElementById('time');
	let myDate = document.getElementById('date');
	let week = document.getElementById('week');
	
	let date = new Date();
	let hours = date.getHours();
	if (hours < 10) hours = '0' + hours;
	time.children[0].innerHTML = hours;

	let minutes = date.getMinutes();
	if (minutes < 10) minutes = '0' + minutes;
	time.children[1].innerHTML = minutes;

	let curDate = date.getDate();
	if (curDate < 10) curDate = '0' + curDate;
	myDate.children[0].innerHTML = curDate;

	let month = date.getMonth();
	if (month < 10) month = '0' + month;
	myDate.children[1].innerHTML = month + 1;

	let year = date.getFullYear();
	if (year < 10) year = '0' + year;
	myDate.children[2].innerHTML = year;

	let day = date.getDay();
	week.children[day].classList.add('current-day');


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





