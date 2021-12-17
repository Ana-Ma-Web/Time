
function testPromise() {
	const queryActTimeId1 = 'SELECT timeEnd FROM active_time WHERE timeId = "1";';

	let pTest = new Promise((resolve, reject) => {
		function testQuery (){
			connection.query(queryActTimeId1, (err, rows, fields) =>{
				if (err) {
					return console.log('Error', err);
				}
				result = rows;
				resolve(result);
			});
		}
		testQuery();
	});

	pTest.then(function(result) {
		x = result;
		Object.keys(result).forEach(function(el) {
			let test = result[el];
			let testResult = test.timeEnd;
			let currentData = document.getElementById("test").outerText;
			if (currentData != testResult) {
				document.getElementById("test").innerHTML = testResult;
				
				let xEnd = String(x[el].timeEnd);
				let currentDataX = document.getElementById("test-x").outerText;
				if (currentDataX != xEnd) {
					document.getElementById("test-x").innerHTML = xEnd;
				}
			}
		});
	}).catch((reason) => {
		console.log(`Handle rejected promise (${reason}) here.`);
	});
}

// testQuery('SELECT timeEnd FROM active_time WHERE timeId = "1";');

// function showTables (){
// 	myQuery('SHOW TABLES;');
// }

// function mySelect (){
//    myQuery('SELECT * FROM logging LEFT JOIN  active_time ON active_time.timeId = logging.timeId LEFT JOIN activity ON activity.actId = logging.actId;');
// }

// function mySelect (){
// 	myQuery('SELECT timeStart FROM active_time;');
// }

// function insert(){
// 	testQuery('INSERT INTO active_time (timeStart) VALUES ("2004-05-23 14:25:10");');
// }



function showTasks() {
	const queryTaskShow = 'SELECT id, name FROM task;';

	let pShowTask = new Promise((resolve, reject) => {
		function showQuery (){
			connection.query(queryTaskShow, (err, rows, fields) =>{
				if (err) {
					return console.log('Error', err);
				}
				result = rows;
				resolve(result);
			});
		}
		showQuery();
	});

	pShowTask.then(function(result) {

		urgentList = document.getElementById('task-fire');
		while (urgentList.firstChild) {
			urgentList.removeChild(urgentList.firstChild);
		}

		Object.keys(result).forEach(function(el) {
			let testResult = result[el];
			let resultName = testResult.name;
			let resultId = testResult.id;
		
			let liList = document.createElement('li');
			liList.setAttribute("id", "task-id-" + resultId);
			liList.classList.add("task__text");
			liList.innerHTML = resultName;
			urgentList.append(liList);
		});

		//TEST
		delTasksListener();


		
	}).catch((reason) => {
		console.log(`Handle rejected promise (${reason}) here.`);
	});
}



function insertQuery (table, field, val){
	const currentQuery = 'INSERT INTO ' + table + ' (' + field + ') VALUES ("' + val + '");';
	connection.query(currentQuery, (err, rows, fields) =>{
		if (err) {
			return console.log('Error', err);
		}
	});
}

function deleteQuery (table, col, rowId){
	const currentQuery = "DELETE FROM " + table + " WHERE " + col + " = " + rowId + ";";
	connection.query(currentQuery, (err, rows, fields) =>{
		if (err) {
			return console.log('Error', err);
		}
	});
}

function inputTask(){
	addTaskInput = document.getElementById('add-task');
	insertQuery('task', 'name', addTaskInput.value);
	addTaskInput.value = '';
	showTasks();
}

function deleteTask(val){
	let rowId = val.id.split('task-id-')[1];
	deleteQuery('task', 'id', rowId);
	showTasks();
}

function insertLogTime(timeStart, timeEnd){
	let values = timeStart + '", "' + timeEnd;
	insertQuery('active_time', 'timeStart, timeEnd', values);
}



// let timeStart = 0;
// function timePassed(timeStart){

// 	if (timeStart) {
// 		let timeEnd = new Date;
// 		timeStart = timeStart.toISOString().slice(0, 19).replace('T', ' ')
// 		timeEnd = timeEnd.toISOString().slice(0, 19).replace('T', ' ')

// 		const currentQuery = "INSERT INTO active_time (timeStart, timeEnd) VALUES ('" + timeStart + "', '" + timeEnd + "');";
// 		connection.query(currentQuery, (err, rows, fields) =>{
// 			if (err) {
// 				return console.log('Error', err);
// 			}
// 		});

// 		const currentQueryDiff = "SELECT * FROM active_time WHERE timeId = (SELECT MAX(timeId) FROM active_time);";
// 		let pShowTime = new Promise((resolve, reject) => {
// 			function showTime (){
// 				connection.query(currentQueryDiff, (err, rows, fields) =>{
// 					if (err) {
// 						return console.log('Error', err);
// 					}
// 					result = rows;
// 					resolve(result);
// 				});
// 			}
// 			showTime();
// 		});

// 		pShowTime.then(function(result) {
// 			Object.keys(result).forEach(function(el) {
// 				let diff = result[el].timeEnd - result[el].timeStart;
// 				console.log(diff);
// 				document.getElementById("time-limit").innerHTML = diff;
// 				return diff;
// 			});
// 		}).catch((reason) => {
// 			console.log(`Handle rejected promise (${reason}) here.`);
// 		});

// 		timeStart = 0;
// 		timeEnd = 0;
// 		}else{
// 		timeStart = new Date();
// 	}
// }





