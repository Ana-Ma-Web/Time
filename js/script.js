
function update() {
	let time = document.getElementById('time');
	let date = new Date(); // (*)

	let hours = date.getHours();
	time.children[0].innerHTML = hours;

	let minutes = date.getMinutes();
	time.children[1].innerHTML = minutes;
	
}

setInterval(update, 5000);
update();