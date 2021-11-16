
function update() {
	let time = document.getElementById('time');
	let date = new Date();
	let hours = date.getHours();
	if (hours < 10) hours = '0' + hours;
	time.children[0].innerHTML = hours;

	let minutes = date.getMinutes();
	if (minutes < 10) minutes = '0' + minutes;
	time.children[1].innerHTML = minutes;
	console.log(date);
}

setInterval(update, 5000);
update();