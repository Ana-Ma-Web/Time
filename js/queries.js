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

function showTables (){
   myQuery('SHOW TABLES;');
}

// function mySelect (){
//    myQuery('SELECT * FROM logging LEFT JOIN  active_time ON active_time.timeId = logging.timeId LEFT JOIN activity ON activity.actId = logging.actId;');
// }

function mySelect (){
   myQuery('SELECT timeStart FROM active_time;');
}


function Insert(){
	myQuery('INSERT INTO active_time (timeStart) VALUES ("2004-05-23 14:25:10");');
}

