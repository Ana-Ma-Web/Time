const { realpathSync } = require("original-fs");

function myQuery (queryString){
   queryString = String(queryString);
	connection.query(queryString, (err, rows, fields) =>{
		if (err) {
			return console.log('Error', err);
		}
		console.log(rows);
		
	});
}
let result;

function testQuery (queryString){
   queryString = String(queryString);

	connection.query(queryString, (err, rows, fields) =>{
		if (err) {
			return console.log('Error', err);
		}
		result = rows;
		console.log(result);
		return result;
	});
}
function testFunction(x){
	let result = testQuery(x);
	setTimeout(function(){
		console.log(result);
	// 	Object.keys(result).forEach(function(el) {
	// 		var test = result[el];
	// 		console.log(test.timeEnd);
	// 		document.getElementById("test").innerHTML = test.timeEnd;
	// 	});
	}, 1000);
}

function test(){
	// testQuery('SELECT timeEnd FROM active_time WHERE timeId = "1";');
	testFunction('SELECT timeEnd FROM active_time WHERE timeId = "1";');
}

function showTables (){
   myQuery('SHOW TABLES;');
}

// function mySelect (){
//    myQuery('SELECT * FROM logging LEFT JOIN  active_time ON active_time.timeId = logging.timeId LEFT JOIN activity ON activity.actId = logging.actId;');
// }

function mySelect (){
   myQuery('SELECT timeStart FROM active_time;');
}

function insert(){
	myQuery('INSERT INTO active_time (timeStart) VALUES ("2004-05-23 14:25:10");');
}




