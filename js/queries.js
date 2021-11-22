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

function testQuery (queryString){
   queryString = String(queryString);
	let result;
	connection.query(queryString, (err, rows, fields) =>{
		if (err) {
			return console.log('Error', err);
		}
		console.log(rows);
		result = rows;
	});
	setTimeout(function(){
		console.log(result);
		Object.keys(result).forEach(function(el) {
			var row = result[el];
			console.log(row.test);
		});
	}, 1000);
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

function test(){
	testQuery('SELECT timeEnd FROM active_time WHERE timeId = "1";');
}
