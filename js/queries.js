let x = 0;
const queryActTimeId1 = 'SELECT timeEnd FROM active_time WHERE timeId = "1";';

function testPromise() {

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




