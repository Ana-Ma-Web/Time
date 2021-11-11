const { app, BrowserWindow } = require('electron');

function createWindow () {
	const win = new BrowserWindow({
		width: 580,
		height: 720
	})

	win.loadFile('index.html')
}

app.whenReady().then(() => {
	createWindow();

	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})

	app.on('window-all-closed', function () {
		if (process.platform !== 'darwin') app.quit();
	})
})

const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'meow',
	database: 'meow',
	password: 'meowmeow'
});

connection.connect( err => {
	if (err){
		console.log(err);
		return err;
	}
	else{
		console.log('Database meow!');
	}
})

connection.query('SELECT * FROM `actor`', (err, result) => {
	console.log(err);
	console.log(result);
})
