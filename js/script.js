showTasks();

function update() {
	let date = new Date();
	let time = document.getElementById('time');
	let myDate = document.getElementById('date');
	let week = document.getElementById('week');
	
	updateHours();
	updateMinutes();
	updateDate();
	updateMonth();
	updateYear();
	updateWeek();
	// updateTest();

	function updateHours(){
		let hours = date.getHours();
		if (hours < 10) hours = '0' + hours;
		if (hours != time.children[0].outerText) {
			time.children[0].innerHTML = hours;
		}
	}

	function updateMinutes(){
		let minutes = date.getMinutes();
		if (minutes < 10) minutes = '0' + minutes;
		if (minutes != time.children[1].outerText) {
			time.children[1].innerHTML = minutes;
		}
	}

	function updateDate(){
		let curDate = date.getDate();
		if (curDate < 10) curDate = '0' + curDate;
		if (curDate != myDate.children[0].outerText) {
			myDate.children[0].innerHTML = curDate;
		}
	}

	function updateMonth(){
		let month = date.getMonth() + 1;
		if (month < 10) month = '0' + month;
		if (month != myDate.children[1].outerText) {
			myDate.children[1].innerHTML = month;
		}
	}

	function updateYear(){
		let year = date.getFullYear();
		if (year < 10) year = '0' + year;
		if (year != myDate.children[2].outerText) {
			myDate.children[2].innerHTML = year;
		}
	}

	function updateWeek(){
		let day = date.getDay();
		let daysOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

		if (week.children[0].outerText != daysOfWeek[day]) {
			for (let i = 0; i < day; i++) {
				daysOfWeek.push(daysOfWeek[0]);
				daysOfWeek.shift();
			}
			for (let i = 0; i < daysOfWeek.length; i++) {
				week.children[i].innerHTML = daysOfWeek[i];
			}
		}
	}

	// function updateTest(){
	// 	debugger;
	// 	let x = 0;
	// 	function testInner(){
	// 		Object.keys(x).forEach(function(el) {
	// 			let xEnd = String(x[el].timeEnd);
	// 			let currentData = document.getElementById("test-x").outerText;
	// 			if (currentData != xEnd) {
	// 				document.getElementById("test-x").innerHTML = xEnd;
	// 			}
	// 		});
	// 	}
	// 	testInner();
	// }
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

document.getElementById("form-add").addEventListener("submit", function(e) {
	inputTask();
	e.preventDefault();
}, false);

document.getElementById("show-task-btn").addEventListener("click", function() {
	showTasks();
})

function delTasksListener(){
	let tasksTextSelect = document.querySelectorAll(".task__text");
	for (let i = 0; i < tasksTextSelect.length; i++) {
		const element = tasksTextSelect[i];
		element.addEventListener("dblclick", function() {
			deleteTask(this);
		})
	}
}

// document.getElementById("add-time-btn").addEventListener("click", function() {
// 	timePassed();
// })

let timeStart = 0;
document.getElementById('bubble').addEventListener('click', function(){

	const timeLimit = document.getElementById('time-limit');
	timePassed();
	function timePassed(){

		if (timeStart) {
			let timeEnd = new Date;
			timeStart = timeStart.toISOString().slice(0, 19).replace('T', ' ')
			timeEnd = timeEnd.toISOString().slice(0, 19).replace('T', ' ')
	
			const currentQuery = "INSERT INTO active_time (timeStart, timeEnd) VALUES ('" + timeStart + "', '" + timeEnd + "');";
			connection.query(currentQuery, (err, rows, fields) =>{
				if (err) {
					return console.log('Error', err);
				}
			});
	
			const currentQueryDiff = "SELECT * FROM active_time WHERE timeId = (SELECT MAX(timeId) FROM active_time);";
			let pShowTime = new Promise((resolve, reject) => {
				function showTime (){
					connection.query(currentQueryDiff, (err, rows, fields) =>{
						if (err) {
							return console.log('Error', err);
						}
						result = rows;
						resolve(result);
					});
				}
				showTime();
			});
	
			pShowTime.then(function(result) {
				Object.keys(result).forEach(function(el) {
					let diff = result[el].timeEnd - result[el].timeStart;
					console.log(diff);
					document.getElementById("time-limit").innerHTML = diff;
					document.getElementById('bubble__glare').classList.remove('bubble__glare_active');
					return diff;
				});
			}).catch((reason) => {
				console.log(`Handle rejected promise (${reason}) here.`);
			});
	
			timeStart = 0;
			timeEnd = 0;
			}else{
			timeStart = new Date();
			document.getElementById('bubble__glare').classList.add('bubble__glare_active');
		}
	}
})
